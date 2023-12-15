<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }
    public function index()
    {
        $categories = Category::all();
        return view('admin.category.index', compact('categories'));
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:categories,name'
        ]);

        if ($validator->fails()) {
            if ($validator->errors()->has('name')) {
                return redirect()->back()->with('error', 'A category with this name/slug already exists!');
            }
        }
        $category = new Category();
        $category->slug = str_replace(' ', '-', strtolower($request->name));
        $category->slug = preg_replace('/[^A-Za-z0-9\-]/', '', $category->slug);
        if (Category::where('slug', $category->slug)->exists()) {
            return redirect()->back()->with('error', 'A category with this slug already exists!');
        }
        $category->name = $request->name;
        $category->save();
        return redirect()->back()->with('success', 'Category added successfully');
    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            if ($validator->errors()->has('name')) {
                return redirect()->back()->with('error', 'Category Name is required');
            }
        }
        $status = $request->status ? 1 : 0;


        $category = Category::find($request->id);
        $slug = str_replace(' ', '-', strtolower($request->name));
        $slug = preg_replace('/[^A-Za-z0-9\-]/', '', $slug);
        // dd($slug);
        if ($category->slug != $slug) {
            if (Category::where('slug', $slug)->exists()) {
                return redirect()->back()->with('error', 'A category with this slug already exists!');
            }
        }
        $category->name = $request->name;
        $category->slug = $slug;
        $category->status = $status;
        $category->save();
        return redirect()->back()->with('success', 'Category updated successfully');
    }
    public function destroy(Request $request)
    {
        // dd($request->all());
        if (blog_count($request->id) != 0) {
            return redirect()->back()->with('error', 'This category cannot be deleted as it is associated with some blogs');
        } else {
            Category::find($request->id)->delete();
            return redirect()->back()->with('success', 'Category deleted successfully');
        }
    }
    public function categoryAdd(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $input = $request->all();
        $input['slug'] = str_replace(' ', '-', strtolower($request->name));
        $input['slug'] = preg_replace('/[^A-Za-z0-9\-]/', '', $input['slug']);
        if (Category::where('slug', $input['slug'])->exists()) {
            return response()->json(['error' => 'A category with this name/slug already exists!']);
        }
        $newcategory = Category::create($input);
        // $categories = Category::all(); where status = 1  
        $categories = Category::where('status', 1)->get();
        $selectedCategories = explode(',', $request->input('selected_categories', []));
        $html = view('admin.blog.categoriesOptions', compact('categories', 'selectedCategories', 'newcategory'))->render();
        return response()->json(['success' => 'Category added successfully', 'html' => $html]);
    }
}
