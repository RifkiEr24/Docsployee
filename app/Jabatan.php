<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Jabatan extends Model
{
    public function user() 
    { 
        return $this->belongsTo('App\User','id_jabatan'); 
    }   
    public function golongan() 
    { 
        return $this->belongsTo('App\Golongan','id_golongan'); 
    }  
    protected $fillable = [
        'id_jabatan', 'id_golongan', 'nama_jabatan','ruang','gaji'
    ];

    protected $table = 'jabatan';
    protected $primaryKey = 'id_jabatan';
}
