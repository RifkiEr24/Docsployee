<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbsensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('absen', function (Blueprint $table) {
            $table->id('id_absen');
            $table->bigInteger('id_akun')->unsigned()->nullable();
            $table->foreign('id_akun')->references('id_akun')->on('users');
            $table->string('keterangan');
            $table->date('tanggal');
            $table->boolean('is_lembur');
            $table->smallInteger('jumlah_lembur');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('absens');
    }
}
