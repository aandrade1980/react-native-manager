import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';

import Router from './Router';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCvJg22OQ4Rny1HZ_zp6dqiqP92IW7Egss',
      authDomain: 'manager-bdb1e.firebaseapp.com',
      databaseURL: 'https://manager-bdb1e.firebaseio.com',
      projectId: 'manager-bdb1e',
      storageBucket: 'manager-bdb1e.appspot.com',
      messagingSenderId: '841542551336',
      appId: '1:841542551336:web:89d1f6993b8fc71bbdf21d',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
