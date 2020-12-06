<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="Review"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="message", type="text"),
 *      @OA\Property(property="user_id", type="integer"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="user", type="object",
 *          @OA\Items(ref="#/components/schemas/User"),
 *      ),
 *  )
 */
class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'user_id',
    ];

    public static function createRules()
    {
        return [
            'message' => 'required|string|min:5',
            'user_id' => 'required|exists:'.User::class.',id'
        ];
    }

    public static function updateRules()
    {
        return [
            'message' => 'required|string|min:5',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
