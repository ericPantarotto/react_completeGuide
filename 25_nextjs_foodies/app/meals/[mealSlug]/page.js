import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import classes from './page.module.css';

const MealDetailsPage = async ({ params }) => {
  const slug = (await params).mealSlug;
  // console.info(slug);
  const meal = await getMeal(slug);
  meal.instructions = meal.instructions.replace(/\n/g, '<br>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};
MealDetailsPage.propTypes = {
  params: Promise,
};
export default MealDetailsPage;
