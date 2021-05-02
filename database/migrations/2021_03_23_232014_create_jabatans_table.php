<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Jabatan;
class CreateJabatansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jabatan', function (Blueprint $table) {
            $table->id('id_jabatan');
            $table->string('nama_jabatan');
            $table->string('ruang');
            $table->bigInteger('id_golongan')->unsigned()->nullable();
            $table->foreign('id_golongan')->references('id_golongan')->on('golongan')->onDelete(DB::raw('set null'));
            $table->bigInteger('gaji');
            $table->timestamps();
        });
        Jabatan::create(
            [
                'nama_jabatan' => 'Juru Muda',
                'ruang'=>'A',
                'id_golongan'=>'1',
                'gaji'=>1560000
            ]
        );
        Jabatan::create(
            [
                'nama_jabatan' => 'Pengatur Muda Tingkat 1',
                'ruang'=>'B',
                'id_golongan'=>'2',
                'gaji'=>2300000
            ]
        );
        Jabatan::create(
            [
                'nama_jabatan' => 'Penata',
                'ruang'=>'C',
                'id_golongan'=>'3',
                'gaji'=>2740000
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
        Schema::dropIfExists('jabatans');
    }
}
