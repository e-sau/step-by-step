<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="Subject"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="title", type="string"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(property="slug", type="string"),
 *      @OA\Property(
 *          property="grades", type="array",
 *          @OA\Items(ref="#/components/schemas/Grade"),
 *      ),
 *      @OA\Property(
 *          property="tasks", type="array",
 *          @OA\Items(ref="#/components/schemas/Task"),
 *      ),
 *  )
 */
class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'title'
    ];

    public static function createRules()
    {
        return [
            'title' => 'required|min:3|max:50',
            'slug' => 'required|min:3|max:50',
        ];
    }

    public static function updateRules()
    {
        return [
            'title' => 'min:3|max:50',
            'slug' => 'min:3|max:50',
        ];
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
