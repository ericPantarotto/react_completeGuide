import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import EditEventPage from './pages/EditEvent';
import EventDetailPage from './pages/EventDetail';
import EventsPage from './pages/Events';
import { loader as eventsLoader } from './pages/EventLoader'
import { loader as eventDetailLoader } from './pages/EventDetailLoader';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          // {
          //   path: ':eventId',
          //   element: <EventDetailPage />,
          //   loader: eventDetailLoader,
          // },
          // { path: ':eventId/edit', element: <EditEventPage /> },
          { path: 'new', element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
