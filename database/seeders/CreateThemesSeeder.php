<?php

namespace Database\Seeders;

use App\Models\Theme;
use Illuminate\Database\Seeder;

class CreateThemesSeeder extends Seeder
{
    public function run(): void
    {
        $theme = [
            'primary' => '#59595A',
            'on_primary' => '#000A17',
            'surface' => '#E6E5E5',
        ];

        Theme::create($theme);

        $dark = [
            'primary' => '#59595A',
            'on_primary' => '#EBEBEB',
            'surface' => '#0C0E0F',
        ];

        Theme::create($dark);
    }
}
