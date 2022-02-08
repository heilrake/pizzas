const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        isLoaded: true,
        items: action.payload,
      };
      break;
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
      break;
    default:
      return state;
  }
  /*if (action.type === 'SET_PIZZAS') {
    return {
      ...state,
      isLoaded: true,
      items: action.payload,
    };
  }
  if (action.type === 'SET_LOADED') {
    return {
      ...state,
      isLoaded: action.payload,
    };
  }*/
  // return state;
};
export default pizzas;
