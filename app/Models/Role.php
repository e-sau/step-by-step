<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="Role"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="name", type="string"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="users", type="array",
 *          @OA\Items(ref="#/components/schemas/User"),
 *      ),
 *  )
 */
class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public static function rules()
    {
        return [
            'name' => 'required|min:3|max:255'
        ];
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_roles');
    }
}
