<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableUserGrades extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_grades', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('grade_id');

            $table->foreign('user_id')
                ->references('id')
                ->on('users');
            $table->foreign('grade_id')
                ->references('id')
                ->on('grades');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_grades', function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['grade_id']);
        });

        Schema::dropIfExists('user_grades');
    }
}
