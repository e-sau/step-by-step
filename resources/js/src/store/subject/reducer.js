import * as TYPE from "./types";
import { Subject } from "../../models/Subject";
import { snakeCaseKebabCase } from "../../common/helpers";

/**
 * Начальное состояние
 * @type { Object<{ isFetching: Boolean, selectedId: Number, list: Array, error: any }>}
 **/
const subjectInitialState = {
  isFetching: false,
  /** @todo получать это с бека, с переводом, написать задачу на бек( чтоб позволили получать список предметом без авторизации ) */
  previewList: [
    new Subject( snakeCaseKebabCase("russian_language") ,"Русский язык"),
    new Subject("maths","Математика", ),
    new Subject( snakeCaseKebabCase("world_around"),"Окружающий мир" ),
  ],
  available: [], /** доступные предметы */
  completed: [], /** пройденные предметы */
  list: [], /** все предметы */
  selected: null,
  completedIsFetching: false,
  availableIsFetching: false,
  error: null,
};

/**
 * Редьюсер для работы с предметами
 * @param { Object } state
 * @param { Object } action
 *
 * @return { Object }
 **/
export default function subjectReducer( state = subjectInitialState, action ) {
  const { type, payload } = action;

  switch ( type ) {
    /** сигнал что послали запрос в апи, можно показывать индикатор загрузки */
    case TYPE.FETCH_COMPLETED: {
      return {
        ...state,
        completedIsFetching: true
      };
    }
    case TYPE.FETCH_AVAILABLE: {
      return {
        ...state,
        availableIsFetching: true
      };
    }
    /** обработка успешного запроса к апи */
    case TYPE.FETCH_COMPLETED_SUCCESS: {
      return {
        ...state,
        completedIsFetching: false,
        completed: payload
      };
    }
    /** обработка ошибки при запросе к апи */
    case TYPE.FETCH_COMPLETED_ERROR: {
      return {
        ...state,
        completedIsFetching: false,
        error: payload
      };
    }
    /** обработка успешного запроса к апи */
    case TYPE.FETCH_AVAILABLE_SUCCESS: {
      return {
        ...state,
        availableIsFetching: false,
        available: payload
      };
    }
    /** обработка ошибки при запросе к апи */
    case TYPE.FETCH_AVAILABLE_ERROR: {
      return {
        ...state,
        availableIsFetching: false,
        error: payload
      };
    }
    /** Успешно получен выбранный предмет с задачами */
    case TYPE.FETCH_SUBJECT_WITH_TASKS: {
      return {
        ...state,
        isFetching: true,
        selected: subjectInitialState.selected
      };
    }
    /** Успешно получен выбранный предмет с задачами */
    case TYPE.FETCH_SUBJECT_WITH_TASKS_SUCCESS: {
      return {
        ...state,
        selected: payload,
        isFetching: false,
      };
    }
    /** Ошибка при получении выбранного предмета с задачами */
    case TYPE.FETCH_SUBJECT_WITH_TASKS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    }
    /** такого действия нет, отдаем state без изменений */
    default: {
      return state;
    }
  }
}
