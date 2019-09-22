import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { userLogin } from '../utils/actions'

const initialCredentials = {
    username: '',
    password: ''
}

function Login({ userLogin }) {
    const [credentials, setCredentials] = useState(initialCredentials)

    function handleChange(e) {
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        )
    }

    function callLogin(e) {
        e.preventDefault()
        userLogin()
    }

    return (
        <LoginDiv>
            <br/>
            <br/>
            <form onSubmit={callLogin}>
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
                <button>Log in</button>
            </form>
        </LoginDiv>
    )
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      error: state.error
    }
  }
  
  export default connect(mapStateToProps, { userLogin })(Login)

//styled components

const LoginDiv = styled.div`
  width: 200px
  margin: 20px auto
`