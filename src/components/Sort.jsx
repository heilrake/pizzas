import { useState, useEffect, useRef, memo } from 'react';
//useEffect хук обработчик клика на весь документ
//useRef нужен что бы хранить силки данние "привильно" в контексте реакта

const Sort = memo(function Sort({ items }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [activeItem, setActiveItem] = useState(0); //setActiveItem обновляет activeItem
  const softRef = useRef();
  const activeLabel = items[activeItem].name;

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };

  const toggleToVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const handleOutSideClick = (e) => {
    if (!e.path.includes(softRef.current)) {
      setVisiblePopup(false); // здесь ми закриваем попап если кликнули а любое место но только не в него
    }
  };
  useEffect((e) => {
    document.body.addEventListener('click', handleOutSideClick);
  }, []);

  const liList = items.map((obj, index) => {
    return (
      <li
        className={activeItem === index ? 'active' : ' '}
        onClick={() => onSelectItem(index)}
        key={`${obj.type}_${index}`}>
        {obj.name}
      </li> //категории пиц
    );
  });

  return (
    <div ref={softRef} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ' '}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleToVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>{liList}</ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
