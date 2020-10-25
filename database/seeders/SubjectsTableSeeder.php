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

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 3; $i++) {
            Subject::create([
                'title' => $faker->unique()->randomElement(['maths', 'russian language', 'world around']),
            ]);
        }
    }
}
