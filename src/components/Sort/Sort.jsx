import React from 'react';
import '../../App.css';

const Sort = ({ value, setSortType, onChangeSort }) => {
  const [popupActive, setPopupActive] = React.useState(false);

  const list = ['популярное', 'цене', 'алфавиту'];
  const popupName = list[value];

  const popupSelected = (i) => {
    onChangeSort(i);
    setPopupActive(false);
  };
  return (
    <div className="sort">
      Сортировка по:
      <p
        onClick={() => {
          setPopupActive(!popupActive);
        }}
        className="sort_name"
      >
        {popupName}
      </p>
      {popupActive && (
        <div className="popup">
          {list.map((obj, i) => (
            <p key={i} onClick={() => popupSelected(i)}>
              {obj}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
export default Sort;
