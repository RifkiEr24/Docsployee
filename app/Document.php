<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $table = "document";
    protected $fillable = ['id', 'id_category', 'file_name', 'size'];
}
