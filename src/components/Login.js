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
      <Div>
        <Img src={ require('../assets/images/undraw_product_teardown_elol.svg') } alt=''receiptly logo />
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
      </Div>

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
const Div = styled.div`
  display: flex; 
  margin: 30px 0;
  border-top: 2px solid #2C2C2C;
  padding-top: 50px;
`;

const LoginDiv = styled.div`
  margin: 20px auto;
  background: #fff;
  width: 50vw;
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

const Img = styled.img`
  width: 400px;
  height: 400px;
  background: #FAFAFA;
  box-shadow: 2px 4px 3px #0C0C0C;
  margin-left: 20px;
`;