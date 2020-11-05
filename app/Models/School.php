<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    public $timestamps = false;

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
