<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HomeController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Blog\BlogController;
use App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Auth\LoginController;


Route::get('/', [LoginController::class, 'showLoginForm']);

// Auth::routes();

Route::post('logout', [LoginController::class, 'logout'])->name('logout');
Route::get('admin', [LoginController::class, 'showLoginForm'])->name('admin');
Route::post('admin-login', [LoginController::class, 'login'])->name('admin-login');


Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function () {
    Route::get('/profile', [HomeController::class, 'profile'])->name('profile');
    Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
    Route::post('/editProfile', [HomeController::class, 'editProfile'])->name('editProfile');
    Route::post('/changePswd', [HomeController::class, 'editPassword'])->name('editPassword');

    Route::get('/blogs', [BlogController::class, 'index'])->name('blogs');
    Route::get('/blogs-add', [BlogController::class, 'add'])->name('blogs-add');
    Route::post('/blogs-store', [BlogController::class, 'store'])->name('blogs-store');
    Route::get('/blogs-edit/{id}', [BlogController::class, 'edit'])->name('blogs-edit');
    Route::post('/blogs-update', [BlogController::class, 'update'])->name('blogs-update');
    Route::post('/blogs-delete', [BlogController::class, 'destroy'])->name('blogs-delete');
    Route::post('/blogs-feature', [BlogController::class, 'feature'])->name('blogs-feature');
    Route::post('/blogs-activate', [BlogController::class, 'activate'])->name('blogs-activate');
    Route::post('/blogs-unfeature', [BlogController::class, 'unfeature'])->name('blogs-unfeature');
    Route::post('/blogs-deactivate', [BlogController::class, 'deactivate'])->name('blogs-deactivate');

    
    Route::get('/categories', [CategoryController::class, 'index'])->name('categories');
    Route::post('/categories-store', [CategoryController::class, 'store'])->name('categories-store');
    Route::post('/categories-add', [CategoryController::class, 'categoryAdd'])->name('categories-add');
    Route::post('/categories-update', [CategoryController::class, 'update'])->name('categories-update');
    Route::post('/categories-delete', [CategoryController::class, 'destroy'])->name('categories-delete');
});


Route::post('/ckeditor_upload', [BlogController::class, 'ckeditor_upload'])->name('ckeditor.upload');
