import React from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryId, setCategoryId } from '../../redux/slices/filterSlice';

const Category: React.FC = () => {
  const dispatch = useDispatch();
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const categoryId = useSelector(selectCategoryId);

  const onChageCategory = (index: number) => {
    dispatch(setCategoryId(index));
  };

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
};
export default Category;
