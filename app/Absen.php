<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Absen extends Model
{
    public function user() 
    { 
        return $this->belongsTo('App\User','id_akun'); 
    }   
    protected $fillable = [
        'id_absen', 'id_akun', 'keterangan','tanggal','is_lembur','jumlah_lembur'
    ];
}
