<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    protected $fillable = [
        'primary',
        'on_primary',
        'surface',
    ];

    public static function light(): Theme
    {
        return Theme::orderBy('id')->limit(1)->first();
    }

    public static function dark(): Theme
    {
        return Theme::orderByDesc('id')->limit(1)->first();
    }
}
