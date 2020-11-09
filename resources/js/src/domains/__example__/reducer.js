import { TEST_TYPE } from "./types";

const testInitialState = 0;

export default function testReducer( state = testInitialState, action) {
    const { type, payload } = action;

    switch ( type ) {
        case TEST_TYPE: {
            return state + payload;
        }
        default: {
            return state;
        }
    }
}
