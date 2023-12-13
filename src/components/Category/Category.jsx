import React from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filterSlice';

const Category = () => {
  const dispatch = useDispatch();
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const categoryId = useSelector((state) => state.filter.categoryId);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
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
