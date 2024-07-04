<?php

use Illuminate\Http\Request;
use App\Http\Controllers\EnquiryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DataController;



Route::post('/enquiry', [App\Http\Controllers\EnquiryController::class, 'store'])->name('enquiry');
