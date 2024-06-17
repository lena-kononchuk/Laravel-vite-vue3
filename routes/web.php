<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

Route::get('/api/google-maps-api-key', function () {
    return response()->json([
        'apiKey' => config('googlemaps.api_key'),
    ]);
});
