<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id('id_akun');
            $table->foreign('id_akun')->references('id_akun')->on('users');
            $table->string('status')->default('Aktif');
            $table->enum('is_mengajar',[0, 1])->default(0);  
            $table->enum('bidang_guru',['Normatif & Adaptif', 'Produktif'])->nullable();  
            $table->date('tgl_lahir');
            $table->enum('jen_kel',['Laki - laki', 'Perempuan']);
            $table->string('alamat');
            $table->string('no_telp');
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
        Schema::dropIfExists('user_details');
    }
}
