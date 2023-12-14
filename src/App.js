import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import Basket from './pages/Basket/Basket';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
