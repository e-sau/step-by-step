<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Resources\Review as ReviewResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function index(Request $request)
    {
//        $this->authorize('viewAny', Review::class);

        $reviews = $this->getModelCollectionWithRequestParams($request, Review::class);

        return ReviewResource::collection($reviews);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws AuthorizationException
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $this->authorize('create', Review::class);

        $data = $this->validate($request, Review::createRules());

        $review = Review::create($data);

        return response()->json($review, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Review $review
     * @return ReviewResource
     */
    public function show(Request $request, Review $review)
    {
//        $this->authorize('view', $review);

        $with = $this->getWithRelationsParameterInModel(Review::class, $request->get('with'));

        return $with ? new ReviewResource($review->load($with)) : new ReviewResource($review);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Review $review
     * @return JsonResponse
     * @throws AuthorizationException
     * @throws ValidationException
     */
    public function update(Request $request, Review $review)
    {
        $this->authorize('update', $review);

        $data = $this->validate($request, Review::updateRules());

        $review->update($data);

        return response()->json($review, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Review $review
     * @return JsonResponse
     * @throws AuthorizationException|Exception
     */
    public function destroy(Review $review)
    {
        $this->authorize('delete', $review);

        $review->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
