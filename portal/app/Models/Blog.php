<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $table = "blogs";
    protected $fillable = ['title', 'subtitle', 'slug', 'description', 'status', 'image'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
