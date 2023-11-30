import './App.css';
import React from 'react';
import shopCar from './assets/shop-car.png';
import pizzaIcon from './assets/pizzaIcon.png';
import closeIcon from './assets/close.png';
import searchIcon from './assets/search.png';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Basket from './pages/Basket/Basket';
import { Routes, Route, Link } from 'react-router-dom';
import Category from './components/Category/Category';
import Sort from './components/Sort/Sort';

function App() {
  const [items, setItems] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярное',
    sort: 'rating',
  });
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);

    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const order = sortType.sort.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sort.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://6560a5c383aba11d99d144d2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [activeCategory, sortType, searchValue, currentPage]);


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
          <div className="header_input">
            <img className="search_icon" src={searchIcon} alt="" />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Поиск пицц ..."
            />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="close_icon"
                src={closeIcon}
                alt=""
              />
            )}
          </div>
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
          <Category activeCategory={activeCategory} onClickCategory={(i) => setActiveCategory(i)} />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        </nav>
        <Routes>
          <Route path="/" element={<Main items={items} isLoading={isLoading} setCurrentPage={setCurrentPage}/>} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
