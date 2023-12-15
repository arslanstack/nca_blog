<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Blog;
use App\Models\Category;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index()
    {
        // count blogs and categories
        $blogs = Blog::all()->count();
        $categories = Category::all()->count();
        $published = Blog::where('status', 1)->count();
        $associated = Category::whereHas('blogs')->count();
        return view('admin.home' , compact('blogs', 'categories', 'published', 'associated'));
    }

    public function profile(){
        return view('admin.profile');
    }
    public function editProfile(Request $request){
        $user = User::find(Auth::id());
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        if($request->hasFile('profile_img')){
            $file = $request->file('profile_img');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('uploads/profile/', $filename);
            $user->profile_img = $filename;
            $user->save();
        }
        return redirect()->back()->with('success', 'Your profile is updated successfully');
    }

    public function editPassword(Request $request){
        $user = User::find(Auth::id());
        $user->password = bcrypt($request->password);
        $user->save();
        return redirect()->back()->with('success', 'Your password is updated successfully');
    }
}


