import '../../App.css';
import React from 'react';
// import qs from 'qs';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import * as math from "../../utils/matn"
import { Skeleton, PizzaCard, Pagination, Category, Sort } from '../../components/importComponents';
import { useAppDispatch } from '../../redux/store';
import { selectPizzaData } from '../../redux/slices/pizza/selectors';
import { selectFilter } from '../../redux/slices/filter/selectors';
import { setCurrentPage } from '../../redux/slices/filter/slice';
import { fetchPizzas } from '../../redux/slices/pizza/asyncAction';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const isMounted = React.useRef(false);

  // import("../../utils/matn").then(math => {
  //   console.log(math.add(16, 26));
  // });

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
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        currentPage: String(currentPage),
      }),
    );
  };

  // //Если изменили параметры и был первый рендер
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     });
  //     navigate(`?${queryString}`);
  //   }

  //   if (!window.location.search) {
  //     dispatch(fetchPizzas({} as SearchPizzaParams));
  //   }

  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, currentPage]);

  // Если был первый рендер, то проверяем URL - параметры и сохраняем в redux

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
  //     const sort = sortList.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         currentPage: Number(params.currentPage),
  //         sort: sort || sortList[0],
  //       }),
  //     );
  //   }
  // }, []);

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
