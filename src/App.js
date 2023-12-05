import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { setCategoryId } from './redux/slices/filterSlice';
export const AppContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  console.log('redux state', categoryId);
  const [items, setItems] = React.useState([]);
  // const [activeCategory, setActiveCategory] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярное',
    sort: 'rating',
  });
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onClickCategory = (id) => {
    console.log(id);
  };
  console.log('newState', categoryId);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
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
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div className="App">
      <AppContext.Provider value={{ sortType, setSortType, setSearchValue, categoryId }}>
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
            <Category onClickCategory={onClickCategory} />
            <Sort onChangeSort={(i) => setSortType(i)} />
          </nav>
          <Routes>
            <Route
              path="/"
              element={<Main items={items} isLoading={isLoading} setCurrentPage={setCurrentPage} />}
            />
            <Route path="/Basket" element={<Basket />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
