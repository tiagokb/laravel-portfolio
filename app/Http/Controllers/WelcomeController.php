<?php

namespace App\Http\Controllers;

use App\Helpers\Gravatar;
use App\Models\PortfolioProfile;
use App\Models\Project;
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

        return Inertia::render('Welcome', [
            'gravatar' => $gravatar,
            'profile' => $profile,
            'socials' => $socials,
            'contacts' => $contacts,
            'projects' => $projects,
        ]);
    }


}
