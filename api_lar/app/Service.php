<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Articulo;

class Service extends Model
{
   
    protected $guarded = [];
   
    public function articulos()
    {
        return $this->hasMany(Articulo::class, 'service_id', 'id');
    }
}
