import React, { useState } from 'react'
import styled from 'styled-components'

import { getUser } from '../utils/actions'

const initialCredentials = {
    username: '',
    password: ''
}

function Login() {
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
        getUser()
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

export default Login

//styled components

const LoginDiv = styled.div`
  width: 200px
  margin: 20px auto
`