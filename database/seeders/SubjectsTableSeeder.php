<?php

namespace Database\Seeders;

use App\Models\Subject;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class SubjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Subject::truncate();
        Schema::enableForeignKeyConstraints();

        Subject::create([
                'title' => 'Математика',
                'slug' => 'maths',
        ]);
        Subject::create([
            'title' => 'Русский язык',
                'slug' => 'russian_language',
        ]);
        Subject::create([
            'title' => 'Окружающий мир',
            'slug' => 'world_around',
        ]);
    }
}
