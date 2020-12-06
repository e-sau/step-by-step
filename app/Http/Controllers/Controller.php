<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

/**
 * @OA\Info(
 *      title="Step-By-Step Application Api",
 *      version="1.0.0",
 * )
 *
 * @OA\Server(
 *      url="http://localhost/api",
 *      description="Step-By-Step Api Server"
 * )
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Check and return exists model relations
     *
     * @param mixed $model
     * @param string|null $with
     * @return array
     */
    protected function getWithRelationsParameterInModel($model, ?string $with): array
    {
        if (!$with) return [];

        $withParams = explode(',', $with);

        return array_filter($withParams, function ($method) use ($model) {
            return method_exists($model, $method);
        });
    }

    /**
     * Collect model items depending on request params
     *
     * @param Request $request
     * @param mixed $model
     * @return array|LengthAwarePaginator
     */
    protected function getModelCollectionWithRequestParams(Request $request, $model)
    {
        $perPage = $request->get('perPage');
        $with = $this->getWithRelationsParameterInModel($model, $request->get('with'));

        $modelCollection = [];

        if ($with) {
            $modelCollection = $model::with($with);
        }

        if ($perPage) {
            if ($modelCollection instanceof Builder) {
                $modelCollection = $modelCollection->paginate($perPage);
            } else {
                $modelCollection = $model::paginate($perPage);
            }
        } elseif ($modelCollection) {
            /** @var Builder $modelCollection */
            $modelCollection = $modelCollection->get();
        }

        return $modelCollection ?: $model::all();
    }
}
