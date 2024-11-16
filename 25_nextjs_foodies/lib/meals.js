import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //HACK: simulating a db error, to test our error.js page
  // throw new Error('Loading meals failed, error message from ./lib/meals.js');
  return db.prepare('SELECT * FROM meals;').all();
};

const getMeal = async (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};

const saveMeal = (meal) => {
  meal.slug = slugify(meal.title, { lower: true }); //NOTE: adding this property
  meal.instructions = xss(meal.instructions); //NOTE: overwriting this property
};

export default getMeals;
export { getMeal, saveMeal };
