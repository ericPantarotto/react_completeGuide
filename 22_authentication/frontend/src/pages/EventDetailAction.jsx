import { json, redirect } from 'react-router-dom';
import { getAuthToken } from '../util/auth';

export async function action({ params, request }) {
  const eventId = params.eventId;
  const token = getAuthToken();

  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
}
