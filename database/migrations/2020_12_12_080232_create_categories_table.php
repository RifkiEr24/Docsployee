<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Category;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id('id_category');
            $table->string('category_name');
            $table->timestamps();
        });
        Category::create(
            [
                'category_name' => 'KTP',
            ]
        );
        Category::create(
            [
                'category_name' => 'KK',
            ],
        );
        Category::create(
            [
                'category_name' => 'Akte Kelahiran',
            ],
        );
        Category::create(
            [
                'category_name' => 'Pas Foto',
            ],
        );
        Category::create(
            [
                'category_name' => 'Kartu Pegawai',
            ],
        );
      
       
      
       
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
