<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Keluarga extends Model
{
    public function user() 
    { 
        return $this->belongsTo('App\User','id_akun'); 
    }   
    protected $fillable = [
        'id_akun', 'is_menikah', 'nama_pasangan','jumlah_anak'
    ];
    protected $table = 'keluarga';
    protected $primaryKey = 'id_akun';
}
