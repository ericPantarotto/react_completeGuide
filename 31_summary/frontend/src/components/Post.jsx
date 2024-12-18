import PropTypes from 'prop-types';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = (props) => {
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </Link>
    </li>
  );
};
Post.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
