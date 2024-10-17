<?php

namespace App\Http\Controllers\Theme;

use App\Http\Controllers\Controller;
use App\Http\Requests\ThemeUpdateRequest;
use App\Models\Theme;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ThemeController extends Controller
{
    public function edit()
    {

        $light = Theme::light()->toArray();
        $dark = Theme::dark()->toArray();

        return Inertia::render('Theme/Edit', [
            'light' => $light,
            'dark' => $dark,
        ]);
    }

    public function update(ThemeUpdateRequest $request)
    {
        $light = Theme::find($request->lightId);
        $dark = Theme::find($request->darkId);

        $light->fill([
            'primary' => $request->lightPrimary,
            'on_primary' => $request->lightText,
            'surface' => $request->lightSurface,
        ]);

        $dark->fill([
            'primary' => $request->darkPrimary,
            'on_primary' => $request->darkText,
            'surface' => $request->darkSurface,
        ]);

        $light->save();
        $dark->save();

        return Redirect::route('theme.edit');
    }
}
