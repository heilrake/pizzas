import React from 'react';
import axios from 'axios';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './app.scss';
import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzasAction(data.pizzas);
    });
    /*fetch('http://localhost:3000/db.json') наглядный пример axios i fetch
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });*/
  }, []);
  

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
