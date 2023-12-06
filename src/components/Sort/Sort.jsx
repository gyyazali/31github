import React from 'react';
import '../../App.css';
// import { AppContext } from '../../App';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [popupActive, setPopupActive] = React.useState(false);
  const list = [
    { name: 'популярное (DESC)', sortProperty: 'rating' },
    { name: 'популярное (ASC)', sortProperty: '-rating' },
    { name: 'цене (DESC)', sortProperty: 'price' },
    { name: 'цене (ASC)', sortProperty: '-price' },
    { name: 'алфавиту (DESC)', sortProperty: 'title' },
    { name: 'алфавиту (ASC)', sortProperty: '-title' },
  ];

  const popupSelected = (obj) => {
    dispatch(setSort(obj));
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
        {sort.name}
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
