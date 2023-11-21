import "../../src/App.css"
import shopCar from "../assets/shop-car.png"
import pizzaIcon from "../assets/pizzaIcon.png"
import { Pizza_card } from "./pizza_card/pizza_card";

function App() {
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
            <p className="category_name_active category_name">Все</p>
            <p className="category_name">Мясные</p>
            <p className="category_name">Вегетарианская</p>
            <p className="category_name">Гриль</p>
            <p className="category_name">Острые</p>
            <p className="category_name">Закрытые</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
