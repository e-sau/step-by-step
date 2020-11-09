import * as ACTION from "./types";

const gradesInitialState = {
    list: [],
    selectedId: null,
    isFetching: false,
};

export default function gradesReducer( state = gradesInitialState, action ) {
    const { type, payload } = action;

    switch ( type ) {
        case ACTION.SELECT: {
            return {
                ...state,
                selectedId: payload,
            };
        }
        case ACTION.FETCH_REQUEST: {
            return {
                ...state, isFetching: true
            };
        }
        case ACTION.FETCH_SUCCESS: {
            return {
                ...state,
                list: payload,
                isFetching: false
            };
        }
        case ACTION.FETCH_ERROR: {
            return {
                ...state,
                error: payload,
                isFetching: false,
            };
        }
        default: {
            return state;
        }
    }
}
