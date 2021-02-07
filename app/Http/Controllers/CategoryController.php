<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{

    public function index()
    {
        $category = \App\Category::all();
        return $category->toJson();
    }
    public function missingdata(Request $request){
        $iduser = $request->validate([
            'iduser' => ['required', 'integer'],
        ]);
        $categorycount= DB::table('categories')->count();
        $integers = range(1, $categorycount);

    $document= [];
    for($x= 1; $x <= $categorycount; $x++){
        $data= DB::table('documents')->where('id_akun', $iduser)->where('id_category', $x)->get()->toArray();  
        array_push($document, $data);
    }
     
    return  json_encode($document);
    }

    public function search(Request $request)
	{
    $idcategory = $request->validate([
        'idcategory' => ['required', 'integer'],
    ]);
    $posts = DB::table('categories')->where('id_category',$idcategory)-> get();

    return response()->json($posts);
    }
    
    public function detail(Request $request, $id)
	{
        $iduser = $request->validate([
            'iduser' => ['required', 'integer'],
        ]);
        $idcategory = $id;
    $data= DB::table('documents')->where('id_akun', $iduser)->where('id_category', $idcategory)->get();  

    return response()->json($data);
    }
    public function detailname( Request $request, $id)
	{
        $doc = DB::table('documents')
        ->join('users','documents.id_akun','=','users.id_akun')
        ->join('categories', 'documents.id_category', '=', 'categories.id_category')
        ->select('documents.*', 'categories.*','users.name')
        ->where('categories.category_name', $request->categoryname)
        ->where('documents.id_akun', $id)
        ->get();

    return response()->json($doc);
	}
}
