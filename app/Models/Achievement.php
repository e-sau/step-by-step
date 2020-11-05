<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title',
        'description',
        'code',
        'image'
    ];

    public static function rules()
    {
        return [
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:5|max:255',
            'code' => 'required|min:1|max:255',
            'image' => 'min:1|max:255'
        ];
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_achievements');
    }
}
