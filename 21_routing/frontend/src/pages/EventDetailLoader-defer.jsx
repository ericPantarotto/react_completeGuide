import { defer, json } from 'react-router-dom';
import { loadEvents } from './EventsLoader-defer';

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

export const loader = async ({ params }) => {
  const id = params.eventId;

  return defer({
    // event: loadEvent(id),
    event: await loadEvent(id), //INFO: waiting for this loader to fetch data before loading the Event detail page
    events: loadEvents(),
  });
};
