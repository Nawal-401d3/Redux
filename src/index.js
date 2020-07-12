import React from 'react';
import ReactDom from 'react-dom';
// to be able to provide our store to app 
import { Provider } from 'react-redux';
import App from './app.js';

import './app.scss';

// import store from './store/index.js';

function Entry() {
  return (
    // <Provider store={store}>
    //   <App />
    // </Provider>
    <>
    <App />
    </>
  );
}

const rootPoint = document.getElementById('root');
ReactDom.render(<Entry />, rootPoint);