import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import 'react-calendar/dist/Calendar.css';
import './app/layout/styles.css';

import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop />
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
