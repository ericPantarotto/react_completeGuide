export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
  } else {
    // const resData = await response.json();
    // return resData.events;

    // const res = new Response('any data', { status: 201 })
    return response;
  }
};
