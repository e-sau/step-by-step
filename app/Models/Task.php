<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'difficult',
        'solution'
    ];

    public function rules()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'difficult' => 'required|string|max:150',
            'solution' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'date.required' => 'Это поле обязательно для заполнения',
            'date.string'  => 'Это поле должно быть строкой',
            'date.max'  => 'Это поле должно не может быть больше ',
        ];
    }
}
