<?php

namespace App\Policies;

use App\Models\Achievement;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AchievementPolicy
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
     * @param Achievement $achievement
     * @return mixed
     */
    public function view(User $user, Achievement $achievement)
    {
        return $user->achievements()->allRelatedIds()->contains($achievement->id);
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
     * @param Achievement $achievement
     * @return mixed
     */
    public function update(User $user, Achievement $achievement)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Achievement $achievement
     * @return mixed
     */
    public function delete(User $user, Achievement $achievement)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Achievement $achievement
     * @return mixed
     */
    public function restore(User $user, Achievement $achievement)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Achievement $achievement
     * @return mixed
     */
    public function forceDelete(User $user, Achievement $achievement)
    {
        return $user->isAdmin();
    }
}
