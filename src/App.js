import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Pages from './routes'
import store from './store'
import 'normalize.css'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Pages/>
      </Provider>
    )
  }
}

export default App;

const Footer = () => {
  return (
    <footer className='footer'>Footer</footer>
  )
}