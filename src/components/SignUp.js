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
            <Title>Create an Account</Title>
            <Form onSubmit={callSignUp}>
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
                <StyledBtn>Sign Up</StyledBtn>
            </Form>
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
  background: #fff;
  width: 60vw;
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 2px 4px 3px 3px #C0C0C0;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 20px;
`
const Form = styled.form`
  background: #fff;
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 2px 4px 3px 3px #C0C0C0;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 20px;
`;

const StyledBtn = styled.button`
  background: black; 
  border-radius: 15px;
  color: #FAFAFA;
  padding: 5px;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
`;
const Title = styled.h1`
  border-bottom: 2px solid #5F336C;
  margin-bottom: 10px;
  padding-bottom: 10px;
`; 