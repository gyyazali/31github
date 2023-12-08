import React, { useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Link } from 'react-router-dom';
import { setCategoryId, setFilters } from './redux/slices/filterSlice';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import debounce from 'lodash.debounce';
import Category from './components/Category/Category';
import Sort, { list } from './components/Sort/Sort';
import shopCar from './assets/shop-car.png';
import pizzaIcon from './assets/pizzaIcon.png';
import closeIcon from './assets/close.png';
import searchIcon from './assets/search.png';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Basket from './pages/Basket/Basket';

export function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState('');
  const isMounted = useRef(false);
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  //Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  // Если был первый рендер, то проверяем URL - параметры и сохраняем в redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
    }
  }, []);

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://6560a5c383aba11d99d144d2.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const inputRef = React.useRef();

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
              ref={inputRef}
              value={value}
              onChange={onChangeInput}
              type="text"
              placeholder="Поиск пицц ..."
            />
            {value && <img onClick={onClickClear} className="close_icon" src={closeIcon} alt="" />}
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
          <Sort />
        </nav>
        <Routes>
          <Route path="/" element={<Main items={items} isLoading={isLoading} />} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
