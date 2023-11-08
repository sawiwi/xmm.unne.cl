import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const LocationSearch = ({ lng, lat }) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '400px',
    latitude: lat,
    longitude: lng,
    zoom: 12,
  });

  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // const handleSearch = async () => {
  //   const response = await fetch(
  //     `https://api.mapbox.com/geocoding/v5/mapbox.places/${
  //       viewport.longitude
  //     },${
  //       viewport.latitude
  //     }.json?access_token=${'pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ'}&types=poi&limit=10`
  //   );
  //   const data = await response.json();

  //   console.log(data);

  //   const relevantLocations = data.features.filter((feature) =>
  //     ['transport, bus, autobus'].includes(feature.properties.category)
  //   );
  //   setLocations(relevantLocations);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${
          viewport.longitude
        },${
          viewport.latitude
        }.json?access_token=${'pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ'}&types=poi&limit=10`
      );
      const data = await response.json();

      const relevantLocations = data.features.filter(
        (feature) => feature.properties.category === 'subway'
      );
      setLocations(relevantLocations);
    };

    fetchData();
  }, [viewport, lat, lng]);

  // console.log(locations);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={(newViewport) => setViewport(newViewport)}
        mapboxApiAccessToken="pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ"
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            latitude={location.center[1]}
            longitude={location.center[0]}
          >
            <button
              className="marker-btn"
              onClick={() => setSelectedLocation(location)}
            >
              <img src="/marker.png" alt="Marker" />
            </button>
          </Marker>
        ))}
        {selectedLocation && (
          <Popup
            latitude={selectedLocation.center[1]}
            longitude={selectedLocation.center[0]}
            onClose={() => setSelectedLocation(null)}
          >
            <div>
              <h3>{selectedLocation.text}</h3>
              <p>{selectedLocation.properties.category}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default LocationSearch;
