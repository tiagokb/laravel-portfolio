<?php

namespace App\Helpers;

class Gravatar
{

    private const base_url = 'https://www.gravatar.com/avatar/';

    public static function getGravatar($email): string
    {
        $hash = hash('sha256', strtolower(trim($email)));

        return self::base_url . $hash;
    }
}
