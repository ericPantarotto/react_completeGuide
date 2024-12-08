import Post from './Post';

import classes from './PostsList.module.css';

const PostList = () => {
  return (
    <ul className={classes.posts}>
      <Post author='Maximilian' body='React.js is awesome!' />
      <Post author='Manuel' body='Check out the full course!' />
    </ul>
  );
};

export default PostList;
