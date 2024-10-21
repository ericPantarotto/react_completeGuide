// import { useLoaderData } from 'react-router-dom';
import { useRouteLoaderData } from 'react-router-dom';

import EventItem from '../components/EventItem';

function EventDetailPage() {
  // const data = useLoaderData();
  const data = useRouteLoaderData('event-detail');

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

// import { useParams } from 'react-router-dom';

// function EventDetailPage() {
//   const params = useParams();

//   return (
//     <>
//       <h1>EventDetailPage</h1>
//       <p>Event ID: {params.eventId}</p>
//     </>
//   );
// }

// export default EventDetailPage;
