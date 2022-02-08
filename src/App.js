import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './app.scss';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
