import PropTypes from 'prop-types';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </div>
  );
};
Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
