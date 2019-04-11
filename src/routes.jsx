import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'
import styled from 'styled-components'

import User from 'pages/User'
import Post from 'pages/Post'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`

const Routes = () => (
  <Router>
    <React.Fragment>
      <Container>
        <Switch>
          <Route exact path="/user" component={User} />
          <Route exact path="/post/:userid" component={Post} />
          <Redirect to="/user" />
        </Switch>
      </Container>
    </React.Fragment>
  </Router>
)

export default Routes
