<?php 

use Illuminate\Support\Facades\Auth;
use App\Models\Blog;
use App\Models\Category;
use App\Models\User;
use Illuminate\Support\Facades\DB;

if (!function_exists('delete_blog_category_records')) {
    function delete_blog_category_records($blog_id)
    {
        try {
            DB::table('blog_category')->where('blog_id', $blog_id)->delete();
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
if (!function_exists('blog_count')) {
    function blog_count($category_id)
    {
        try {
            $count = DB::table('blog_category')->where('category_id', $category_id)->count();
            return $count;
        } catch (\Exception $e) {
            return 0;
        }
    }
}