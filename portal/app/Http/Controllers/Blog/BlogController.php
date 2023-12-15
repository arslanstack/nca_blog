<?php

namespace App\Http\Controllers\Blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    public function index()
    {
        $blogs = Blog::with('categories')->orderBy('id', 'desc')->get();
        return view('admin.blog.index', compact('blogs'));
    }
    public function add()
    {
        // $categories = Category::all(); where status 1
        $categories = Category::where('status', 1)->get();
        return view('admin.blog.add', compact('categories'));
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'subtitle' => 'required',
            'image' => 'required',
            'categories' => 'required'
        ]);
        if ($validator->fails()) {
            return redirect()->back()->with('error', 'Please fill all the required fields');
        }

        $blog = new Blog();
        $blog->title = $request->title;
        $blog->subtitle = $request->subtitle;
        // create bog slug from title with hyphens
        $blog->slug = str_replace(' ', '-', strtolower($request->title));
        $blog->slug = preg_replace('/[^A-Za-z0-9\-]/', '', $blog->slug);
        // dd($blog->slug);
        if (Blog::where('slug', $blog->slug)->exists()) {
            return redirect()->back()->with('error', 'A blog with this title/slug already exists!');
        }
        $blog->description = $request->description;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/uploads/blog');
            $image->move($destinationPath, $name);
            $blog->image = $name;
        }
        $blog->save();
        $blog->categories()->attach($request->categories);
        return redirect()->route('blogs')->with('success', 'Blog added successfully');
    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'subtitle' => 'required',
            'categories' => 'required'
        ]);
        if ($validator->fails()) {
            return redirect()->back()->with('error', 'Please fill all the required fields');
        }
        $slug = str_replace(' ', '-', strtolower($request->title));
        $slug = preg_replace('/[^A-Za-z0-9\-]/', '', $slug);
        $blog = Blog::find($request->id);
        if ($blog->slug != $slug) {
            if (Blog::where('slug', $slug)->exists()) {
                return redirect()->back()->with('error', 'A blog with this title/slug already exists!');
            }
        }
        $blog->title = $request->title;
        $blog->subtitle = $request->subtitle;
        $blog->slug = $slug;
        $blog->description = $request->description;
        if ($request->hasFile('image')) {
            $destinationPath = public_path('/uploads/blog');
            $old_image = $destinationPath . '/' . $blog->image;
            if (file_exists($old_image)) {
                @unlink($old_image);
            }
            $image = $request->file('image');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/uploads/blog');
            $image->move($destinationPath, $name);
            $blog->image = $name;
        }
        $blog->save();
        $blog->categories()->sync($request->categories);
        return redirect()->route('blogs')->with('success', 'Blog updated successfully');
    }
    public function edit($id)
    {
        $blog = Blog::find($id);
        $categories = Category::all();
        $blogCategories = $blog->categories->pluck('id')->toArray();
        return view('admin.blog.edit', compact(['blog', 'categories', 'blogCategories']));
    }
    public function destroy(Request $request)
    {
        // dd($request->all());
        $blog = Blog::find($request->id);
        if (delete_blog_category_records($blog->id)) {
            $destinationPath = public_path('/uploads/blog');
            $old_image = $destinationPath . '/' . $blog->image;
            if (file_exists($old_image)) {
                @unlink($old_image);
            }
            Blog::find($request->id)->delete();
            return redirect()->route('blogs')->with('success', 'Blog deleted successfully');
        } else {
            return redirect()->route('blogs')->with('error', 'Something went wrong');
        }
    }
    public function deactivate(Request $request)
    {
        $blog = Blog::find($request->id);
        $blog->status = 0;
        $blog->save();
        return redirect()->back()->with('success', 'Blog unpublished successfully');
    }
    public function activate(Request $request)
    {
        $blog = Blog::find($request->id);
        $blog->status = 1;
        $blog->save();
        return redirect()->back()->with('success', 'Blog published successfully');
    }
    public function unfeature(Request $request)
    {
        $blog = Blog::find($request->id);
        $blog->featured = 0;
        $blog->save();
        return redirect()->back()->with('success', 'Blog Unfeatured successfully');
    }
    public function feature(Request $request)
    {
        $blog = Blog::find($request->id);
        $blog->featured = 1;
        $blog->save();
        return redirect()->back()->with('success', 'Blog Featured successfully');
    }

    public function ckeditor_upload(Request $request)
    {
        // dd($request->all());
        if ($request->hasFile('upload')) {
            $originName = $request->file('upload')->getClientOriginalName();
            $originName = $request->file('upload')->getClientOriginalName();
            $fileName = pathinfo($originName, PATHINFO_FILENAME);
            $extension = $request->file('upload')->getClientOriginalExtension();
            $fileName = $fileName . '_' . time() . '.' . $extension;

            $request->file('upload')->move(public_path('media'), $fileName);
            $url = asset('media/' . $fileName);
            return response()->json(['fileName' => $fileName, 'uploaded' => 1, 'url' => $url]);
        }
    }
}
