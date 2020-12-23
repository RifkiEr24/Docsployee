<?php

namespace App\Http\Controllers;

use App\UserDetail;
use Illuminate\Http\Request;

class UserDetailController extends Controller
{
    public function store(Request $request)
    {
        $category = new UserDetail();
        $category->title = $request->get('name');
        $category->user()->associate($request->user());

        $category->save();

        return 'Success';
    }
}
