<?php

namespace App\Models;

use App\Helpers\Gravatar;
use Illuminate\Database\Eloquent\Model;

class PortfolioProfile extends Model
{
    protected $fillable = [
        'name',
        'email',
        'telegram',
        'whatsapp',
        'twitter',
        'instagram',
        'facebook',
        'linkedin',
        'devto',
        'medium',
        'description'
    ];

    public function gravatarImageUrl(): string
    {
        return Gravatar::getGravatar($this->email);
    }

    public function socials(): array
    {
        return array_filter([
            'twitter' => [
                'name' => 'X',
                'url' => $this->twitter,
                'icon' => 'fa-twitter'
            ],
            'instagram' => [
                'name' => 'Instagram',
                'url' => $this->instagram,
                'icon' => 'fa-instagram'
            ],
            'facebook' => [
                'name' => 'Facebook',
                'url' => $this->facebook,
                'icon' => 'fa-facebook'
            ],
            'linkedin' => [
                'name' => 'Linkedin',
                'url' => $this->linkedin,
                'icon' => 'fa-linkedin'
            ],
            'devto' => [
                'name' => 'Dev.to',
                'url' => $this->devto,
                'icon' => 'fa-devto'
            ],
            'medium' => [
                'name' => 'Medium',
                'url' => $this->medium,
                'icon' => 'fa-medium'
            ],
        ], fn($social) => !is_null($social['url']));
    }

    public function contacts(): array
    {
        return array_filter([
            'email' =>
                [
                    'url' => 'mailto:' . $this->email,
                    'validator' => $this->email,
                    'name' => 'e-mail'
                ],
            'whatsapp' => [
                'url' => 'https://wa.me/' . $this->whatsapp,
                'validator' => $this->whatsapp,
                'name' => 'whatsapp'
            ],
            'telegram' =>
                [
                    'url' => 'https://t.me/' . $this->telegram,
                    'validator' => $this->telegram,
                    'name' => 'telegram'
                ],
        ], fn($contact) => !is_null($contact['validator']));
    }
}
