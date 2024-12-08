import PropTypes from 'prop-types';

const Post = (props) => {
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
};
Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
