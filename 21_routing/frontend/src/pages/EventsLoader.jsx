import { json } from 'react-router-dom';

export const loader = async () => {
  // const response = await fetch('http://localhost:8080/eventsINCORRECT'); //HACK: testing Errors
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.' };

    // throw { message: 'Could not fetch events.' };

    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });

    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json();
    // return resData.events;

    // const res = new Response('any data', { status: 201 })
    return response;
  }
};
