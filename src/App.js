import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import PrivateRoute from './components/PrivateRoute'

import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ReceiptList from './components/ReceiptList'
import Footer from './components/Footer'
import './styles.css';

import AddReceipt from './components/AddReceipt';

function App() {
  return (
    <AppDiv className="App">
      <AddReceipt />
      <NavBar />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/receiptlist' component={ReceiptList} />
      <Footer />
    </AppDiv>
  )
}

export default App

const AppDiv = styled.div`
  background: #BAA6CE;
`
