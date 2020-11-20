<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public static function createRules()
    {
        return [
            'name' => 'required|min:5|max:255'
        ];
    }

    public static function updateRules()
    {
        return [
            'name' => 'required|min:5|max:255'
        ];
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
