import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { postUser } from '../utils/actions'

const initialCredentials = {
    username: '',
    password: '',
    confirmPassword: ''
}

function SignUp({ postUser }) {

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
        postUser(credentials)
    }

    return (
        <SignUpDiv>
            <br/>
            <br/>
            <form onSubmit={callSignUp}>
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
                    name="confirmpassword"
                    value={credentials.confirmPassword}
                    placeholder='confirm password'
                    onChange={handleChange}
                />
                <button>Log in</button>
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