import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ userId, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token') && userId) {
          return <Component {...props}/>
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

const mapStateToProps = state => {
  return {
    userId: state.userId,
  }
}
export default connect(mapStateToProps, {})(PrivateRoute)