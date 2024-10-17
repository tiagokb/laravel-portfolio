<?php

namespace App\Http\Controllers;

use App\Helpers\Gravatar;
use App\Models\PortfolioProfile;
use App\Models\Project;
use App\Models\Theme;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {

        $profile = PortfolioProfile::orderByDesc('updated_at')->limit(1)->get()->first();

        $gravatar = $profile->gravatarImageUrl();

        $socials = $profile->socials();

        $contacts = $profile->contacts();

        $projects = Project::all();

        $mode = 'light';

        if (session()->has('mode') && (session('mode') == "light" || session('mode') == "dark")) {
            $mode = session('mode');
        }

        $theme = match ($mode) {
            'dark' => Theme::dark(),
            default => Theme::light(),
        };

        return Inertia::render('Welcome', [
            'gravatar' => $gravatar,
            'profile' => $profile,
            'socials' => $socials,
            'contacts' => $contacts,
            'projects' => $projects,
            'theme' => $theme,
        ]);
    }

    public function changeTheme(Request $request)
    {
        $mode = $request->input('mode', 'light'); // 'light' ou 'dark'

        // Armazena na sessão ou em uma tabela de usuários, dependendo da sua necessidade
        session(['mode' => $mode]);

        return redirect()->route('welcome'); // Redireciona de volta para a página inicial
    }
}
