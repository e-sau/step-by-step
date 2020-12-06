<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableUsersAddColumnAvatarIdPhotoId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedBigInteger('avatar_id')->nullable();
            $table->unsignedBigInteger('photo_id')->nullable();
            $table->foreign('avatar_id')
                ->references('id')
                ->on('user_photos');
            $table->foreign('photo_id')
                ->references('id')
                ->on('user_photos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['avatar_id']);
            $table->dropForeign(['photo_id']);
            $table->dropColumn(['avatar_id', 'photo_id']);
        });
    }
}
