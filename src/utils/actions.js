import axios from 'axios'
import { axiosWithAuth } from './axiosWithAuth'

// sign up actions
export const SIGNUP_USER_START = 'SIGNUP_USER_START'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const postUser = (credentials) => dispatch => {
    dispatch({ type: SIGNUP_USER_START})
    axios
        .post('PLACEHOLDER!!!!', credentials) // fill in URL
        .then(res => {
            console.log(res)
            dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(`unable to load games data: ${err}`)
            dispatch({ type: SIGNUP_USER_FAILURE, payload: err})
        })
}


// login actions
export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const userLogin = credentials => dispatch => {
    dispatch({ type: LOGIN_USER_START})
    axios
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