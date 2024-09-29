import useHttp from '../hooks/useHttp';
import Error from './Error';
import MealItem from './MealItem';

const requestConfig = { method: 'GET' };

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);
  //  } = useHttp('http://localhost:3000/mealsXXX', requestConfig, []); // ERROR:

  // if (!data) {
  if (isLoading) {
    return <p className='center'>Fetching meals...</p>;
  }

  if (error) {
    return <Error title='Failed to fetch meals' message={error} />;
  }

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
