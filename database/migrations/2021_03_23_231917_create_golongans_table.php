<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Golongan;
class CreateGolongansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('golongan', function (Blueprint $table) {
            $table->id('id_golongan');
            $table->string('no_golongan');
            $table->string('nama_golongan');
            $table->timestamps();
        });

        Golongan::create(
            [
                'no_golongan' => 'I',
                'nama_golongan'=>'Juru'
            ]
        );
        Golongan::create(
            [
                'no_golongan' => 'II',
                'nama_golongan'=>'Pengatur'
            ]
        );
        Golongan::create(
            [
                'no_golongan' => 'III',
                'nama_golongan'=>'Penata'
            ]
        );
        Golongan::create(
            [
                'no_golongan' => 'IV',
                'nama_golongan'=>'Pembina'
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('golongans');
    }
}
