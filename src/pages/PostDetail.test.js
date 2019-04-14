import React from 'react'
import ReactDOM from 'react-dom'
import PostDetail from './PostDetail'
import { Provider } from "react-redux";
import store from 'stores/index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}><PostDetail /></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
