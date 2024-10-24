import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import { action as eventAction } from './pages/EventAction';
// import EventDetailPage from './pages/EventDetail';
import EventDetailPage from './pages/EventDetail-defer';
import { action as deleteEventAction } from './pages/EventDetailAction';
// import { loader as eventDetailLoader } from './pages/EventDetailLoader';
import { loader as eventDetailLoader } from './pages/EventDetailLoader-defer';
// import { loader as eventsLoader } from './pages/EventsLoader';
import { loader as eventsLoader } from './pages/EventsLoader-defer';
// import EventsPage from './pages/Events';
import AuthenticationPage from './pages/Authentication';
import { action as authAction } from './pages/Authentication-action';
import EventsPage from './pages/Events-defer';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import { action as logoutAction } from './pages/Logout';
import NewEventPage from './pages/NewEvent';
import NewsletterPage from './pages/Newsletter';
import { action as newsletterAction } from './pages/NewsletterAction';
// import RootLayout from './pages/Root';
import RootLayout from './pages/Root-autoLogout';
// import { checkAuthLoader, tokenLoader } from './util/auth';
import { checkAuthLoader, tokenLoader } from './util/auth-jwt';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: eventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          // {
          //   path: ':eventId',
          //   element: <EventDetailPage />,
          //   loader: eventDetailLoader,
          // },
          // { path: ':eventId/edit', element: <EditEventPage /> },
          {
            path: 'new',
            element: <NewEventPage />,
            action: eventAction,
            loader: checkAuthLoader,
          },
          // { path: 'new', element: <NewEventPage />, action: newEventAction },
        ],
      },
      { path: 'auth', element: <AuthenticationPage />, action: authAction },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
