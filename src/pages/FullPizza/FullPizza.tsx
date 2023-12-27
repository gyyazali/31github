import css from './fullPizza.module.css';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
    description: string;
  }>();

  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://6560a5c383aba11d99d144d2.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получнии пицц');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className={css.loading}>Загрузка...</div>;
  }
  return (
    <div className="container">
      <div className={css.pizza}>
        <div>
          <img className={css.pizzaImage} src={pizza.imageUrl} alt="" />
        </div>
        <div className={css.pizza_about}>
          <h2 className={css.pizza_title}>{pizza.title}</h2>
          <p className={css.pizza_description}>{pizza.description}</p>
          <h4 className={css.pizza_price}>{pizza.price} c</h4>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
