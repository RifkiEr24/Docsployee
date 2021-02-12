<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\VerificationMail;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function index()
    {
        $nama = "Rifki Erlangga";
        $email = "rifkierlangga17@gmail.com";
        $kirim = Mail::to($email)->send(new VerificationMail($nama));
    
        if($kirim){
            echo "Email telah dikirim";
        }else{
            echo "email gagal terkirim";
        }
}

public function sendemailtoall(Request $request)
{

    $validatedData = $request->validate([
        'title' => 'required',
        'deskripsi' => 'required',
        'start' => 'required',
      ]);
      $user= \App\User::all();
      foreach ($user as $useritem) {
        $nama = $useritem->name;
        $email = $useritem->email;
        $title= $validatedData['title'];
        $deskripsi =  $validatedData['deskripsi'];
        $start = $validatedData['start'];
        $role = $useritem->role;
        $kirim = Mail::to($email)->send(new VerificationMail($nama,$title,$deskripsi,$start,$role));
    }
}
}