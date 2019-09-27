import {
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    FETCHING_RECEIPTS_START,
    FETCHING_RECEIPTS_SUCCESS,
    FETCHING_RECEIPTS_FAILURE,
    POSTING_RECEIPT_START,
    POSTING_RECEIPT_SUCCESS,
    POSTING_RECEIPT_FAILURE,
    DELETING_RECEIPT_START,
    DELETING_RECEIPT_SUCCESS,
    DELETING_RECEIPT_FAILURE,
    UPDATING_RECEIPT_START,
    UPDATING_RECEIPT_SUCCESS,
    UPDATING_RECEIPT_FAILURE,
    POSTING_RECEIPT_IMAGE_START,
    POSTING_RECEIPT_IMAGE_SUCCESS,
    POSTING_RECEIPT_IMAGE_FAILURE
} from './actions'

const initialState = {
    userId: null,
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
                userId: action.payload
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
                userId: action.payload
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
        case POSTING_RECEIPT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case POSTING_RECEIPT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                receipts: [...state.receipts, action.payload],
            }
        case POSTING_RECEIPT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to add receipt: ${action.payload}`
            }
        case DELETING_RECEIPT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case DELETING_RECEIPT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                receipts: state.receipts.filter(receipt => {
                    return receipt.receiptId !== action.payload
                })
            }
        case DELETING_RECEIPT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to delete receipt: ${action.payload}`
            }
        case UPDATING_RECEIPT_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case UPDATING_RECEIPT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                receipts: state.receipts.map(receipt => {
                    if (receipt.receiptId === action.payload.receiptId) {
                        return action.payload
                    }
                    return receipt
                })
            }
        case UPDATING_RECEIPT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to update receipt: ${action.payload}`
            }
        case POSTING_RECEIPT_IMAGE_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case POSTING_RECEIPT_IMAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                receipts: state.receipts.map(receipt => {
                    if (receipt.receiptId === action.payload.currentReceiptId) {
                        receipt.url = action.payload.url
                    }
                    return receipt
                })
            }
        case POSTING_RECEIPT_IMAGE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: `Error: Unable to add receipt image: ${action.payload}`
            }
        default:
            return state
    }
}