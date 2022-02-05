import React from 'react';
import axios from 'axios';

import { Route, Routes } from 'react-router-dom';
import './app.scss';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const dispatch = useDispatch(); //dispatch етот работает с редаксом

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
    /*fetch('http://localhost:3000/db.json') наглядный пример axios i fetch
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });*/
  }, []); // визиваетса при первом ререндере

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
