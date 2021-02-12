<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Event;
use Carbon\Carbon;
use App\User;
use App\Mail\VerificationMail;
use Illuminate\Support\Facades\Mail;
class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
      
          $event =Event::wheredate('start' , Carbon::now()->addDays(1))->get();
            $user = User::all();

            if(count($event) > 0) {
                foreach ($event as $eventdetail) {
                        foreach ($user as $useritem) {
                            $nama = $useritem->name;
                            $email = $useritem->email;
                            $kirim = Mail::to($email)->send(new VerificationMail($nama,$eventdetail->title,$eventdetail->deskripsi,$eventdetail->start,$useritem->role));
                        }
                }
            }
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
