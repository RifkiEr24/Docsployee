<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id('id_document');
            $table->bigInteger('id_akun')->unsigned()->nullable()->index();
            $table->foreign('id_akun')->references('id_akun')->on('user_details');
            $table->bigInteger('id_category')->unsigned()->nullable()->index();
            $table->foreign('id_category')->references('id_category')->on('categories');
            $table->string('file_name');
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
        Schema::dropIfExists('documents');
    }
}
