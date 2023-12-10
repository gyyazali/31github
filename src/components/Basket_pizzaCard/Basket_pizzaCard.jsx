import css from './basket_pizzaCard.module.css';
import clearBtn from '../../assets/clearBtnIcon.png';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/basketSlice';

const BasketPizzaCard = ({ id, title, type,size, imageUrl, price, count }) => {
  const dispatch = useDispatch();
  
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={css.pizza}>
      <div className={css.pizza_group}>
        <img className={css.pizza_img} src={imageUrl} alt="" />
        <div className={css.pizza_title}>
          <span>{title}</span>
          <p>{type}, {size} см.</p>
        </div>
      </div>
      <div className={css.pizza_count}>
        <button onClick={onClickMinus} className={css.pizza_countMinus}>
          -
        </button>
        <p>{count}</p>
        <button onClick={onClickPlus} className={css.pizza_countPlus}>
          +
        </button>
      </div>
      <span className={css.pizza_price}>{price * count} c</span>
      <button onClick={onClickRemove} className={css.pizza_clearBtn}>
        <img src={clearBtn} alt="clearBtn" />
      </button>
    </div>
  );
};

export default BasketPizzaCard;
