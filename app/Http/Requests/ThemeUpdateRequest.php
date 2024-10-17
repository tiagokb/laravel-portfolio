<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ThemeUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'lightId' => ['required'],
            'lightPrimary' => ['required'],
            'lightText' => ['required'],
            'lightSurface' => ['required'],

            'darkId' => ['required'],
            'darkPrimary' => ['required'],
            'darkText' => ['required'],
            'darkSurface' => ['required'],
        ];
    }
}
