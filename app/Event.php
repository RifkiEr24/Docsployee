<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = "events";
    public function user()
    {
        return $this->belongsTo('App\User','id_akun');
    }
    protected $fillable = ['title', 'start', 'end','deskripsi','id_akun']; 
    public $timestamps = false;

}
