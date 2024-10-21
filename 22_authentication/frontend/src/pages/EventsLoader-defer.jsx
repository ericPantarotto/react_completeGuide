import { defer, json } from 'react-router-dom';

export const loadEvents = async () => {
  // const response = await fetch('http://localhost:8080/eventsINCORRECT'); //HACK: testing Errors
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    //  return response; //ERROR: cannot be used with defer()
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
