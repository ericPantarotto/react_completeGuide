import PropTypes, { bool } from 'prop-types';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

import classes from './PostsList.module.css';

const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

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
