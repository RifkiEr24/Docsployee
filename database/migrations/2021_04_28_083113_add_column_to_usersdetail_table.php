<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToUsersdetailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_details', function (Blueprint $table) {
            $table->bigInteger('id_matpel')->unsigned()->nullable();
            $table->foreign('id_matpel')->references('id_matpel')->on('matpel')->onDelete(DB::raw('set null'));
            $table->bigInteger('id_jabatan')->unsigned()->nullable();
            $table->foreign('id_jabatan')->references('id_jabatan')->on('jabatan')->onDelete(DB::raw('set null'));
            $table->bigInteger('id_jurusan')->unsigned()->nullable();
            $table->foreign('id_jurusan')->references('id_jurusan')->on('jurusan')->onDelete(DB::raw('set null'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_detail', function (Blueprint $table) {
            //
        });
    }
}
