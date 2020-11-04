<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Addition extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'link'
    ];

    public static function createRules()
    {
        return [
            'title' => 'required|min:5|max:255',
            'link' => 'required|min:5|max:255'
        ];
    }

    public static function updateRules()
    {
        return [
            'title' => 'min:5|max:255',
            'link' => 'min:5|max:255'
        ];
    }

    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'task_additions');
    }
}
