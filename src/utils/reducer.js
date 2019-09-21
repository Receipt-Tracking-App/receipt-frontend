import {
    FETCHING_RECEIPTS_START,
    FETCHING_RECEIPTS_SUCCESS,
    FETCHING_RECEIPTS_FAILURE,
    FETCHING_USER_START,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAILURE
} from './actions'

const initialState = {
    user: null,
    receipts: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_USER_SUCCESS:
            return {
                ...state,
                isFetching: true,
                user: action.payload
            }
        case FETCHING_USER_FAILURE:
            return {
                ...state,
                isFetching: true,
                error: `Error: Unable to load user: ${action.payload}`
            }
        case FETCHING_RECEIPTS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_RECEIPTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                receipts: action.payload
            }
        case FETCHING_RECEIPTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to load receipts list: ${action.payload}`
            }
        default:
            return state
    }
}