/**
 * Получить DTO обьект, который используется на форме регистрации
 * @param { Object } state
 * @return { User }
 **/
export function getSignupFormData( state ) {
    const { auth: { signupFormData } } = state;
    return signupFormData;
}
