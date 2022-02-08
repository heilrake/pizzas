import { Categories, Sort, PizzaBlock } from '../components';
//import PropTypes from 'prop-types'; // проверка типов из пропсов (что бы не словить ошибок) , ми зададим условие проверки так
import { useSelector, useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory } from '../redux/actions/filters';
import LoadPizza from '../components/PizzaBlock/LoadPizza';
const categoryNames = ['Мясние', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  //console.log(isLoaded);
  console.log(category, sortBy);

  React.useEffect(() => {
    /*fetch('http://localhost:3000/db.json') наглядный пример axios i fetch
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });*/
    dispatch(fetchPizzas());
  }, [category]); // визиваетса при первом ререндере

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
