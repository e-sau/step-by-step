import { Model } from "../../models/Model";

/**
 * Функция отдающая тело запроса для регистрации
 * @param { Model } user
 * @return { Object<{ uri: String }> }
 *
 * @throws TypeError
 **/
export function signup( user ) {
  if ( !( user instanceof Model ) ) {
    throw new TypeError("Invalid argument error");
  }
  return {
    uri: "register",
    method: "POST",
    body: user.getData()
  };
}

/**
 * Функция отдающая тело запроса для авторизации
 * @param { String } email
 * @param { String } password
 * @return { Object<{ uri: String }> }
 *
 *  @throws Error
 **/
export function login( email, password ) {
  if ( !email || !password ) {
    throw new Error("Missing argument error");
  }

  return {
    uri: "login",
    method: "POST",
    body: { email, password }
  };
}

/**
 * Функция отдающая тело запроса выхода из системы
 * @return { Object }
 **/
export function logout() {
  return {
    uri: "logout",
    method: "POST",
  };
}
