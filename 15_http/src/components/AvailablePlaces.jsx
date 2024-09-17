import { useEffect, useState } from 'react';
import { sortPlacesByDistance } from '../loc.js';
import ErrorPage from './Error.jsx';
import Places from './Places.jsx';
const url = `${
  navigator.userAgent.indexOf('Win') !== -1
    ? 'http://localhost:3000/'
    : 'http://192.168.1.30:3000/'
}`;

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  // useEffect(() => {
  //   fetch(`${url}places`) // fetch('http://localhost:3000/places')
  //     .then((res) => res.json())
  //     .then((resData) => setAvailablePlaces(resData.places));
  // }, []);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        // const response = await fetch(`${url}placesXXX`); //ERROR: simulating an error
        const response = await fetch(`${url}places`);
        const resData = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resData.places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        // setError(error);
        setError({
          message:
            error.message || 'Could not fetch places, please try again later.',
        });
        setIsFetching(false);
      }
      // } finally {
      //   setIsFetching(false);
      // }
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorPage title='an error occurred' message={error.message} />;
  }
  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching place data...'
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
