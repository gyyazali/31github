import '../../App.css';

const Category = ({ onClickCategory, activeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
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
