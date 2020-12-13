import * as TYPE from "./types";

/**
 * Сигнал запуска
 * @return { Object }
 **/
export function initialize() {
  return { type: TYPE.INITIALIZE };
}

/**
 * Запуск успешен
 * @return { Object }
 **/
export function initializeSuccess() {
  return { type: TYPE.INITIALIZE_SUCCESS };
}

/**
 * При запуске произошла ошибка
 * @return { Object }
 **/
export function initializeError() {
  return { type: TYPE.INITIALIZE_ERROR };
}
