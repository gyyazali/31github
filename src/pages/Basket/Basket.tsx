import React from 'react';
import css from './basket.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import basketNotFound from '../../assets/basketNotFound.png';
import basketIcon from '../../assets/basketIcon.png';
import trashIcon from '../../assets/trash.png';
import BasketPizzaCard from '../../components/Basket_pizzaCard/Basket_pizzaCard';
import { clearItems } from '../../redux/slices/basket/slice';
import { selectBasket } from '../../redux/slices/basket/selectors';

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(selectBasket);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return (
      <div className={css.empty_content}>
        <span className={css.title}>Корзина пустая {`:( `}</span>
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
  }
  return (
    <div className="container">
      <div className={css.content}>
        <div className={css.basket_content}>
          <div className={css.title_block}>
            <div className={css.title_block_text}>
              <img src={basketIcon} alt="basketIcon" />
              <p className={css.title_text}>Корзина</p>
            </div>
            <div onClick={onClickClear} className={css.title_block_btn}>
              <img src={trashIcon} alt="trashIcon" />
              <button>Очистить корзину</button>
            </div>
          </div>
          <div className={css.pizzas_block}>
            {items.map((item: any) => (
              <>
                <div className="MainGrayLine"></div>
                <BasketPizzaCard key={item.id} {...item} />
              </>
            ))}
          </div>
          <div className={css.count_block}>
            <div className={css.count_blockText}>
              <p>Всего пицц:</p>
              <span>{totalCount} шт.</span>
            </div>
            <div className={css.count_blockPrice}>
              <p>Сумма заказа:</p>
              <span>{totalPrice} ₽</span>
            </div>
          </div>
          <div className={css.pay_block}>
            <Link to="/">
              <button className={css.backBtn}>{`<  Вернуться назад`}</button>
            </Link>
            <button className={css.payBtn}>Оплатить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
