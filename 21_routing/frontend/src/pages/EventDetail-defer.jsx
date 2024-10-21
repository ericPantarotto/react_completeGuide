import { Suspense } from 'react';
import {
  Await,
  useLocation,
  useParams,
  useRouteLoaderData,
} from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetailPage() {
  const location = useLocation();
  console.log(location);
  const { eventId } = useParams();

  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: 'center' }}>Loading {eventId}...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: 'center' }}>Loading Events...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;
