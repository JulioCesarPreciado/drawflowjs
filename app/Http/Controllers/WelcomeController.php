<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function update(Request $request){
        return Inertia::render('Welcome');
    }
}
