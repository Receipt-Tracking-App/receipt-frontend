import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { userLogin } from '../utils/actions'

const initialCredentials = {
    userId: '',
    password: ''
}

function Login({ userLogin, history }) {
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
        userLogin(credentials, history)
    }

    return (
        <LoginDiv>
            <Form onSubmit={callLogin}>
                <input
                    type="text"
                    name="userId"
                    value={credentials.userId}
                    placeholder="username or email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="password"
                    onChange={handleChange}
                />
                <StyledBtn>Log in</StyledBtn>
            </Form>
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
  margin: 20px auto;
  background: #fff;
  width: 60vw;
  border: 1px solid #fff;
  border-radius: 15px;
  box-shadow: 2px 4px 3px 3px #C0C0C0;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 20px;
`;

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