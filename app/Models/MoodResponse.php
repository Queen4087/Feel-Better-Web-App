<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MoodResponse extends Model
{
    protected $fillable = ['mood_type', 'message'];
}
