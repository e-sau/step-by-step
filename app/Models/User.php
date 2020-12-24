<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\HasApiTokens;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="User"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="login", type="string"),
 *      @OA\Property(property="name", type="string"),
 *      @OA\Property(property="surname", type="string"),
 *      @OA\Property(property="birthday", type="date"),
 *      @OA\Property(property="email", type="string"),
 *      @OA\Property(property="email_verified_at", type="string"),
 *      @OA\Property(property="password", type="string"),
 *      @OA\Property(property="remember_token", type="string"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="grade", type="array",
 *          @OA\Items(ref="#/components/schemas/Grade"),
 *      ),
 *      @OA\Property(
 *          property="achievements", type="array",
 *          @OA\Items(ref="#/components/schemas/Achievement"),
 *      ),
 *      @OA\Property(
 *          property="tasks", type="array",
 *          @OA\Items(ref="#/components/schemas/Task"),
 *      ),
 *      @OA\Property(
 *          property="roles", type="array",
 *          @OA\Items(ref="#/components/schemas/Role"),
 *      ),
 *  )
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'login',
        'name',
        'surname',
        'birthday',
        'email',
        'password',
        'remember_token'
    ];

    public static $registerRules = [
        'name' => 'required|string|max:255',
        'surname' => 'required|string|max:255',
        'birthday' => 'date',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6|max:50|confirmed',
        'remember_token' => 'string|size:10|nullable'
    ];

    public static $loginRules = [
        'email' => 'required|string|email|max:255',
        'password' => 'required|string|min:6|max:50',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function grade()
    {
        return $this->belongsToMany(Grade::class, 'user_grades');
    }

    public function achievements()
    {
        return $this->belongsToMany(Achievement::class, 'user_achievements');
    }

    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'user_tasks')->withTimestamps();
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_roles');
    }

    public function isAdmin()
    {
        return $this->roles()->where('name', 'admin')->first();
    }

    public function avatar()
    {
        return $this->hasOne(UserPhoto::class, 'id', 'avatar_id');
    }

    public function photo()
    {
        return $this->hasOne(UserPhoto::class, 'id', 'photo_id');
    }
}
