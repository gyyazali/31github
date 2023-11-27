import React from 'react';
import '../../App.css';
import Skeleton from '../../components/Skeleton/Skeleton';
import PizzaCard from '../../components/pizza_card/pizza_card';

const Main = ({ searchValue }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  React.useEffect(
    (res) => {
      const search = searchValue ? `&search=${searchValue}` : '';

      fetch(`https://6560a5c383aba11d99d144d2.mockapi.io/items?${search}`)
        .then((res) => {
          return res.json();
        })
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
    },
    [searchValue],
  );

  const pizzas = items.map((obj) => <PizzaCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  return (
    <div className="pizzas">
      <p className="pizzas_title">Все пиццы</p>
      <div className="pizza_cards_wrapper">
        <div className="pizza_cards">{isLoading ? skeletons : pizzas}</div>
      </div>
    </div>
  );
};

export default Main;
