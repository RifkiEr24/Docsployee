<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{

    public function index()
  {
      $accounts = \App\Event::all();
      return $accounts->toJson();
  }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'title' => 'required',
          'start' => 'required',
          'end' => 'required',
        ]);
 
        $project = \App\Event::create([
        'title' => $validatedData['title'],
          'start' => $validatedData['start'],
          'end' => ($validatedData['end']),
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Account created successfully!'
        ];
 
        return response()->json($msg);
    } 
}
