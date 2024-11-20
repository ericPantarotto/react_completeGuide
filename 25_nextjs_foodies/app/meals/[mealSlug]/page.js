import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import classes from './page.module.css';

export async function generateMetadata({ params }) {
  const slug = (await params).mealSlug;
  const meal = await getMeal(slug);

  if (!meal) notFound();

  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealDetailsPage = async ({ params }) => {
  const slug = (await params).mealSlug;
  // console.info(slug);
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br>');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt='a nice foodie image' fill />
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
