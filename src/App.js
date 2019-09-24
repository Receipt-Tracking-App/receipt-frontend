import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import PrivateRoute from './components/PrivateRoute'

import NavBar from './components/NavBar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ReceiptList from './components/ReceiptList'
import AddReceipt from './components/AddReceipt';
import Footer from './components/Footer'



function App() {
  return (
    <AppDiv className="App">
      <NavBar />
      <Route path='/login' component={Login} />
      <Route path='SignUp' component={SignUp} />
      <PrivateRoute path='/receiptlist' component={ReceiptList} />
      <Route path='/addreceipt' component={AddReceipt} />
      <Footer />
    </AppDiv>
  )
}

export default App

const AppDiv = styled.div`
  background: lightgray
`
