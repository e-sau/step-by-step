<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title', 'description', 'difficult', 'solution', 'subject_id'
    ];

    public static function rules()
    {
        return [
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:5|max:255',
            'difficult' => 'required|digits_between:0,3',
            'solution' => 'required|min:10',
            'subject_id' => 'required|exists:'.Subject::class.',id'
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
