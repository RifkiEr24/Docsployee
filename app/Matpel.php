<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Matpel extends Model
{
    public function user() 
    { 
        return $this->belongsTo('App\User','id_matpel'); 
    }   
    public function jurusan() 
    { 
        return $this->belongsTo('App\Jurusan','id_jurusan'); 
    }  
    protected $fillable = [
        'id_matpel', 'id_jurusan', 'is_jurusan','nama_matpel'
    ];
    protected $table = 'matpel';
    protected $primaryKey = 'id_matpel';
}
