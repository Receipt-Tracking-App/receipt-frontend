import {
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    FETCHING_RECEIPTS_START,
    FETCHING_RECEIPTS_SUCCESS,
    FETCHING_RECEIPTS_FAILURE
} from './actions'

const initialState = {
    user: null,
    receipts: [],
    isFetching: false,
    error: ''
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to create user: ${action.payload}`
            }
        case LOGIN_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isFetching: true,
            }
        case LOGIN_USER_FAILURE:
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