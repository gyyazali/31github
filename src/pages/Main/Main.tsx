import '../../App.css';
import React from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFilter, setCurrentPage, setFilters } from '../../redux/slices/filterSlice';
import Skeleton from '../../components/Skeleton/Skeleton';
import PizzaCard from '../../components/Pizza_card/Pizza_card';
import Pagination from '../../components/Pagination/Pagination';
import Category from '../../components/Category/Category';
import Sort, { sortList } from '../../components/Sort/Sort';
import { fetchPizzas, selectPizzaData } from '../../redux/slices/pizzaSlice';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectPizzaData);
  const { currentPage, categoryId, sort, searchValue } = useSelector(selectFilter);
  const skeletons = [...new Array(4)].map((_, i) => <Skeleton key={i} />);

  const pizzas = items.map((obj: any) => <PizzaCard key={obj.id} {...obj} />);

  const getPizzas = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      // @ts-ignore
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage,
      }),
    );

    window.scrollTo(0, 0);
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

    if (!window.location.search) {
      fetchPizzas();
    }

    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  // Если был первый рендер, то проверяем URL - параметры и сохраняем в redux
  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
    }
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="container">
      <div className="pizzas">
        <nav className="nav">
          <Category />
          <Sort />
        </nav>
        <p className="pizzas_title">Все пиццы</p>
        <div className="pizza_cards_wrapper">
          {status === 'error' ? (
            <div className="error">
              <h1>Нет пицц {`(`}</h1>
              <p>Ошибка при получении пицц из бэккенда</p>
            </div>
          ) : (
            <div className="pizza_cards">{status === 'loading' ? skeletons : pizzas}</div>
          )}
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  );
};

export default Main;
