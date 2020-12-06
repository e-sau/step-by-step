<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="User"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="title", type="string"),
 *      @OA\Property(property="school_id", type="integer"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="school", type="object",
 *          @OA\Items(ref="#/components/schemas/School"),
 *      ),
 *      @OA\Property(
 *          property="users", type="array",
 *          @OA\Items(ref="#/components/schemas/User"),
 *      ),
 *  )
 */
class Grade extends Model
{
    use HasFactory;

    protected $fillable = [
        'level',
        'letter',
        'school_id'
    ];

    public static function createRules()
    {
        return [
            'level' => 'required|integer',
            'letter' => 'nullable|string|min:1|max:1',
            'school_id' => 'required|exists:'.School::class.',id'
        ];
    }

    public static function updateRules()
    {
        return [
            'level' => 'required|integer',
            'letter' => 'nullable|string|min:1|max:1',
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
