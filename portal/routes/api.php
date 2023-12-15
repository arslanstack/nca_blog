<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/blogs', [App\Http\Controllers\API\BlogController::class, 'index']);
Route::get('/featured-blogs', [App\Http\Controllers\API\BlogController::class, 'featuredBlogs']);
Route::get('/blog/{id}', [App\Http\Controllers\API\BlogController::class, 'show']);
Route::get('/blogwithSlug/{slug}', [App\Http\Controllers\API\BlogController::class, 'showWithSlug']);



Route::get('/categories', [App\Http\Controllers\API\CategoryController::class, 'index']);
Route::get('/catNames', [App\Http\Controllers\API\CategoryController::class, 'catNames']);
Route::get('/blogs-category/{slug}', [App\Http\Controllers\API\CategoryController::class, 'showBlogs']);