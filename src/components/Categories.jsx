import React, { useState } from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(null); //setActiveItem обновляет activeItem

  const onSelectItem = (index) => {
    setActiveItem(index);
  };
 
  const liList = items.map((name, index) => {
    return (
      <li
        className={activeItem === index ? 'active' : ' '}
        onClick={() => onSelectItem(index)}
        key={`${name}_${index}`}>
        {name}
      </li> //категории пиц
    );
  });
  return (
    <div className="categories">
      <ul>
        <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ' '}>
          Все
        </li>
        {liList}
      </ul>
    </div>
  );
}

export default Categories;
