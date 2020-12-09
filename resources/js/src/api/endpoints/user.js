import { User } from "../../models/User";

/**
 * Авторизация по токену и получение данных о пользователе
 * @throws Error
 **/
export function get() {
  return { uri: "user" };
}

/**
 * Обновление данных о пользователе
 * @throws TypeError
 * @todo добавить тесты
 **/
export function update( user ) {
  if ( !(user instanceof User) ) {
    throw new TypeError();
  }

  return {
    uri: `users/${ user.id }`,
    method: "PUT",
    body: user.getData()
  };
}
/**

 * @throws TypeError
 * @todo добавить тесты
 **/
export function savePhoto( file ) {
  if ( !(file instanceof File ) ) {
    throw new TypeError();
  }
  const formData = new FormData();
  formData.append( "photo", file);

  return {
    uri: "user/avatar",
    method: "POST",
    body: formData
  };
}
