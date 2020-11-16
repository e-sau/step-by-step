import { TEST_TYPE } from "./types";
/**
 * Начальное состояние
 **/
const testInitialState = 0;

/**
 * Редьюсер
 **/
export default function testReducer( state = testInitialState, action) {
    const { type, payload } = action;

    switch ( type ) {
        case TEST_TYPE: {
            return state + payload;
        }
        /** такого действия нет, отдаем state без изменений */
        default: {
            return state;
        }
    }
}
