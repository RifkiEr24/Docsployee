<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    public function user() 
    { 
        return $this->belongsTo('App\User'); 
    }   
    public function document()
    {
        return $this->hasMany('App\Document');
    }
    protected $fillable = [
        'id_akun','tgl_lahir', 'jen_kel', 'alamat','no_telp'
    ];

}
