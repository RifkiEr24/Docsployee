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
}