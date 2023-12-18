import React, { useRef } from 'react';
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectSort, setSort } from '../../redux/slices/filterSlice';

type SortItem = {
  name: string;
  sortProperty: string;
};

export const sortList: SortItem[] = [
  { name: 'популярное (DESC)', sortProperty: 'rating' },
  { name: 'популярное (ASC)', sortProperty: '-rating' },
  { name: 'цене (DESC)', sortProperty: 'price' },
  { name: 'цене (ASC)', sortProperty: '-price' },
  { name: 'алфавиту (DESC)', sortProperty: 'title' },
  { name: 'алфавиту (ASC)', sortProperty: '-title' },
];

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const [popupActive, setPopupActive] = React.useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setPopupActive(false);
  };

  // Был ли клик вне области
  React.useEffect(() => {
    const handeClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setPopupActive(false);
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
            <p key={i} onClick={() => onClickListItem(obj)}>
              {obj.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
export default Sort;
