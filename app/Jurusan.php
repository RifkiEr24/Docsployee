<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Jurusan extends Model
{
    protected $fillable = [
        'id_jurusan', 'nama_jurusan'
    ];
    protected $table = 'jurusan';
    protected $primaryKey = 'id_jurusan';
}
