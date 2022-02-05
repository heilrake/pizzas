import { Categories, Sort, PizzaBlock } from '../components';
//import PropTypes from 'prop-types'; // проверка типов из пропсов (что бы не словить ошибок) , ми зададим условие проверки так
import { useSelector, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';

import { setCategory } from '../redux/actions/filters';

const categoryNames = ['Мясние', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <Sort
          items={[
            { name: 'популярность', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map(
            (
              obj, // просиходит рендер всех пиц
            ) => (
              <PizzaBlock
                /*  key={obj.id}
              name={obj.name}
              price={obj.price}
              sizes={obj.sizes}
              imageUrl={obj.imageUrl}*/
                {...obj} // можно писать так как с верху (все по одоному )dd
              /> // поясняем что реакту что кажний дочерний елемент "пици" уникальний через id ( которие у нас прописани в json )
            ),
          )}
      </div>
    </div>
  );
}
export default Home;
