<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGajisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gaji', function (Blueprint $table) {
            $table->id('id_akun');
            $table->foreign('id_akun')->references('id_akun')->on('users');
            $table->bigInteger('tunjangan_jabatan')->nullable();
            $table->bigInteger('tunjangan_anak')->nullable();
            $table->bigInteger('tunjangan_kenaikan')->nullable();
            $table->bigInteger('uang_makan');
            $table->bigInteger('jumlah_lembur');
            $table->bigInteger('uang_lembur');
            $table->date('tanggal');
            $table->bigInteger('total_gaji');
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
        Schema::dropIfExists('gajis');
    }
}
