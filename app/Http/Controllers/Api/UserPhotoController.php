<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserPhoto;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class UserPhotoController extends Controller
{
    /**
     *  @OA\Post(
     *      path="/user/{type}",
     *      summary="Save avatar|photo",
     *      description="Store new user avatar|photo",
     *      operationId="storePhoto",
     *      tags={"users"},
     *      @OA\Parameter(
     *          name="type",
     *          in="path",
     *          required=true,
     *          description="Type must be an 'avatar' or 'photo'",
     *          @OA\Schema(
     *              type="string",
     *          ),
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"photo"},
     *              @OA\Property(property="photo", type="file"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=201,
     *          description="Created",
     *      ),
     *  )
     */
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException|Exception
     */
    public function store(Request $request)
    {
        $this->validate($request, UserPhoto::createRules());

        $key = $request->route()->getName();
        $path = $request->file('photo')->store("public/users/$key");

        if (!$path) return response()->json(null, Response::HTTP_INTERNAL_SERVER_ERROR);

        $user = $request->user();
        $userPhoto = $user->$key;

        if ($userPhoto) {
            $this->delete($user, $userPhoto, $key);
        }

        $filePath = str_replace("public", "storage", $path );
        $photo = UserPhoto::create(['photo' => $filePath ]);

        $property = "{$key}_id";
        $user->$property = $photo->id;
        $user->save();

        return response()->json($photo, Response::HTTP_CREATED);
    }

    /**
     *  @OA\Delete(
     *      path="/user/{type}",
     *      summary="Delete avatar|photo",
     *      description="Delete user avatar|photo",
     *      operationId="deletePhoto",
     *      tags={"users"},
     *      @OA\Parameter(
     *          name="type",
     *          in="path",
     *          required=true,
     *          description="Type must be an 'avatar' or 'photo'",
     *          @OA\Schema(
     *              type="string",
     *          ),
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=204,
     *          description="Success",
     *      ),
     *  )
     */
    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Request $request)
    {
        $key = $request->route()->getName();

        $user = $request->user();
        $photo = $user->$key;

        if ($photo) {
            $this->delete($user, $photo, $key);
        }

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }

    /**
     * Delete resource from storage with relations.
     *
     * @param User $user
     * @param UserPhoto $photo
     * @param string $key
     * @throws Exception
     */
    protected function delete(User $user, UserPhoto $photo, string $key)
    {
        $property = "{$key}_id";
        $user->$property = null;
        $user->save();

        $path = $photo->photo;
        $photo->delete();
        Storage::delete($path);
    }
}
