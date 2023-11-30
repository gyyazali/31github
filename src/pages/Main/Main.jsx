import React from 'react';
import '../../App.css';
import Skeleton from '../../components/Skeleton/Skeleton';
import PizzaCard from '../../components/pizza_card/pizza_card';
import Pagination from '../../components/Pagination/Pagination';

const Main = ({ isLoading, items, setCurrentPage }) => {
  const pizzas = items.map((obj) => <PizzaCard key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="pizzas">
      <p className="pizzas_title">Все пиццы</p>
      <div className="pizza_cards_wrapper">
        <div className="pizza_cards">{isLoading ? skeletons : pizzas}</div>
      </div>
      <Pagination onChangePage={(number => setCurrentPage(number))} />
    </div>
  );
};

export default Main;
