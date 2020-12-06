<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /* Passport */
        $provider = in_array('users', array_keys(config('auth.providers'))) ? 'users' : null;
        Artisan::call('passport:client', ['--personal' => true, '--name' => config('app.name').' Personal Access Client']);
        Artisan::call('passport:client', ['--password' => true, '--name' => config('app.name').' Password Grant Client', '--provider' => $provider]);

        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(SchoolsTableSeeder::class);
        $this->call(GradesTableSeeder::class);
        $this->call(SubjectsTableSeeder::class);
        $this->call(TaskTypesSeeder::class);
        $this->call(TasksTableSeeder::class);
        $this->call(AchievementsTableSeeder::class);
        $this->call(AdditionsTableSeeder::class);
        $this->call(ReviewsTableSeeder::class);
    }
}
