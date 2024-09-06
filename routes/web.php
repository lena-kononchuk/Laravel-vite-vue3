<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

// routes/web.php
Route::get('/health', function () {
    return response()->json(['status' => 'healthy']);
});
