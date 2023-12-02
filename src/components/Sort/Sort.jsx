import React from 'react';
import '../../App.css';
import { AppContext } from '../../App';

const Sort = ({ onChangeSort }) => {
  const [popupActive, setPopupActive] = React.useState(false);
  const { sortType } = React.useContext(AppContext);
  const list = [
    { name: 'популярное (DESC)', sort: 'rating' },
    { name: 'популярное (ASC)', sort: '-rating' },
    { name: 'цене (DESC)', sort: 'price' },
    { name: 'цене (ASC)', sort: '-price' },
    { name: 'алфавиту (DESC)', sort: 'title' },
    { name: 'алфавиту (ASC)', sort: '-title' },
  ];

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
        {sortType.name}
      </p>
      {popupActive && (
        <div className="popup">
          {list.map((obj, i) => (
            <p key={i} onClick={() => popupSelected(obj)}>
              {obj.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
export default Sort;
