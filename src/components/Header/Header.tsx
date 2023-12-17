import css from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import debounce from 'lodash.debounce';
import { Link, useLocation } from 'react-router-dom';
import { setSearchValue } from '../../redux/slices/filterSlice';
import shopCar from '../../assets/shop-car.png';
import pizzaIcon from '../../assets/pizzaIcon.png';
import closeIcon from '../../assets/close.png';
import searchIcon from '../../assets/search.png';
import { selectBasket } from '../../redux/slices/basketSlice';

const Header = () => {
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const location = useLocation();

  const { items, totalPrice } = useSelector(selectBasket);
  const [value, setValue] = React.useState('');

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className="container">
      <div className={css.header}>
        <Link className={css.link} to="/">
          <div className={css.pizzaIcon}>
            <img src={pizzaIcon} alt="" />
            <div className={css.title}>
              <h1>React pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
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
        <div className={css.price}>
          {location.pathname !== '/basket' && (
            <Link className={css.linkBasket} to="/basket">
              <span className={css.price_num}>{totalPrice} c</span>
              <div className={css.price_line}></div>
              <span className={css.price_count}>
                <img src={shopCar} alt="" />
                {totalCount}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;