import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

//Reducer
import { Provider } from 'react-redux'
import store from './stores'

//Theme
import theme from './theme'

import './index.css'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
