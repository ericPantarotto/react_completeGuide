import PropTypes, { bool } from 'prop-types';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

import classes from './PostsList.module.css';

const PostList = ({ isPosting, onStopPosting }) => (
  <>
    {isPosting && (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} />
      </Modal>
    )}

    <ul className={classes.posts}>
      <Post author='Manuel' body='Check out the full course!' />
    </ul>
  </>
);

PostList.propTypes = {
  onStopPosting: PropTypes.func,
  isPosting: bool,
};

export default PostList;

// let modalContent;

// if (modalIsVisible) {
//   modalContent = (
// <Modal onClose={hideModalHandler}>
//   <NewPost
//     onBodyChange={bodyChangeHandler}
//     onAuthorChange={authorChangeHandler}
//   />
// </Modal>
//   );
// }
