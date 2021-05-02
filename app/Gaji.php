<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gaji extends Model
{
    public function user() 
    { 
        return $this->belongsTo('App\User','id_akun'); 
    }   
    protected $fillable = [
        'tunjangan_jabatan', 'tunjangan_anak', 'tunjakangan_kenaikan','uang_makan','uang_lembur','tanggal','total_gaji'
    ];
}
