import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import PrivateRoute from './components/PrivateRoute'

import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ReceiptList from './components/ReceiptList'
import Footer from './components/Footer'

import AddReceipt from './components/AddReceipt';


function App() {
  return (
    <AppDiv className="App">
      <NavBar />
      <AddReceipt />
      <Route path='/login' component={Login} />
      <Route path='SignUp' component={SignUp} />
      <PrivateRoute path='/receiptlist' component={ReceiptList} />
      <Footer />
    </AppDiv>
  )
}

export default App

const AppDiv = styled.div`
  background: #f0f0f1;
`
