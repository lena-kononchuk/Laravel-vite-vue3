<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Http\Resources\FaqResource;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    /**
     * Display a listing of the FAQs.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $faqs = Faq::all();
        return FaqResource::collection($faqs);
    }

    /**
     * Store a newly created FAQ in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'question' => 'required|string',
            'answer' => 'required|string',
            'button' => 'required|string',
        ]);

        $faq = Faq::create($validatedData);

        return new FaqResource($faq);
    }
}
