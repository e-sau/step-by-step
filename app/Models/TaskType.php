<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="TaskType"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="name", type="string"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="tasks", type="array",
 *          @OA\Items(ref="#/components/schemas/Task"),
 *      ),
 *  )
 */
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
