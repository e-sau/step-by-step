<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="Achievement"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="title", type="string"),
 *      @OA\Property(property="description", type="string"),
 *      @OA\Property(property="code", type="string"),
 *      @OA\Property(property="image", type="string"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="users", type="array",
 *          @OA\Items(ref="#/components/schemas/User"),
 *      ),
 *  )
 */
class Achievement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'code',
        'image'
    ];

    public static function createRules()
    {
        return [
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:5|max:255',
            'code' => 'required|min:1|max:255',
            'image' => 'min:1|max:255'
        ];
    }

    public static function updateRules()
    {
        return [
            'title' => 'min:5|max:255',
            'description' => 'min:5|max:255',
            'code' => 'min:1|max:255',
            'image' => 'min:1|max:255'
        ];
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_achievements');
    }
}
