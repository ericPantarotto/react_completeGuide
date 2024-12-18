import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { action as newPostAction } from './routes/NewPost-action.js';
import NewPost from './routes/NewPost.jsx';
import { loader as postsLoader } from './routes/Posts-loader.js';
import Posts from './routes/Posts.jsx';
import RootLayout from './routes/RootLayout';
import PostDetails from './routes/PostDetails';
import { loader as postDetailsLoader } from './routes/PostDetails-loader.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          {
            path: '/:postId',
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
