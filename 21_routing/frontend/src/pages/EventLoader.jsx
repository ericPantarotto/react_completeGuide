export const loader = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
  } else {
      const resData = await response.json();
      console.log(resData.events);
      
    return resData.events;
  }
};
