<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPhoto extends Model
{
    use HasFactory;

    protected $fillable = [
        'photo'
    ];

    public static function createRules()
    {
        return [
            'photo' => 'required|mimes:jpeg,png',
        ];
    }

    public static function updateRules()
    {
        return [
            'photo' => 'required|mimes:jpeg,png',
        ];
    }
}
