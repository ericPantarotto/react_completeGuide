
import useFetch from '../hooks/useFetch.js';
import { fetchAvailablePlaces } from '../http.js';
// import { sortPlacesByDistance } from '../loc.js';
import Error from './Error.jsx';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const {
    isFetching,
    fetchedData: availablePlaces,
    // setFetchedData: setAvailablePlaces,
    error,
  } = useFetch(
    fetchAvailablePlaces,
    [],
    'Could not fetch places, please try again later.'
  );

  if (error) {
    return <Error title='An error occurred!' message={error.message} />;
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

  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const sortedPlaces = sortPlacesByDistance(
  //           places,
  //           position.coords.latitude,
  //           position.coords.longitude
  //         );
  //         setAvailablePlaces(sortedPlaces);
  //         setIsFetching(false);
  //       });