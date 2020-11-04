<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'title'
    ];

    public static function rules()
    {
        return [
            'title' => 'required|min:3|max:50',
        ];
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
