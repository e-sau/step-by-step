<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'school_id'
    ];

    public function grade()
    {
        return $this->belongsTo(School::class);
    }
}
