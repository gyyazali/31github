import React, { useRef } from 'react';
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

export const sortList = [
  { name: 'популярное (DESC)', sortProperty: 'rating' },
  { name: 'популярное (ASC)', sortProperty: '-rating' },
  { name: 'цене (DESC)', sortProperty: 'price' },
  { name: 'цене (ASC)', sortProperty: '-price' },
  { name: 'алфавиту (DESC)', sortProperty: 'title' },
  { name: 'алфавиту (ASC)', sortProperty: '-title' },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [popupActive, setPopupActive] = React.useState(false);
  const sortRef = useRef();

  const popupSelected = (obj) => {
    dispatch(setSort(obj));
  };

  // Был ли клик вне области
  React.useEffect(() => {
    const handeClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setPopupActive(false);
        console.log('click outside');
      }
    };
    document.body.addEventListener('click', handeClickOutside);

    return () => document.body.removeEventListener('click', handeClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
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
          {sortList.map((obj, i) => (
            <p key={i} onClick={() => popupSelected(obj)}>
              {obj.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
export default Sort;
