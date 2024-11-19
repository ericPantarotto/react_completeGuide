import Image from 'next/image';
import Link from 'next/link';

import PropTypes from 'prop-types';
import classes from './meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={`http://192.168.1.30:80/images/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

MealItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  summary: PropTypes.string,
  creator: PropTypes.string,
};
