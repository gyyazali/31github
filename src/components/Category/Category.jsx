import React from 'react';
import '../../App.css';
import { useSelector } from 'react-redux';
const Category = ({ onClickCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const categoryId = useSelector((state) => state.filter.categoryId);
  console.log(categoryId);

  console.log(categoryId);
  return (
    <div className="category">
      {categories.map((value, i) => (
        <p
          key={i}
          onClick={() => onClickCategory(i)}
          className={`${categoryId === i ? 'category_name_active' : ''} category_name`}
        >
          {value}
        </p>
      ))}
    </div>
  );
};
export default Category;
