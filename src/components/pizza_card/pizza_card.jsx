import React from 'react';
import css from './pizza_card.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/basketSlice';

const PizzaCard = ({ id, title, price, imageUrl, sizes, types }) => {
  const dispatch = useDispatch();
  const basketItem = useSelector((state) => state.basket.items.find((obj) => obj.id === id));
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeName = ['тонкое', 'традиционное'];

  const addedCount = basketItem ? basketItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeName[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className={css.card}>
      <img src={imageUrl} alt="" className={css.card_img} />
      <p className={css.card_name}>{title}</p>
      <div className={css.card_kind}>
        {types.map((typeIndex, i) => (
          <p
            key={i}
            onClick={() => setActiveType(typeIndex)}
            className={activeType === typeIndex ? css.card_kind_name_active : ''}
          >
            {typeName[typeIndex]}
          </p>
        ))}
      </div>
      <div className={css.card_size}>
        {sizes.map((size, i) => (
          <p
            key={i}
            onClick={() => setActiveSize(i)}
            className={activeSize === i ? css.card_size_sm_active : ''}
          >
            {size} см.
          </p>
        ))}
      </div>
      <div className={css.card_price}>
        <div className={css.price_num}>от {price} с</div>
        <div onClick={onClickAdd} className={css.price_button}>
          + Добавить
          {addedCount > 0 && <span>{addedCount}</span>}
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
