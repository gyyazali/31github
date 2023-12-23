import React from 'react';
import css from './header.module.css';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectBasket } from '../../redux/slices/basket/selectors';
import Search from '../Search/Search';
import { shopCar, pizzaIcon } from '../../assets/importImages';

const Header: React.FC = () => {
  const location = useLocation();
  const isMonted = React.useRef(false);
  const { items, totalPrice } = useSelector(selectBasket);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  React.useEffect(() => {
    if (isMonted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('basket', json);
    }
    isMonted.current = true;
  }, [items]);

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
