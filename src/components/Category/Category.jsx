import React from 'react';
import '../../App.css';
import { AppContext } from '../../App';

const Category = ({ onClickCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const { activeCategory } = React.useContext(AppContext);
  return (
    <div className="category">
      {categories.map((value, i) => (
        <p
          key={i}
          onClick={() => onClickCategory(i)}
          className={`${activeCategory === i ? 'category_name_active' : ''} category_name`}
        >
          {value}
        </p>
      ))}
    </div>
  );
};
export default Category;
