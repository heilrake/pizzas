import { Categories, Sort, PizzaBlock } from '../components';
//import PropTypes from 'prop-types'; // проверка типов из пропсов (что бы не словить ошибок) , ми зададим условие проверки так
import { useSelector, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';
import LoadPizza from '../components/PizzaBlock/LoadPizza';

const categoryNames = ['Мясние', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];
function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  //const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <Sort activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(
              (
                obj, // просиходит рендер всех пиц
              ) => (
                <PizzaBlock
                  /*  key={obj.id}
              name={obj.name}
              price={obj.price}
              sizes={obj.sizes}
              imageUrl={obj.imageUrl}*/
                  isLoading={true}
                  {...obj} // можно писать так как с верху (все по одоному )dd
                /> // поясняем что реакту что кажний дочерний елемент "пици" уникальний через id ( которие у нас прописани в json )
              ),
            ) // Array(12).fill(<LoadPizza />)закидуем если isLoaded равен фолсе => айтеми не загрузились у нас
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadPizza key={index} />)}
      </div>
    </div>
  );
}
export default Home;
