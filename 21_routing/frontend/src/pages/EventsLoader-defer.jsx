import { json, defer } from 'react-router-dom';

 const loadEvents = async () => {
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
}