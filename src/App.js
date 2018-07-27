import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Pages from './routes'
import store from './store'
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
