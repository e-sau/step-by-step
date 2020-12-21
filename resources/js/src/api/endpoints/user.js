import { User } from "../../models/User";

/**
 * Авторизация по токену и получение данных о пользователе
 * @return { Object }
 * @throws Error
 **/
export function get() {
  return { uri: "user" };
}

/**
 * Обновление данных о пользователе
 * @param { User } user
 * @return { Object }
 *
 * @throws TypeError
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
 * Тела запроса на сохранение фотографии
 * @return { File } file
 * @return { Object }
 *
 * @throws TypeError
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

/**
 * Получить список доступных задач
 * @return { Object }
 **/
export function getAvailableTasks() {
  return { uri: "user/tasks/available" };
}

/**
 * Авторизация по токену и получение данных о пользователе
 * @return { Object }
 **/
export function getCompletedTasks() {
  return { uri: "user/tasks/completed" };
}

/**
 * Авторизация по токену и получение данных о пользователе
 * @return { Object }
 **/
export function getAvailableSubjects() {
  return { uri: "user/subjects/available" };
}

/**
 * Авторизация по токену и получение данных о пользователе
 * @return { Object }
 **/
export function getCompletedSubjects() {
  return { uri: "user/subjects/completed" };
}
