<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class TestController extends Controller
{

    public function get(Request $request)
    {
        return response('123', 200);
    }
}