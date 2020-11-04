<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public static function rules()
    {
        return [
            'name' => 'required|min:3|max:255'
        ];
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_roles');
    }
}
