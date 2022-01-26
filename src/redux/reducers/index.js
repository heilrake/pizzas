import filtersReducer from './filters';
import pizzasReducer from './pizzas';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  // з двох редюсеров делаем один
  filters: filtersReducer,
  pizzas: pizzasReducer,
});
export default rootReducer;
