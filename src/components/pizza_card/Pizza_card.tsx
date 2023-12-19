import React from 'react';
import css from './pizza_card.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { BasketItem, addItem, selectBasketItemById } from '../../redux/slices/basketSlice';
import { Link } from 'react-router-dom';

type PizzaCardProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};

const PizzaCard: React.FC<PizzaCardProps> = ({ id, title, price, imageUrl, sizes, types }) => {
  const dispatch = useDispatch();
  const basketItem = useSelector(selectBasketItemById(id));
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeName = ['тонкое', 'традиционное'];

  const addedCount = basketItem ? basketItem.count : 0;

  const onClickAdd = () => {
    const item: BasketItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeName[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={css.card}>
      <Link className="link" to={`/pizza/${id}`}>
        <img src={imageUrl} alt="" className={css.card_img} />
        <p className={css.card_name}>{title}</p>
      </Link>

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
