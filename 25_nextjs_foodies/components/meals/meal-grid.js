import PropTypes from 'prop-types';
import classes from './meal-grid.module.css';
import MealItem from './meal-item';

const MealsGrid = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
MealsGrid.propTypes = {
  meals: PropTypes.array,
};

export default MealsGrid;
