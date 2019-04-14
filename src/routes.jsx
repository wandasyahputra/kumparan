import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom'

import User from 'pages/User'
import Post from 'pages/Post'
import Album from 'pages/Album'

const Routes = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/user" component={User} />
        <Route exact path="/user/:userid/post" component={Post} />
        <Route exact path="/user/:userid/post/:postid" component={Post} />
        <Route exact path="/user/:userid/album" component={Album} />
        <Redirect to="/user" />
      </Switch>
    </React.Fragment>
  </Router>
)

export default Routes
