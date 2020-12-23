<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    public function userdetail()
    {
        return $this->belongsTo('App\UserDetail');
    }
    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    protected $fillable = [
        'id_akun', 'id_category', 'file_name','size'
    ];
    public $timestamps = false;

}
