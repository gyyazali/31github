import "../../src/App.css"
import shopCar from "../assets/shop-car.png"
import pizzaIcon from "../assets/pizzaIcon.png"

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
        <nav className="nav"></nav>
        <div className="pizzas"></div>
      </div>
    </div>
  );
}

export default App;
