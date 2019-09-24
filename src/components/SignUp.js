import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { postUser } from '../utils/actions'

const initialCredentials = {
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    email: ''
}

function SignUp({ postUser, history }) {

    const [credentials, setCredentials] = useState(initialCredentials)

    function handleChange(e) {
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        )
    }

    function callSignUp(e) {
        e.preventDefault()
        postUser(credentials, history)
    }

    return (
        <SignUpDiv>
            <br/>
            <br/>
            <form onSubmit={callSignUp}>
                <input
                    type="text"
                    name="firstName"
                    value={credentials.firstName}
                    placeholder="first name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    value={credentials.lastName}
                    placeholder="last name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    placeholder="email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder="login name"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    placeholder='confirm password'
                    onChange={handleChange}
                />
                <button>Sign Up</button>
            </form>
        </SignUpDiv>
    )
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { postUser })(SignUp)

//styled components

const SignUpDiv = styled.div`
  width: 200px
  margin: 20px auto
`