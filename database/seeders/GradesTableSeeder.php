<?php

namespace Database\Seeders;

use App\Models\Grade;
use App\Models\School;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class GradesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Grade::truncate();
        Schema::enableForeignKeyConstraints();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Grade::create([
                'letter' => $faker->randomElement(['а', 'б', 'в']),
                'school_id' => $faker->unique()->numberBetween(1, School::count()),
                'level' => 1
            ]);
        }
    }
}
