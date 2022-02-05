import { useState } from 'react';
import PropTypes from 'prop-types';

function PizzaBlock({ name, price, sizes, imageUrl, types }) {
  const [activeItemSize, setActiveItemSize] = useState(0); //setActiveItem обновляет activeItem
  const [activeItemType, setActiveItemType] = useState(0); // вибираем тесто для пици
  const onSelectItemSize = (index) => {
    setActiveItemSize(index);
  };
  const onSelectItemType = (index) => {
    setActiveItemType(index);
  };
  const liList = sizes.map((name, index) => {
    // лишки с размерами пици
    return (
      <li
        className={activeItemSize === index ? 'active' : ' '}
        onClick={() => onSelectItemSize(index)}
        key={`${name}_${index}`}>
        {name} см.
      </li> //категории пиц
    );
  });
  const LiChoise = types.map((name, index) => {
    if (name === 0) {
      name = 'традиционное';
    } else {
      name = 'тонкое';
    }
    return (
      <li
        className={activeItemType === index ? 'active' : ' '}
        onClick={() => onSelectItemType(index)}
        key={`${name}_${index}`}>
        {name}
      </li>
    );
  });
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Загрузка картинки" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>{LiChoise}</ul>
        <ul>{liList}</ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
};

export default PizzaBlock;
