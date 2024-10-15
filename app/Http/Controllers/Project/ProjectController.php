<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectUpdateRequest;
use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{

    public function index()
    {
        $projects = Project::all();
        return Inertia::render('Project/Index', ['projects' => $projects]);
    }

    public function create()
    {
        return Inertia::render('Project/Create');
    }

    public function store(ProjectUpdateRequest $request)
    {
        $project = Project::create($request->validated());
        $project->save();
        return redirect()->route('project.index')->with('success', 'Project created successfully.');
    }

    public function edit($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('Project/Edit', ['project' => $project]);
    }

    public function update(ProjectUpdateRequest $request, $id)
    {
        $project = Project::findOrFail($id);
        $project->update($request->validated());
        return redirect()->route('project.index')->with('success', 'Project updated successfully.');
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        return redirect()->route('project.index')->with('success', 'Project deleted successfully.');
    }
}
