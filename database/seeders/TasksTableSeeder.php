<?php

namespace Database\Seeders;

use App\Models\Subject;
use App\Models\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        Task::truncate();
        Schema::enableForeignKeyConstraints();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Task::create([
                'title' => $faker->sentence(3),
                'description' => $faker->sentence(5),
                'difficult' => $faker->numberBetween(0, 3),
                'solution' => $faker->text(100),
                'subject_id' => $faker->numberBetween(1, Subject::count())
            ]);
        }
    }
}
