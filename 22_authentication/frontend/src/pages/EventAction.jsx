import { json, redirect } from 'react-router-dom';

export const action = async ({ request, params }) => {
  // console.log(request);

  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  // let url = 'http://localhost:8080/eventsINCORRECT'; //HACK: testing Errors
  let url = 'http://localhost:8080/events';

  if (method === 'PATCH') {
    const eventId = params.eventId;
    url += `/${eventId}`;
  }

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
      return response;
    }

    // if (!response.ok) {
    //   throw json(
    //     { message: `Could not ${method === 'PATCH' ? 'edit' : 'save'} event.` },
    //     { status: 500 }
    //   );
    // }

    return redirect('/events');
  } catch (error) {
    // console.error( error);
    throw json(
      { message: `Could not ${method === 'PATCH' ? 'edit' : 'save'} event.` },
      { status: 500 },
      { initialError: error }
    );
  }
};
