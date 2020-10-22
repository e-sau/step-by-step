<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'title',
        'school_id'
    ];

    public static function rules()
    {
        return [
            'title' => 'required|min:2|max:10',
            'school_id' => 'required|exists:'.School::class.',id'
        ];
    }

    public static function attributeNames()
    {
        return [
            'title' => __('entities.grade_title'),
            'school_id' => __('entities.grade_school_id'),
        ];
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function user()
    {
        return $this->belongsToMany(User::class, 'user_grades');
    }
}
