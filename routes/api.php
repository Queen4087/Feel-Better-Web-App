<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JournalEntryController;
use App\Http\Controllers\MotivationalContentController;
use App\Http\Controllers\MoodResponseController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('journal-entries', JournalEntryController::class);
Route::get('motivational-content/random', [MotivationalContentController::class, 'random']);
Route::get('mood-responses/{mood}', [MoodResponseController::class, 'showByMood']);
