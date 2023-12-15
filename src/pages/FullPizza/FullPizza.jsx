import css from './fullPizza.module.css';
import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza = () => {
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  console.log(pizza);
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
    return 'Загрузка...';
  }
  return (
    <div className="container">
      <div className={css.pizza}>
        <div>
          <img src={pizza.imageUrl} alt="" />
        </div>
        <div>
          <h2>{pizza.title}</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ab tenetur unde amet
            reprehenderit, laboriosam veniam laborum eum, molestias mollitia commodi eligendi animi
            quaerat. Saepe delectus ad odio sunt excepturi.
          </p>
          <h4>{pizza.price} c</h4>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
