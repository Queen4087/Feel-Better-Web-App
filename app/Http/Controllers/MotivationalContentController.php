<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MotivationalContent;

class MotivationalContentController extends Controller
{
    public function index()
    {
        return MotivationalContent::all();
    }

    public function random()
    {
        return MotivationalContent::inRandomOrder()->first();
    }
}
