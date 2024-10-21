import { json } from 'react-router-dom';

/**
 * @param {Request} request
 */
export async function loader({ request, params }) {
  console.info(request.url);

  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
