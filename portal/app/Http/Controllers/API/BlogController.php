<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Pagination\Paginator;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request->input('per_page', 5);
            $blogs = Blog::where('status', 1)->latest()->paginate($perPage);
            $blogs->each(function ($blog) {
                $blog->categories = $blog->categories()->pluck('name');
            });
            return response()->json(['msg' => 'success', 'response' => 'successfully retrieved paginated blogs', 'data' => $blogs]);
        } catch (\Exception $e) {
            return response()->json(['msg' => 'error', 'response' => $e->getMessage()], 500);
        }
    }
    public function featuredBlogs()
    {
        try {
            $blogs = Blog::where('status', 1)->where('featured', 1)->latest()->get();
            foreach ($blogs as $blog) {
                $blog->categories = $blog->categories()->pluck('name');
            }
            return response()->json(['msg' => 'success', 'response' => 'successfully retrieved all published and featured blogs', 'data' => $blogs]);
        } catch (\Exception $e) {
            return response()->json(['msg' => 'error', 'response' => $e->getMessage()], 500);
        }
    }
    public function show($id)
    {
        try {
            $blog = Blog::where('status', 1)->where('id', $id)->first();
            if (!$blog) {
                return response()->json(['msg' => 'error', 'response' => 'blog not found'], 404);
            }
            $blog->categories = $blog->categories()->pluck('name');
            return response()->json(['msg' => 'success', 'response' => 'successfully retrieved blog', 'data' => $blog]);
        } catch (\Exception $e) {
            return response()->json(['msg' => 'error', 'response' => $e->getMessage()], 500);
        }
    }
    public function showWithSlug($slug)
    {
        try {
            $blog = Blog::where('status', 1)->where('slug', $slug)->first();
            if (!$blog) {
                return response()->json(['msg' => 'error', 'response' => 'blog not found'], 404);
            }
            $blog->categories = $blog->categories()->pluck('name');
            return response()->json(['msg' => 'success', 'response' => 'successfully retrieved blog', 'data' => $blog]);
        } catch (\Exception $e) {
            return response()->json(['msg' => 'error', 'response' => $e->getMessage()], 500);
        }
    }
}
