const url = `${
  navigator.userAgent.indexOf('Win') !== -1
    ? 'http://localhost:3000/'
    : 'http://192.168.1.30:3000/'
}`;

export const fetchAvailablePlaces = async () => {
  // const response = await fetch(`${url}placesXXX`); //ERROR: simulating an error
  const response = await fetch(`${url}places`);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }
  return resData.places;
};
