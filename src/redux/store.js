import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
//thunk посредственик

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)), // тут мы поясняем какой именно мидлваре хотим юзать

  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
