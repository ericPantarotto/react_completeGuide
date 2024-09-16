import { useEffect, useState } from 'react';
import Places from './Places.jsx';

const url = `${
  navigator.userAgent.indexOf('Win') !== -1
    ? 'http://localhost:3000/'
    : 'http://192.168.1.30:3000/'
}`;

export default function AvailablePlaces({ onSelectPlace }) {
  
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:3000/places')
    fetch(`${url}places`)
      .then((res) => res.json())
      .then((resData) => setAvailablePlaces(resData.places));
  }, []);

  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
