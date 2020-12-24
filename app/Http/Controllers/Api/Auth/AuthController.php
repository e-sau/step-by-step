<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     *  @OA\Post(
     *      path="/register",
     *      summary="Register",
     *      description="Register User",
     *      operationId="authRegister",
     *      tags={"auth"},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"login", "name", "surname", "birthday", "email", "password", "password_confirmation"},
     *              @OA\Property(property="login", type="string", example="user"),
     *              @OA\Property(property="name", type="string", example="Alex"),
     *              @OA\Property(property="surname", type="string", example="Murphy"),
     *              @OA\Property(property="birthday", type="date", example="2014-01-01"),
     *              @OA\Property(property="email", type="string", example="api@step-by-step.ru"),
     *              @OA\Property(property="password", type="string", example="strongPass"),
     *              @OA\Property(property="password_confirmation", type="string", example="strongPass"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="The given data was invalid",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *              @OA\Property(property="errors", type="array",
     *                  @OA\Items(type="string")
     *              ),
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="User Register Success",
     *          @OA\JsonContent(
     *              @OA\Property(property="token", type="string"),
     *          ),
     *      ),
     * )
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), User::$registerRules);

        if ($validator->fails()) {
            return response([
                'message' => 'The given data was invalid.',
                'errors' => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $request['password'] = Hash::make($request['password']);
        $request['remember_token'] = Str::random(10);

        /** @todo когда решим как генерим логин - поправить, либо дадим его всеже вводить на форме */
        $request['login'] = Hash::make( "{$request['name']}-{$request['surname']}-{$request['birthday']}");
        $user = User::create($request->all());
        $token = $user->createToken(config('app.name'))->accessToken;

        $roleId = Role::where('name', 'student')->get(['id']);
        if ($roleId)
        {
            $user->roles()->attach($roleId);
        }

        return response(['token' => $token], Response::HTTP_OK);
    }

    /**
     * @OA\Post(
     *      path="/login",
     *      summary="Sign In",
     *      description="Login user by email and password",
     *      operationId="authLogin",
     *      tags={"auth"},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"email", "password"},
     *              @OA\Property(property="email", type="string", example="api@step-by-step.ru"),
     *              @OA\Property(property="password", type="string", example="strongPass"),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Wrong credentials",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *              @OA\Property(property="errors", type="array",
     *                  @OA\Items(type="string")
     *              ),
     *          )
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="User not found",
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Authentication Success",
     *          @OA\JsonContent(
     *              @OA\Property(property="token", type="string")
     *          ),
     *      ),
     * ),
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), User::$loginRules);

        if ($validator->fails()) {
            return response([
                'message' => 'The given data was invalid.',
                'errors' => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken(config('app.name'))->accessToken;
                return response(['token' => $token], Response::HTTP_OK);
            } else {
                return response([
                    'message' => 'The given data was invalid.',
                    'errors' => ['password' => ['Wrong password']]
                ], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        } else {
            return response(null, Response::HTTP_NOT_FOUND);
        }
    }

    /**
     *  @OA\Post(
     *      path="/logout",
     *      summary="Logout",
     *      description="Logout user",
     *      operationId="authLogout",
     *      tags={"auth"},
     *      @OA\Response(
     *          response=200,
     *          description="Success",
     *      ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *          @OA\JsonContent(
     *              @OA\Property(property="message", type="string"),
     *          ),
     *      ),
     * )
     */
    public function logout(Request $request)
    {
        $token = $request->user()->token();
        $token->revoke();

        return response(null, Response::HTTP_OK);
    }
}
