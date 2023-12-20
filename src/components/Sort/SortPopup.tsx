import React, { useRef } from 'react';
import '../../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Sort, SortPropertyEnum, selectSort, setSort } from '../../redux/slices/filterSlice';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export const sortList: SortItem[] = [
  { name: 'популярное (DESC)', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'популярное (ASC)', sortProperty: SortPropertyEnum.RATING_ASC },
  { name: 'цене (DESC)', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'цене (ASC)', sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: 'алфавиту (DESC)', sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту (ASC)', sortProperty: SortPropertyEnum.TITLE_ASC },
];

const SortPopup: React.FC = React.memo(() => {
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
});
export default SortPopup;
