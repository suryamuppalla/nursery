<?php

namespace App\Http\Controllers;

use App\Plant;
use Illuminate\Http\Request;

class PlantsController extends Controller
{
    //
    public function getAllPlants(Request $request)
    {
        $searchTerm = $request->input("searchText");
        // logic to get all Plants goes here
        $plants = Plant::query()
            ->where('title', 'LIKE', "%{$searchTerm}%")
            ->get()->toJson(JSON_PRETTY_PRINT);
        return response($plants, 200);
    }

    public function createPlant(Request $request)
    {
        // logic to create a Plant record goes here
        $plant = new Plant();
        $plant->title = $request->title;
        $plant->price = $request->price;
        $plant->about = $request->about;
        $plant->description = $request->description;
        $plant->special_feature = $request->special_feature;
        $plant->rating = $request->rating;
        $plant->img = $request->img;
        $plant->save();

        return response()->json([
            "message" => "Plant created"
        ], 201);
    }

    public function getPlant($id)
    {
        // logic to get a Book record goes here
        if (Plant::where('id', $id)->exists()) {
            $plant = Plant::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($plant, 200);
        } else {
            return response()->json([
                "message" => "Plant not found"
            ], 404);
        }
    }

    public function updatePlant(Request $request, $id)
    {
        // logic to update a Plant record goes here
        // logic to get a Plant record goes here
        if (Plant::where('id', $id)->exists()) {
            Plant::where('id', $id)->first()->update($request->all());
            return response()->json([
                "message" => "Plant Details Updated Successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "Plant not found"
            ], 404);
        }
    }

    public function deletePlant($id)
    {
        // logic to delete a Plant record goes here
        if (Plant::where('id', $id)->exists()) {
            Plant::where('id', $id)->first()->delete();
            return response()->json([
                "message" => "Plant Details Deleted Successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "Plant not found"
            ], 404);
        }

    }

    public function uploadPlantImage(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');

            $file_name = time() . '.' . $file->getClientOriginalExtension();
            $destinationPath = public_path('/images');

            $file->move($destinationPath, $file_name);

            return response()->json([
                'data' => 'images/' . $file_name
            ]);
        }
    }
}
