<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskAdditionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_additions', function (Blueprint $table) {
            $table->unsignedBigInteger('task_id');
            $table->unsignedBigInteger('addition_id');

            $table->foreign('task_id')
                ->references('id')
                ->on('tasks');
            $table->foreign('addition_id')
                ->references('id')
                ->on('additions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('task_additions', function (Blueprint $table) {
            $table->dropForeign(['task_id']);
            $table->dropForeign(['addition_id']);
        });

        Schema::dropIfExists('task_additions');
    }
}
