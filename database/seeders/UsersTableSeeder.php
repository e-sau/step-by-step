<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        User::truncate();
        Schema::enableForeignKeyConstraints();

        $faker = \Faker\Factory::create();

        $password = Hash::make('123456');

        /* Admin */
        $admin = User::create([
           'login' => 'admin',
           'name' => $faker->firstName,
           'surname' => $faker->lastName,
           'birthday' => '1990-01-01',
           'email' => $faker->email,
           'password' => $password
        ]);

        $admin->createToken(config('app.name'))->accessToken;
        $adminRoleId = Role::where('name', 'admin')->get(['id']);
        $admin->roles()->attach($adminRoleId);

        /* Other */
        $studentRoleId = Role::where('name', 'student')->get(['id']);
        $teacherRoleId = Role::where('name', 'teacher')->get(['id']);

        for ($i = 0; $i < 9; $i++) {
            $user = User::create([
                'login' => $faker->unique()->word(),
                'name' => $faker->firstName,
                'surname' => $faker->lastName,
                'birthday' => $faker->dateTimeBetween('-7 years', '-6 years')->format('Y-m-d'),
                'email' => $faker->email,
                'password' => $password
            ]);
            $user->createToken(config('app.name'))->accessToken;
            $user->roles()->attach($studentRoleId);
        }
    }
}
