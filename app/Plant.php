<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plant extends Model
{
    //

    protected $table = 'plants';

    protected $fillable = ['title', 'description', 'price', 'about', 'special_feature', 'rating', 'img'];
}
