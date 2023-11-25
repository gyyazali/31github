import React from 'react';
import '../../App.css';
import Skeleton from '../../components/Skeleton/Skeleton';
import PizzaCard from '../../components/pizza_card/pizza_card';

const Main = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  React.useEffect((res) => {
    fetch('https://6560a5c383aba11d99d144d2.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="pizzas">
      <p className="pizzas_title">Все пиццы</p>
      <div className="pizza_cards">
        {/* {items.map((obj) => (
              <Skeleton {...obj} />
            ))} */}
        {isLoading
          ? [...new Array(6)].map(() => <Skeleton />)
          : items.map((obj) => <PizzaCard {...obj} />)}
      </div>
    </div>
  );
};

export default Main;
