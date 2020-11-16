<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Addition;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use App\Http\Resources\Addition as AdditionResource;

class AdditionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection
     * @throws AuthorizationException
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Addition::class);

        $additions = $this->getModelCollectionWithRequestParams($request, Addition::class);

        return AdditionResource::collection($additions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function store(Request $request)
    {
        $this->authorize('create', Addition::class);

        $data = $this->validate($request, Addition::createRules());

        $addition = Addition::create($data);

        return response()->json($addition, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @param Addition $addition
     * @return AdditionResource
     * @throws AuthorizationException
     */
    public function show(Request $request, Addition $addition)
    {
        $this->authorize('view', $addition);

        $with = $this->getWithRelationsParameterInModel(Addition::class, $request->get('with'));
        if ($with) {
            return new AdditionResource(Addition::with($with)->find($addition->id));
        }

        return new AdditionResource($addition);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Addition $addition
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function update(Request $request, Addition $addition)
    {
        $this->authorize('update', $addition);

        $data = $this->validate($request, Addition::updateRules());

        $addition->update($data);

        return response()->json($addition, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Addition $addition
     * @return JsonResponse
     * @throws Exception
     * @throws AuthorizationException
     */
    public function destroy(Addition $addition)
    {
        $this->authorize('delete', $addition);

        $tasks = $addition->tasks();
        $tasks_ids = $tasks->allRelatedIds()->all();
        $tasks->detach($tasks_ids);

        $addition->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
