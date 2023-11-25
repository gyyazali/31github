import React from 'react';
import css from './notFound.module.css';
import '../../App.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={css.content}>
      <span className={css.title}>Нет такой страницы :( </span>
      <Link className="link" to="/">
        <button className={css.btnToMain}>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default NotFound;
