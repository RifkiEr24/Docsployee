<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $table = "events";
    public function userdetail()
    {
        return $this->belongsTo('App\User');
    }
    protected $fillable = ['title', 'start', 'end']; 
}
