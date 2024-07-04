<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquiry; // Replace YourModel with your actual model

class EnquiryController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Validate incoming data if necessary
        $request->validate([
            'name' => 'required|string|max:191',
            'email' => 'required|string|max:191|email',
            'message' => 'required|string|max:191',
            'phone' => 'required|string|max:191',
            'subject' => 'required|string|max:191',
        ]);

        // Create a new instance of the Enquiry model and save data
        $enquiry = new Enquiry();
        $enquiry->name = $request->input('name');
        $enquiry->email = $request->input('email');
        $enquiry->message = $request->input('message');
        $enquiry->phone = $request->input('phone');
        $enquiry->subject = $request->input('subject');

        $enquiry->save();

        // Respond with a JSON success message
        return response()->json(['status' => true]);
    }
}
