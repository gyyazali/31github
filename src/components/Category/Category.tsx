import React from 'react';
import '../../App.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryId, setCategoryId } from '../../redux/slices/filterSlice';


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Category: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  
  const categoryId = useSelector(selectCategoryId);

  const onChageCategory = React.useCallback((index: number) => {
    dispatch(setCategoryId(index));
  },[dispatch]);

  return (
    <div className="category">
      {categories.map((value, i) => (
        <p
          key={i}
          onClick={() => onChageCategory(i)}
          className={`${categoryId === i ? 'category_name_active' : ''} category_name`}
        >
          {value}
        </p>
      ))}
    </div>
  );
})
export default Category;
