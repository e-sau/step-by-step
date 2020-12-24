<?php

namespace Database\Seeders;

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

        $tasksList = [
            [
                'title' => 'Сложение',
                'description' => 'Мама пошла за мороженым. Купила 3 пломбира для папы, 1 эскимо для себя и 3 рожка для Тани и Пети. Сколько мороженого купила мама?',
                'difficult' => '1',
                'solution' => '7',
                'subject_id' => '1',
                'image' => '/images/tasks/icecream.png'
            ],
            [
                'title' => 'Вычитание',
                'description' => 'Дане подарили книгу про приключения незнайки. Книга из 10 страниц. Даня прочитал уже 4 страницы. Сколько страниц осталось прочитать Дане?',
                'difficult' => '1',
                'solution' => '6',
                'subject_id' => '1',
                'image' => '/images/tasks/book.png'
            ],
            [
                'title' => 'Вычитание',
                'description' => 'У Саши было 5 яблок, два яблоко он отдал Насте, еще одно дал Пете, сколько яблок осталось у Саши ?',
                'difficult' => '1',
                'solution' => '2',
                'subject_id' => '1',
                'image' => '/images/tasks/rope.png'
            ],
        ];

        foreach ( $tasksList as $task ) {
            Task::create([
                'title' => $task['title'],
                'description' => $task['description'],
                'difficult' => $task['difficult'],
                'solution' => $task['solution'],
                'subject_id' => $task['subject_id'],
                'type_id' => 1,
                'image' => $task['image'],
            ]);
        }
    }
}
