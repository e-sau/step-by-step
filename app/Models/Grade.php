<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'school_id'
    ];

    public static function createRules()
    {
        return [
            'title' => 'required|min:2|max:10',
            'school_id' => 'required|exists:'.School::class.',id'
        ];
    }

    public static function updateRules()
    {
        return [
            'title' => 'min:2|max:10',
            'school_id' => 'exists:'.School::class.',id'
        ];
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_grades');
    }

    /**
     * Delete model with relations
     *
     * @param Grade $grade
     * @throws Exception
     */
    public static function deleteWithRelations(Grade $grade)
    {
        $users = $grade->users();
        $users->detach($users->allRelatedIds()->all());

        $grade->delete();
    }
}
