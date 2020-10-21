import { TEST_TYPE } from './types';

export default function testReducer( state = 0, action ) {
    switch ( action.type ) {
        case TEST_TYPE: return state + 1;
        default: return state;
    }
}