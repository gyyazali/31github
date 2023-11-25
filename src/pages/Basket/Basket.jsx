import React from 'react';
import css from './basket.module.css';
import { Link } from 'react-router-dom';
import basketNotFound from '../../assets/basketNotFound.png';

const Basket = () => {
  return (
    <div className={css.content}>
      <span className={css.title}>Корзина пустая :( </span>
      <p className={css.description}>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
      <img src={basketNotFound} alt="" />
      <Link className="link" to="/">
        <button className={css.btnToMain}>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default Basket;
