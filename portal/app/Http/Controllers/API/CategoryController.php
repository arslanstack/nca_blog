<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Blog;

class CategoryController extends Controller
{
    public function index()
    {
        try {
            // $categories = Category::latest()->get(); where status = 1
            $categories = Category::where('status', 1)->latest()->get();
            foreach ($categories as $category) {
                $category->blog_count = $category->blogs()->where('status', 1)->count();
            }
            return response()->json(['msg' => 'success', 'response' => 'successfully retrieved all categories', 'data' => $categories]);
        } catch (\Exception $e) {
            return response()->json(['msg' => 'error', 'response' => $e->getMessage()], 500);
        }
    }

    public function showBlogs($slug){
        try {
            $category = Category::where('slug', $slug)->first();
            if(!$category){
                return response()->json(['msg' => 'error', 'response' => 'category not found'], 404);
            }
            if($category->status == 0){
                return response()->json(['msg' => 'error', 'response' => 'Inactive category!'], 404);
            }
            $blogs = $category->blogs()->where('status', 1)->latest()->get();
            foreach ($blogs as $blog) {
                $blog->categories = $blog->categories()->pluck('name');
            }
            return response()->json(['msg' => 'success', 'response' => 'successfully retrieved all published blogs of this category', 'data' => $blogs]);
        } catch (\Exception $e) {
            return response()->json(['msg' => 'error', 'response' => $e->getMessage()], 500);
        }
    } 
    public function catNames(){
        // return array of names of all categories
        try {
            $categories = Category::latest()->get();
            $catNames = [];
            foreach ($categories as $category) {
                $catNames[] = $category->name;
            }
            return response()->json(['msg' => 'success', 'response' => 'successfully retrieved all categories', 'data' => $catNames]);
        } catch (\Exception $e) {
            return response()->json(['msg' => 'error', 'response' => $e->getMessage()], 500);
        }
    }
}
