import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Routes } from 'react-router-dom';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <Provider store={store}>
        <App />
      </Provider>
    </Routes>
  </React.StrictMode>,
  document.getElementById('root'),
);
