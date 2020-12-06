<?php

namespace Database\Seeders;

use App\Models\TaskType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class TaskTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        TaskType::truncate();
        Schema::enableForeignKeyConstraints();

        TaskType::create([
            'name' => 'DRAG_AND_DROP'
        ]);
    }
}
