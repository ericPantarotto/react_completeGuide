import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  // const events = useLoaderData();

  const data = useLoaderData();
  
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
      {/* <EventsList /> */}
    </>
  );
}

export default EventsPage;
