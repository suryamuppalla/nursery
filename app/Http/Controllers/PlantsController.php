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
    }

    public function deletePlant($id)
    {
        // logic to delete a Plant record goes here
    }
}
