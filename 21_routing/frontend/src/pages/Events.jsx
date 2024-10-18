import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  // const events = useLoaderData();
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
      {/* <EventsList /> */}
    </>
  );
}

export default EventsPage;
