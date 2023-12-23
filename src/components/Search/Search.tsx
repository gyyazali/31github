import React from 'react';
import css from './search.module.css';
import debounce from 'lodash.debounce';
import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/slices/filter/slice';
import { useLocation } from 'react-router-dom';
import { closeIcon, searchIcon } from '../../assets/importImages';

const Search: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [value, setValue] = React.useState('');

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };
  return (
    <>
      {location.pathname !== '/basket' && (
        <div className={css.header_input}>
          <img className={css.search_icon} src={searchIcon} alt="" />
          <input
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            type="text"
            placeholder="Поиск пицц ..."
          />
          {value && (
            <img onClick={onClickClear} className={css.close_icon} src={closeIcon} alt="" />
          )}
        </div>
      )}
    </>
  );
};

export default Search;
