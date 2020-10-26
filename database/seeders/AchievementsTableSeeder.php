<?php

namespace Database\Seeders;

use App\Models\Achievement;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class AchievementsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Achievement::truncate();
        Schema::enableForeignKeyConstraints();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Achievement::create([
                'title' => $faker->sentence(4),
                'description' => $faker->sentence(4),
                'code' => $faker->word,
                'image' => $faker->url
            ]);
        }
    }
}
