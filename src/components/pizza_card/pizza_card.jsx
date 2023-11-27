import React from 'react';
import css from './pizza_card.module.css';

const PizzaCard = ({ title, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeName = ['тонкое', 'традиционное'];

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
        <div className={css.price_button}>
          + Добавить
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
