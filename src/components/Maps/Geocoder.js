import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useValue } from '../../context/ContextProvider';
import { useControl } from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = ({ formData, setFormData }) => {
  const { dispatch } = useValue();
  const ctrl = new MapboxGeocoder({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    marker: true,
    collapsed: false,
  });

  useControl(() => ctrl);

  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates;

    dispatch({
      type: 'UPDATE_LOCATION',
      payload: {
        lng: coords[0],
        lat: coords[1],
        text: e.result.place_name || e.result.text,
      },
    });

    setFormData({
      ...formData,
      propertyData: {
        ...formData.propertyData,
        address: e.result.place_name || e.result.text,
      },
    });
  });
  return null;
};

export default Geocoder;
