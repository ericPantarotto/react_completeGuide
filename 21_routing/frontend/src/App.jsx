import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage from './pages/EventDetail';
import { loader as eventDetailLoader } from './pages/EventDetailLoader';
import { loader as eventsLoader } from './pages/EventLoader';
import EventsPage from './pages/Events';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import { action as eventAction } from './pages/EventAction';
import { action as deleteEventAction } from './pages/EventDetailAction';
import RootLayout from './pages/Root';

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
                action: deleteEventAction,
              },
              { path: 'edit', element: <EditEventPage />, action: eventAction },
            ],
          },
          // {
          //   path: ':eventId',
          //   element: <EventDetailPage />,
          //   loader: eventDetailLoader,
          // },
          // { path: ':eventId/edit', element: <EditEventPage /> },
          { path: 'new', element: <NewEventPage />, action: eventAction },
          // { path: 'new', element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
