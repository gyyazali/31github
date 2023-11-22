import "../../src/App.css"
import React from "react"
import shopCar from "../assets/shop-car.png"
import pizzaIcon from "../assets/pizzaIcon.png"
import { Pizza_card } from "./pizza_card/pizza_card";

function App() {
  const [activeCategory, setActiveCategory] = React.useState(0)

  const onClickCategory = (i) => {
    setActiveCategory(i)
  }
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
              <img src={shopCar} alt="" />
              3
            </span>
          </div>
        </div>
        <nav className="nav">
          <div className="category">
            <p onClick={() => onClickCategory(0)} className={`${activeCategory === 0 ? "category_name_active" : ""} category_name`}>Все</p>
            <p onClick={() => onClickCategory(1)} className={`${activeCategory === 1 ? "category_name_active" : ""} category_name`}>Мясные</p>
            <p onClick={() => onClickCategory(2)} className={`${activeCategory === 2 ? "category_name_active" : ""} category_name`}>Вегетарианская</p>
            <p onClick={() => onClickCategory(3)} className={`${activeCategory === 3 ? "category_name_active" : ""} category_name`}>Гриль</p>
            <p onClick={() => onClickCategory(4)} className={`${activeCategory === 4 ? "category_name_active" : ""} category_name`}>Острые</p>
            <p onClick={() => onClickCategory(5)} className={`${activeCategory === 5 ? "category_name_active" : ""} category_name`}>Закрытые</p>
          </div>
          <div className="sort">
            Сортировка по:
            <p className="sort_name">
              популярности
            </p>
          </div>
        </nav>
        <div className="pizzas">
          <p className="pizzas_title">Все пиццы</p>
          <div className="pizza_cards">
            <Pizza_card />
            <Pizza_card />
            <Pizza_card />
            <Pizza_card />
            <Pizza_card />
            <Pizza_card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
