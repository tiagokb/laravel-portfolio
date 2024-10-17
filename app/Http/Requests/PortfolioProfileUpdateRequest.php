<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PortfolioProfileUpdateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'title' => ['nullable'],
            'email' => ['required', 'email', 'max:254'],
            'telegram' => ['nullable', 'integer'],
            'whatsapp' => ['nullable', 'integer'],
            'twitter' => ['nullable'],
            'instagram' => ['nullable'],
            'facebook' => ['nullable'],
            'linkedin' => ['nullable'],
            'devto' => ['nullable'],
            'medium' => ['nullable'],
            'description' => ['nullable'],
        ];
    }
}
