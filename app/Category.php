<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function document()
    {
    	return $this->hasOne('App\Document');
    }
}
