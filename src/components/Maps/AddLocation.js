import React, { useRef, useEffect } from 'react';
import ReactMapGl, {
  Marker,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import Geocoder from './Geocoder';
import { useValue } from '../../context/ContextProvider';
import 'mapbox-gl/dist/mapbox-gl.css';

const AddLocation = ({ formData, setFormData }) => {
  const { state, dispatch } = useValue();
  const { location } = state;
  const mapRef = useRef();


  useEffect(() => {
    if (!location.lng && !location.lat) {
      fetch('https://ipapi.co/json/')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          mapRef?.current?.flyTo({
            center: [data.longitude, data.latitude],
          });
          dispatch({
            type: 'UPDATE_LOCATION',
            payload: {
              lng: data.longitude,
              lat: data.latitude,
            },
          });
        });
    }
  }, []);

  return (
    <div className="container h-full relative">
      <ReactMapGl
        ref={mapRef}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: location.lng,
          latitude: location.lat,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker
          longitude={location.lng}
          latitude={location.lat}
          draggable
          onDragEnd={(ev) =>
            dispatch({
              type: 'UPDATE_LOCATION',
              payload: {
                lng: ev.lngLat.lng,
                lat: ev.lngLat.lat,
              },
            })
          }
        />

        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(ev) =>
            dispatch({
              type: 'UPDATE_LOCATION',
              payload: {
                lng: ev.coords.longitude,
                lat: ev.coords.latitude,
              },
            })
          }
        />
        <Geocoder formData={formData} setFormData={setFormData} />
      </ReactMapGl>
    </div>
  );
};

export default AddLocation;
