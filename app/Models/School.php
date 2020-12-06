<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="School"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="title", type="string"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="grades", type="array",
 *          @OA\Items(ref="#/components/schemas/Grade"),
 *      ),
 *  )
 */
class School extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
    ];

    public static function rules()
    {
        return [
            'title' => 'required|min:5|max:255'
        ];
    }

    public function grades()
    {
        return $this->hasMany(Grade::class);
    }
}
