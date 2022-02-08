import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

// для получения и сохранения пицц после запроса
export const fetchPizzas = () => (dispatch) => {
  //АСИНХРОННО
  // запрос к серверу
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

// метод для сохранение пицц
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
