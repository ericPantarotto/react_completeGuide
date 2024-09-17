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

export const updateUserPlaces = async (places, componentName) => {
  const errorActionLabel = componentName === 'update' ? 'update' : 'delete';
  try {
    //ERROR: simulating an error
    // const response = await fetch(`${url}user-placesXXX`, {
      const response = await fetch(`${url}user-places`, {
      method: 'PUT',
      body: JSON.stringify({ places: places }),
      headers: { 'Content-Type': 'application/json' },
    });
    const resData = await response.json();
    if (!response.ok) {
      throw new Error(`Failed to ${errorActionLabel} place`);
    }
    return resData.message;
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to ${errorActionLabel} place`);
  }
};
