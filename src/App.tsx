import './App.css';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import MainLayout from './layouts/MainLayout';

const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/ './pages/NotFound/NotFound'));
const Basket = React.lazy(() => import(/* webpackChunkName: "Basket"*/ './pages/Basket/Basket'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza"*/ './pages/FullPizza/FullPizza'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Main />} />
        <Route
          path="Basket"
          element={
            <Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Basket />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
