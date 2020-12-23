<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\UserDetail;
use Faker\Generator as Faker;

$factory->define(UserDetail::class, function (Faker $faker) {
    return [
        'id' => function(){
            return factory(App\User::class)->create()->id;
        },
        'tgl_lahir' => '2020-09-24',
        'jen_kel' => 'perempuan',
         'alamat' => $faker ->streetAddress,
         'no_telp' => $faker ->phoneNumber,
    ];
});
