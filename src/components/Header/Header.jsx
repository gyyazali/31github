import React from 'react';
import css from './header.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import shopCar from '../../assets/shop-car.png';
import pizzaIcon from '../../assets/pizzaIcon.png';
import closeIcon from '../../assets/close.png';
import searchIcon from '../../assets/search.png';

const Header = ({ setSearchValue }) => {
  const inputRef = React.useRef();
  const { items, totalPrice } = useSelector((state) => state.basket);
  const [value, setValue] = React.useState('');

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };
  return (
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
      <div className={css.header_input}>
        <img className={css.search_icon} src={searchIcon} alt="" />
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          type="text"
          placeholder="Поиск пицц ..."
        />
        {value && <img onClick={onClickClear} className={css.close_icon} src={closeIcon} alt="" />}
      </div>
      <Link className={css.link} to="/basket">
        <div className={css.price}>
          <span className={css.price_num}>{totalPrice} c</span>
          <div className={css.price_line}></div>
          <span className={css.price_count}>
            <img src={shopCar} alt="" />
            {totalCount}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
