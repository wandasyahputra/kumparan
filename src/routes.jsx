import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'
import styled from 'styled-components'

import Home from 'pages/Home'
import User from 'pages/User'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`

const Routes = () => (
  <Router>
    <React.Fragment>
      <Container>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/user" component={User} />
          <Redirect to="/home" />
        </Switch>
      </Container>
    </React.Fragment>
  </Router>
)

export default Routes
