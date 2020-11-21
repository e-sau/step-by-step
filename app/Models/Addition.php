<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="Addition"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="title", type="string"),
 *      @OA\Property(property="link", type="string"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="tasks", type="array",
 *          @OA\Items(ref="#/components/schemas/Task"),
 *      ),
 *  )
 */
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
