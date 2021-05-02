<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Golongan extends Model
{
    public function jabatan() 
    { 
        return $this->belongsTo('App\Jabatan','id_golongan'); 
    }   
    protected $fillable = [
        'id_golongan', 'no_golongan', 'nama_golongan'
    ];
    protected $table = 'golongan';
    protected $primaryKey = 'id_golongan';

}
