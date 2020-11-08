<?php

namespace App\Policies;

use App\Models\School;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SchoolPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param School $school
     * @return mixed
     */
    public function view(User $user, School $school)
    {
        $schoolGrades = $school->grades()->pluck('id')->all();

        return $user->grades()->allRelatedIds()->intersect($schoolGrades)->all();
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param School $school
     * @return mixed
     */
    public function update(User $user, School $school)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param School $school
     * @return mixed
     */
    public function delete(User $user, School $school)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param School $school
     * @return mixed
     */
    public function restore(User $user, School $school)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param School $school
     * @return mixed
     */
    public function forceDelete(User $user, School $school)
    {
        return $user->isAdmin();
    }
}
