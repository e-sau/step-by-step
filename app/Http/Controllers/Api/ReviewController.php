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
     *  @OA\Get(
     *      path="/reviews",
     *      summary="Get reviews",
     *      description="Return list of reviews with relations",
     *      operationId="getReviews",
     *      tags={"reviews"},
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets review relations",
     *          @OA\Schema(
     *              type="array",
     *              minItems=1,
     *              @OA\Items(
     *                  type="string"
     *              ),
     *          ),
     *          style="form",
     *          explode=false,
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              @OA\Property(property="data", type="array",
     *                  @OA\Items(
     *                      type="object",
     *                      ref="#/components/schemas/Review",
     *                  ),
     *              ),
     *          )
     *      ),
     *  )
     */
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
     *  @OA\Post(
     *      path="/reviews",
     *      summary="Create review",
     *      description="Create a new review",
     *      operationId="createReview",
     *      tags={"reviews"},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"message", "user_id"},
     *              @OA\Property(property="message", type="text"),
     *              @OA\Property(property="user_id", type="integer"),
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
     *  @OA\Get(
     *      path="/reviews/{id}",
     *      summary="Get review",
     *      description="Return review with relations",
     *      operationId="showReview",
     *      tags={"reviews"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Review ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\Parameter(
     *          name="with",
     *          in="query",
     *          required=false,
     *          description="Parameter allow gets review relations",
     *          @OA\Schema(
     *              type="array",
     *              minItems=1,
     *              @OA\Items(
     *                  type="string",
     *              ),
     *          ),
     *          style="form",
     *          explode=false,
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthorized",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *          @OA\JsonContent(
     *              @OA\Property(
     *                  property="data",
     *                  type="object",
     *                  ref="#/components/schemas/Review",
     *              ),
     *          )
     *      ),
     *  )
     */
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
     *  @OA\Put(
     *      path="/reviews/{id}",
     *      summary="Update review",
     *      description="Update review",
     *      operationId="updateReview",
     *      tags={"reviews"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Review ID",
     *          @OA\Schema(
     *              type="integer",
     *          ),
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="text"),
     *              @OA\Property(property="user_id", type="integer"),
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
     *          response=200,
     *          description="Success",
     *      ),
     *  )
     */
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
     *  @OA\Delete(
     *      path="/reviews/{id}",
     *      summary="Delete review",
     *      description="Delete review",
     *      operationId="deleteReview",
     *      tags={"reviews"},
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          description="Review ID",
     *          @OA\Schema(
     *              type="integer",
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
