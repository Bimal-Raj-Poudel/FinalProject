import React, { useEffect, useState } from 'react'
import Properties from './Properties';

export default function NearMe() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser.');
      }
    }, []);
  return (
    <div className='mt-5'>
      {/* {location ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )} */}
      <Properties/>
    </div>
  )
}
