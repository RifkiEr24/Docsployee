<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\VerificationMail;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use Illuminate\Support\Facades\Mail;
class EventController extends Controller
{

    public function index()
  {
      $accounts = \App\Event::all();
      return $accounts->toJson();
  }
  public function monthevent()
  {
      $event = DB::table('events')
                      ->whereYear('start', Carbon::now()->year)
                      ->whereMonth('start', Carbon::now()->month)
                      ->get();
  
     return $event->toJson();
  }
    public function addevent(Request $request)
    {
        $validatedData = $request->validate([
          'id_akun' => 'required',
          'title' => 'required',
          'deskripsi' => 'required',
          'start' => 'required',
          'end' => 'required',
        ]);
 
        $project = \App\Event::create([
          'id_akun' => $validatedData['id_akun'],
        'title' => $validatedData['title'],
        'deskripsi' => $validatedData['deskripsi'],
          'start' => $validatedData['start'],
          'end' => ($validatedData['end']),
        ]);


 
        return response()->json($validatedData);
    } 

   
  
    public function search(Request $request)
    {
       
 
        $event = \App\Event::with('user') -> find($request->iduser);
        return response()->json($event);

    } 
    public function update(Request $request)
    { 
      // $validatedData = $request->validate([
      //   'id' => 'required',
      //   'title' => 'required',
      //   'deskripsi' => 'required'
      // ]);
        $article = \App\Event::find($request->input('params.id'));
        $article->title = $request->input('params.title');
        $article->deskripsi = $request->input('params.deskripsi');
        $article->save();
       
        $msg = [
            'success' => true,
            'message' => 'Acara Berhasil di update!'
        ];
  
        return response()->json($msg);
    }

    public function delete($id)
    {
        $event = \App\Event::find($id);
   
        $event->delete();

    }
    

}
