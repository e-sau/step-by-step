<?php

namespace App\Policies;

use App\Models\Subject;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SubjectPolicy
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
        return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Subject $subject
     * @return mixed
     */
    public function view(User $user, Subject $subject)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return mixed
     */
    public function create(User $user)
    {
        $teacher = $user->roles()->where('name', 'teacher')->first();

        return $teacher ? true : false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Subject $subject
     * @return mixed
     */
    public function update(User $user, Subject $subject)
    {
        $teacher = $user->roles()->where('name', 'teacher')->first();

        return $teacher ? true : false;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Subject $subject
     * @return mixed
     */
    public function delete(User $user, Subject $subject)
    {
        $teacher = $user->roles()->where('name', 'teacher')->first();

        return $teacher ? true : false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Subject $subject
     * @return mixed
     */
    public function restore(User $user, Subject $subject)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Subject $subject
     * @return mixed
     */
    public function forceDelete(User $user, Subject $subject)
    {
        return $user->isAdmin();
    }
}
