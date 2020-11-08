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
           'name' => $faker->name,
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
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => $password
            ]);
            $user->createToken(config('app.name'))->accessToken;
            $user->roles()->attach($faker->randomElement([$teacherRoleId, $studentRoleId]));
        }
    }
}
