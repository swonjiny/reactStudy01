import {handleAction} from "redux-actions";
const initalState = {
    loading: {
        FETCH: false,
        FETCH_LIST: false,
    },
    board: null,
    boards: [],
    error: null,
}

// 리듀서
const board = handleAction(
    {},
    initalState
)

export default board