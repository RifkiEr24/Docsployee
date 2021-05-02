<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Matpel;
class CreateMatpelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matpel', function (Blueprint $table) {
            $table->id('id_matpel');
            $table->bigInteger('id_jurusan')->unsigned()->nullable();
            $table->foreign('id_jurusan')->references('id_jurusan')->on('jurusan')->onDelete(DB::raw('set null'));
            $table->boolean('is_jurusan');
            $table->string('nama_matpel');
            $table->timestamps();
        });

        Matpel::create(
            [
                'nama_matpel' => 'Komjardas',
                'is_jurusan' => 1,
                'id_jurusan'=>1
            ]
        );
        Matpel::create(
            [
                'nama_matpel' => 'PWPB',
                'is_jurusan' => 1,
                'id_jurusan'=>1
            ]
        );
        Matpel::create(
            [
                'nama_matpel' => 'Listrik Dasar',
                'is_jurusan' => 1,
                'id_jurusan'=>2
            ]
        );
        Matpel::create(
            [
                'nama_matpel' => 'Bahasa Indonesia',
                'is_jurusan' => 0
            ]
        );
        Matpel::create(
            [
                'nama_matpel' => 'Matematika',
                'is_jurusan' => 0
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
        Schema::dropIfExists('matpels');
    }
}
