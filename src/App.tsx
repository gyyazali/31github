import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import MainLayout from './layouts/MainLayout';
import Loadable from 'react-loadable';

const Basket = Loadable({
  loader: () => import(/* webpackChunkName: "Basket"*/ './pages/Basket/Basket'),
  loading: () => <div>Идет загрузка корзины...</div>,
});
const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound"*/ './pages/NotFound/NotFound'),
  loading: () => <div>Идет загрузка корзины...</div>,
});
const FullPizza = Loadable({
  loader: () => import(/* webpackChunkName: "FullPizza"*/ './pages/FullPizza/FullPizza'),
  loading: () => <div>Идет загрузка корзины...</div>,
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Main />} />
        <Route path="Basket" element={<Basket />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
