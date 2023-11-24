import '../../src/App.css';
import React from 'react';
import shopCar from '../assets/shop-car.png';
import pizzaIcon from '../assets/pizzaIcon.png';
import { Pizza_card } from './pizza_card/pizza_card';

function App() {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [items, setItems] = React.useState([]);
  const [selected, setSelected] = React.useState(0);
  const [popupActive, setPopupActive] = React.useState(false);

  const listSort = ['популярности', 'цену', 'алфавиту'];

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (i) => {
    setActiveCategory(i);
  };

  const popupSelected = (i) => {
    setSelected(i);
    setPopupActive(false);
  };

  React.useEffect((res) => {
    fetch('https://6560a5c383aba11d99d144d2.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  const popupName = listSort[selected];
  return (
    <div className="App">
      <div className="content">
        <div className="header">
          <div className="pizzaIcon">
            <img src={pizzaIcon} alt="" />
            <div className="title">
              <h1>React pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className="price">
            <span className="price_num">199 c</span>
            <div className="price_line"></div>
            <span className="price_count">
              <img src={shopCar} alt="" />3
            </span>
          </div>
        </div>
        <nav className="nav">
          <div className="category">
            {categories.map((value, i) => (
              <p
                onClick={() => onClickCategory(i)}
                className={`${activeCategory === i ? 'category_name_active' : ''} category_name`}
              >
                {value}
              </p>
            ))}
          </div>
          <div className="sort">
            Сортировка по:
            <p
              onClick={() => {
                setPopupActive(!popupActive);
              }}
              className="sort_name"
            >
              {popupName}
            </p>
            {popupActive && (
              <div className="popup">
                {listSort.map((name, i) => (
                  <p onClick={() => popupSelected(i)} key={i}>
                    {name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </nav>
        <div className="pizzas">
          <p className="pizzas_title">Все пиццы</p>
          <div className="pizza_cards">
            {items.map((obj) => (
              <Pizza_card {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
