// import PropTypes, { bool } from 'prop-types';
// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import classes from './PostsList.module.css';

const PostList = () => {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
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

  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch('http://localhost:8080/posts');
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData) {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  // return (
  //   <>
  //     {!isFetching && posts.length > 0 && (
  //       <ul className={classes.posts}>
  //         {posts.map((post) => (
  //           <Post key={post.body} author={post.author} body={post.body} />
  //         ))}
  //       </ul>
  //     )}
  //     {!isFetching && posts.length === 0 && (
  //       <div style={{ textAlign: 'center', color: 'white' }}>
  //         <h2>There are no posts yet.</h2>
  //         <p>Start adding some!</p>
  //       </div>
  //     )}
  //     {isFetching && (
  //       <div style={{ textAlign: 'center', color: 'white' }}>
  //         <p>Loading posts...</p>
  //       </div>
  //     )}
  //   </>
  // );
};

// PostList.propTypes = {
//   onStopPosting: PropTypes.func,
//   isPosting: bool,
// };

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
