import css from './basket_pizzaCard.module.css';
import clearBtn from '../../assets/clearBtnIcon.png';
import pizza from '../../assets/pizza1.png';

const BasketPizzaCard = ({ title }) => {
  return (
    <div className={css.pizza}>
      <div className={css.pizza_group}>
        <img className={css.pizza_img} src={pizza} alt="" />
        <div className={css.pizza_title}>
          <span>{title}</span>
          <p>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className={css.pizza_count}>
        <button className={css.pizza_countMinus}>-</button>
        <p>2</p>
        <button className={css.pizza_countPlus}>+</button>
      </div>
      <span className={css.pizza_price}>770 c</span>
      <button className={css.pizza_clearBtn}>
        <img src={clearBtn} alt="clearBtn" />
      </button>
    </div>
  );
};

export default BasketPizzaCard;
