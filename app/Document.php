<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $primaryKey = 'id_document';

    public function user()
    {
        return $this->belongsTo('App\User','id_akun');
    }
    public function userdetail()
    {
        return $this->belongsTo('App\UserDetail');
    }
    public function category()
    {
        return $this->belongsTo('App\Category','id_category');
    }

    protected $fillable = [
        'id_akun', 'id_category', 'file_name','size'
    ];

}
