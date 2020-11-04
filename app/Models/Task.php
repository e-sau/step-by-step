<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'difficult', 'solution', 'subject_id'
    ];

    public static function createRules()
    {
        return [
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:5|max:255',
            'difficult' => 'required|integer',
            'solution' => 'required|min:10',
            'subject_id' => 'required|exists:'.Subject::class.',id'
        ];
    }

    public static function updateRules()
    {
        return [
            'title' => 'min:5|max:255',
            'description' => 'min:5|max:255',
            'difficult' => 'integer',
            'solution' => 'min:10',
            'subject_id' => 'exists:'.Subject::class.',id'
        ];
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function additions()
    {
        return $this->belongsToMany(Addition::class, 'task_additions');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_tasks');
    }
}
