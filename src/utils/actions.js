import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth'

// sign up actions
export const POSTING_USER_START = 'POSTING_USER_START'
export const POSTING_USER_SUCCESS = 'POSTING_USER_SUCCESS'
export const POSTING_USER_FAILURE = 'POSTING_USER_FAILURE'
export const postUser = (credentials) => dispatch => {
    dispatch({ type: POSTING_USER_START})
    axiosWithAuth()
        .post('PLACEHOLDER!!!!', credentials) // fill in URL
        .then(res => {
            console.log(res)
            dispatch({ type: POSTING_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load games data: ${err}`)
            dispatch({ type: POSTING_USER_FAILURE, payload: err})
        })
}


// login actions
export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const userLogin = credentials => dispatch => {
    dispatch({ type: LOGIN_USER_START})
    axiosWithAuth()
        .post('PLACEHOLDER!!!!', credentials) // fill in URL
        .then(res => {
            console.log(res)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load games data: ${err}`)
            dispatch({ type: LOGIN_USER_FAILURE, payload: err})
        })
}

// get receipts actions
export const FETCHING_RECEIPTS_START = 'FETCHING_RECEIPTS_START'
export const FETCHING_RECEIPTS_SUCCESS = 'FETCHING_RECEIPTS_SUCCESS'
export const FETCHING_RECEIPTS_FAILURE = 'FETCHING_RECEIPTS_FAILURE'
export const getReceipts = () => dispatch => {
    dispatch({ type: FETCHING_RECEIPTS_START})
    axiosWithAuth()
        .get('PLACEHOLDER!!!!') // fill in URL
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_RECEIPTS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load games data: ${err}`)
            dispatch({ type: FETCHING_RECEIPTS_FAILURE, payload: err})
        })
}