import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth'

// sign up actions
export const SIGNUP_USER_START = 'SIGNUP_USER_START'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const postUser = (credentials, history) => dispatch => {
    dispatch({ type: SIGNUP_USER_START})
    axios
        .post('https://lambda-receipt-tracker.herokuapp.com/api/auth/register', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data.userId})
            history.push('/receiptlist')
        })
        .catch(err => {
            console.log(`unable to register user data: ${err.message}`)
            dispatch({ type: SIGNUP_USER_FAILURE, payload: err.message})
        })
}


// login actions
export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const userLogin = (credentials, history) => dispatch => {
    dispatch({ type: LOGIN_USER_START})
    axios
        .post('https://lambda-receipt-tracker.herokuapp.com/api/auth/login', credentials)
        .then(res => {
            console.log(res)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.userId})
            history.push('/receiptlist')
        })
        .catch(err => {
            console.log(`unable to load user data: ${err}`)
            dispatch({ type: LOGIN_USER_FAILURE, payload: err})
        })
}

// get receipts actions
export const FETCHING_RECEIPTS_START = 'FETCHING_RECEIPTS_START'
export const FETCHING_RECEIPTS_SUCCESS = 'FETCHING_RECEIPTS_SUCCESS'
export const FETCHING_RECEIPTS_FAILURE = 'FETCHING_RECEIPTS_FAILURE'
export const getReceipts = (userId) => dispatch => {
    dispatch({ type: FETCHING_RECEIPTS_START})
    axiosWithAuth()
        .get(`https://lambda-receipt-tracker.herokuapp.com/api/receipts/users/${userId}`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_RECEIPTS_SUCCESS, payload: res.data.receipts.receipts})
        })
        .catch(err => {
            console.log(`unable to load receipts data: ${err}`)
            dispatch({ type: FETCHING_RECEIPTS_FAILURE, payload: err})
        })
}

// post receipt actions
export const POSTING_RECEIPT_START = 'POSTING_RECEIPT_START'
export const POSTING_RECEIPT_SUCCESS = 'POSTING_RECEIPT_SUCCESS'
export const POSTING_RECEIPT_FAILURE = 'POSTING_RECEIPT_FAILURE'
export const POSTING_RECEIPT_IMAGE_START = 'POSTING_RECEIPT_IMAGE_START'
export const POSTING_RECEIPT_IMAGE_SUCCESS = 'POSTING_RECEIPT_IMAGE_SUCCESS'
export const POSTING_RECEIPT_IMAGE_FAILURE = 'POSTING_RECEIPT_IMAGE_FAILURE'
export const postReceipt = (newReceipt, image) => dispatch => {
    console.log('newReceipt:', newReceipt)
    dispatch({ type: POSTING_RECEIPT_START})
    axiosWithAuth()
        .post('https://lambda-receipt-tracker.herokuapp.com/api/receipts', newReceipt)
        .then(res => {
            console.log('post receipt response:', res)
            const currentReceiptId = res.data.receiptId
            dispatch({ type: POSTING_RECEIPT_SUCCESS, payload: newReceipt})
            
            if (image) {
                dispatch({ type: POSTING_RECEIPT_IMAGE_START})
                const formData = new FormData();
                formData.append('receipt', image)
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }
                axiosWithAuth()
                    .post(`https://lambda-receipt-tracker.herokuapp.com/api/receipts/${currentReceiptId}/upload`, formData, config)
                    .then(res => {
                        console.log('post receipt image response:', res)
                        dispatch({ type: POSTING_RECEIPT_IMAGE_SUCCESS, payload: { currentReceiptId: currentReceiptId, url: res.data.url}})
                    })
                    .catch(err => {
                        console.log(`unable to post receipt image: ${err}`)
                    })
            }
        })
        .catch(err => {
            console.log(`unable to post receipts data: ${err}`)
            dispatch({ type: POSTING_RECEIPT_FAILURE, payload: err})
        })
}

// delete receipt actions
export const DELETING_RECEIPT_START = 'DELETING_RECEIPT_START'
export const DELETING_RECEIPT_SUCCESS = 'DELETING_RECEIPT_SUCCESS'
export const DELETING_RECEIPT_FAILURE = 'DELETING_RECEIPT_FAILURE'
export const deleteReceipt = (receiptId) => dispatch => {
    dispatch({ type: DELETING_RECEIPT_START})
    axiosWithAuth()
        .post(`https://lambda-receipt-tracker.herokuapp.com/api/receipts/${receiptId}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETING_RECEIPT_SUCCESS, payload: receiptId})
        })
        .catch(err => {
            console.log(`unable to post receipts data: ${err}`)
            dispatch({ type: DELETING_RECEIPT_FAILURE, payload: err})
        })
}

// update receipt actions
export const UPDATING_RECEIPT_START = 'UPDATING_RECEIPT_START'
export const UPDATING_RECEIPT_SUCCESS = 'UPDATING_RECEIPT_SUCCESS'
export const UPDATING_RECEIPT_FAILURE = 'UPDATING_RECEIPT_FAILURE'
export const updateReceipt = (updatedReceipt, receiptId) => dispatch => {
    dispatch({ type: UPDATING_RECEIPT_START})
    axiosWithAuth()
        .put(`https://lambda-receipt-tracker.herokuapp.com/api/receipts/${receiptId}`, updatedReceipt)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATING_RECEIPT_SUCCESS, payload: updatedReceipt})
        })
        .catch(err => {
            console.log(`unable to post receipts data: ${err}`)
            dispatch({ type: UPDATING_RECEIPT_FAILURE, payload: err})
        })
}