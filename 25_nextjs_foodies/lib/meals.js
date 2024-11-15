import sql from 'better-sqlite3';

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

export default getMeals;
export { getMeal };
