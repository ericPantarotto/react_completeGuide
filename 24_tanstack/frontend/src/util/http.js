export const fetchEvents = async (searchTerm) => {
   console.log(searchTerm);
   let url = 'http://localhost:3000/events';

   if (searchTerm) {
     url += '?search=' + searchTerm;
   }

  const response = await fetch(url);

  // NOTE: response status 400/500
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
};
