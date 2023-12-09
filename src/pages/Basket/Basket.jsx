import React from 'react';
import css from './basket.module.css';
import { Link } from 'react-router-dom';
import basketNotFound from '../../assets/basketNotFound.png';
import basketIcon from '../../assets/basketIcon.png';
import trashIcon from '../../assets/trash.png';
import BasketPizzaCard from '../../components/Basket_pizzaCard/Basket_pizzaCard';

const Basket = () => {
  const [items, setItems] = React.useState(true);
  return (
    <div className={css.content}>
      {items ? (
        <div className={css.basket_content}>
          <div className={css.title_block}>
            <div className={css.title_block_text}>
              <img src={basketIcon} alt="basketIcon" />
              <p className={css.title_text}>Корзина</p>
            </div>
            <div className={css.title_block_btn}>
              <img src={trashIcon} alt="trashIcon" />
              <button>Очистить корзину</button>
            </div>
          </div>
          <div className={css.pizzas_block}>
            <BasketPizzaCard title="Креветки по-азиатски" />
            <BasketPizzaCard title="Чизбургер-пицца" />
          </div>
          <div className={css.count_block}>
            <div className={css.count_blockText}>
              <p>Всего пицц:</p>
              <span>3 шт.</span>
            </div>
            <div className={css.count_blockPrice}>
              <p>Сумма заказа:</p>
              <span>900 ₽</span>
            </div>
          </div>
          <div className={css.pay_block}>
            <button className={css.backBtn}>{`<  Вернуться назад`}</button>
            <button className={css.payBtn}>Оплатить сейчас</button>
          </div>
        </div>
      ) : (
        <div className={css.empty_content}>
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
      )}
    </div>
  );
};

export default Basket;
