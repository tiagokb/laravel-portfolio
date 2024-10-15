<?php

namespace App\Http\Controllers\Profile;

use App\Helpers\Gravatar;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function edit()
    {
        $gravatar = Gravatar::getGravatar(auth()->user()->email);

        return Inertia::render('Profile/Edit', [
            'user' => auth()->user(),
            'gravatar' => $gravatar,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        $request->user()->save();

        return Redirect::route('profile.edit');
    }
}
