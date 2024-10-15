<?php

namespace App\Http\Controllers\Portfolio;

use App\Helpers\Gravatar;
use App\Http\Controllers\Controller;
use App\Http\Requests\PortfolioProfileUpdateRequest;
use App\Models\PortfolioProfile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function edit()
    {

        $portfolio = PortfolioProfile::orderByDesc('updated_at')->limit(1)->get()->first();

        if ($portfolio == null) {
            $portfolio = PortfolioProfile::create([
                'name' => auth()->user()->name,
                'email' => auth()->user()->email,
            ]);
        }

        $gravatar = Gravatar::getGravatar($portfolio->email);

        return Inertia::render('Portfolio/Edit', [
            'gravatar' => $gravatar,
            'portfolio' => $portfolio
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(PortfolioProfileUpdateRequest $request): RedirectResponse
    {

        $portfolio = PortfolioProfile::orderByDesc('updated_at')->limit(1)->get()->first();

        $portfolio->fill($request->validated());

        $portfolio->save();

        return Redirect::route('portfolio.edit');
    }
}
