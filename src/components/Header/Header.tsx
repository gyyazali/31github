import css from './header.module.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import shopCar from '../../assets/shop-car.png';
import pizzaIcon from '../../assets/pizzaIcon.png';
import { selectBasket } from '../../redux/slices/basketSlice';
import Search from '../Search/Search';

const Header: React.FC = () => {
  const location = useLocation();

  const { items, totalPrice } = useSelector(selectBasket);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

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
        <Search />
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
