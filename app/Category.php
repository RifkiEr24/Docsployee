<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function document()
    {
    	return $this->hasMany('App\Document','id_category');
    }
    protected $fillable = [
        'category_name'
    ];
    protected $primaryKey = 'id_category';

}
