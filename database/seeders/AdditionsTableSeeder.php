<?php

namespace Database\Seeders;

use App\Models\Addition;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class AdditionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Addition::truncate();
        Schema::enableForeignKeyConstraints();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Addition::create([
                'title' => $faker->sentence(4),
                'link' => $faker->url
            ]);
        }
    }
}
