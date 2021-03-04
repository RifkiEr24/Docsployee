<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\User;
use App\UserDetail;
class AddAdminAccount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        User::create(
            [
                'name' => 'admin',
                'npwp' => '289173678167284',
                'role' => 'admin',
                'email' => 'admin123@gmail.com',
                'password' =>Hash::make('admin123'),
            ]
        );
        UserDetail::create(
            [
                'tgl_lahir' => '2002-04-24',
                'jen_kel' => 'Laki - laki',
                'alamat' => 'Jl Leuwigajah',
                'no_telp' => '085872146070',
            ]
        );
        User::create(
            [
                'name' => 'user',
                'npwp' => '289173678167891',
                'role' => 'user',
                'email' => 'user123@gmail.com',
                'password' =>Hash::make('user123'),
            ]
        );
        UserDetail::create(
            [
                'tgl_lahir' => '2002-04-24',
                'jen_kel' => 'Perempuan',
                'alamat' => 'Jl Leuwigajah',
                'no_telp' => '08587214623',
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
        //
    }
}
