<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    
            factory(App\User::class, 10)->create()->each(function ($user) {
                factory(App\UserDetail::class)->create(['id' => $user->id]);
            });
        
    }
}
