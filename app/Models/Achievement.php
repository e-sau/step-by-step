<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'code',
        'image'
    ];

    public static function createRules()
    {
        return [
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:5|max:255',
            'code' => 'required|min:1|max:255',
            'image' => 'min:1|max:255'
        ];
    }

    public static function updateRules()
    {
        return [
            'title' => 'min:5|max:255',
            'description' => 'min:5|max:255',
            'code' => 'min:1|max:255',
            'image' => 'min:1|max:255'
        ];
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_achievements');
    }
}
