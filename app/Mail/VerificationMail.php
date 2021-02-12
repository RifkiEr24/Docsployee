<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerificationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($nama,$eventname,$deskripsi,$start,$role)
    {
        $this->nama = $nama;
        $this->title = $eventname;
        $this->deskripsi = $deskripsi;
        $this->waktu = $start;
        $this->role = $role;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('smkn1cmhapp@gmail.com')
            ->subject('Pemberitahuan Acara')
            ->view('email')
            ->with(
            [
                'nama' => $this->nama,
                'judul' => $this->title,
                'deskripsi' => $this->deskripsi,
                'waktu' => $this->waktu,
                'role' => $this->role
            ]);
    }
} 
