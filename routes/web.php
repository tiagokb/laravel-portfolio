<?php

use App\Http\Controllers\Portfolio\PortfolioController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Theme\ThemeController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');

Route::post('change-theme', [WelcomeController::class, 'changeTheme'])->name('change-theme');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::get('/portifolio', [PortfolioController::class, 'edit'])->name('portfolio.edit');
    Route::patch('/portifolio', [PortfolioController::class, 'update'])->name('portfolio.update');


    Route::get('/project/list', [ProjectController::class, 'index'])->name('project.index');
    Route::get('/project', [ProjectController::class, 'create'])->name('project.create');
    Route::post('/project', [ProjectController::class, 'store'])->name('project.store');
    Route::get('/project/{id}', [ProjectController::class, 'edit'])->name('project.edit');
    Route::patch('/project/{id}', [ProjectController::class, 'update'])->name('project.update');

    Route::delete('/project/{id}', [ProjectController::class, 'destroy'])->name('project.destroy');

    Route::get('/theme', [ThemeController::class, 'edit'])->name('theme.edit');
    Route::patch('/theme', [ThemeController::class, 'update'])->name('theme.update');
});

require __DIR__ . '/auth.php';
