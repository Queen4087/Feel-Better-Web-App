<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MoodResponse;

class MoodResponseController extends Controller
{
    public function index()
    {
        return MoodResponse::all();
    }

    public function showByMood($mood)
    {
        return MoodResponse::where('mood_type', $mood)->first();
    }
}
