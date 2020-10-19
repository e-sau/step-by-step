<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert($this->getData());
    }

    private function getData()
    {
        $data[] = [
            'title' => 'Умножение',
            'description' => '2*6',
            'difficult' => 1,
            'solution' => '12'
        ];
        $data[] = [
            'title' => 'Сложение',
            'description' => '2+6',
            'difficult' => 1,
            'solution' => '12'
        ];
        return $data;
    }
}
