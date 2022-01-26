import { Categories, Sort, PizzaBlock } from '../components';
import PropTypes from 'prop-types'; // проверка типов из пропсов (что бы не словить ошибок) , ми зададим условие проверки так

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={() => alert('1')}
          items={['Мясние', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
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
        {items.map(
          (
            obj, // просиходит рендер всех пиц
          ) => (
            <PizzaBlock
              /*  key={obj.id}
              name={obj.name}
              price={obj.price}
              sizes={obj.sizes}
              imageUrl={obj.imageUrl}*/
              {...obj} // можно писать так как с верху (все по одоному )
            /> // поясняем что реакту что кажний дочерний елемент "пици" уникальний через id ( которие у нас прописани в json )
          ),
        )}
      </div>
    </div>
  );
}
export default Home;
