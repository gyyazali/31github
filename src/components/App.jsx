import '../../src/App.css';
import React from 'react';
import shopCar from '../assets/shop-car.png';
import pizzaIcon from '../assets/pizzaIcon.png';
import Main from '../pages/Main/Main';
import NotFound from '../pages/NotFound/NotFound';
import Basket from '../pages/Basket/Basket';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [activeCategory, setActiveCategory] = React.useState(0);
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

  const popupName = listSort[selected];
  return (
    <div className="App">
      <div className="content">
        <div className="header">
          <Link className="link" to="/">
            <div className="pizzaIcon">
              <img src={pizzaIcon} alt="" />
              <div className="title">
                <h1>React pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <Link className="link" to="/basket">
            <div className="price">
              <span className="price_num">199 c</span>
              <div className="price_line"></div>
              <span className="price_count">
                <img src={shopCar} alt="" />3
              </span>
            </div>
          </Link>
        </div>
        <nav className="nav">
          <div className="category">
            {categories.map((value, i) => (
              <p
                key={i}
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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
