<?php

use Illuminate\Http\Request;

Route::get('/api/google-maps-api-key', function () {
    return response()->json([
        'apiKey' => config('googlemaps.api_key'),
    ]);
});
