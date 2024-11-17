import sql from 'better-sqlite3';
import { Buffer } from 'node:buffer';
import fs from 'node:fs';
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

const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true }); //NOTE: adding this property
  meal.instructions = xss(meal.instructions); //NOTE: overwriting this property

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving Image failed!');
    }

    meal.image = `/images/${fileName}`;

    db.prepare(
      `
      INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (  
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
      `
    ).run(meal);
  });
};

export default getMeals;
export { getMeal, saveMeal };
