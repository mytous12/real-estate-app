/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

// Library imports
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// Redux Imports
import store from 'Redux/store';
import { setToken } from 'Redux/user/user.slice';

// Constants And Utils
import { bearerToken } from 'Util/utils';
import { apis, responseCodes, constantValues } from 'Constants/index';

import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';

axios.interceptors.request.use(
  (request) => {
    const { token } = store.reduxStore.getState().userSlice;
    if (apis.AUTHORIZED.some((api) => request.url.includes(api))) {
      request.headers.Authorization = bearerToken(token);
    }
    return request;
  },
);

axios.interceptors.response.use((response) => response, (error) => {
  const { response } = error;
  const { token } = store.reduxStore.getState().userSlice;

  if (response.status === responseCodes.UNAUTHORIZED && token) {
    store.reduxStore.dispatch(setToken({ token: null }));
    window.location = constantValues.LOGIN;
  }
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.reduxStore}>
      <BrowserRouter>
        <PersistGate persistor={store.persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
