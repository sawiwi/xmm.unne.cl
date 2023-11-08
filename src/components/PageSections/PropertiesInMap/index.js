import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';
import { PropertiesContext } from '../../../context/properties/PropertiesContext';
import Section from '../../Section/Section';
import MarkerIcon from '../../../assets/img/map/marker.png';
import { parseToCLPCurrency, parseToDecimal } from '../../../utils';

const PropertiesInMapComponent = () => {
  const { contextData } = useContext(PropertiesContext);
  const { propertiesInMap } = contextData;
  const [selectedProperty, setSelectedProperty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalItems, setTotalItems] = useState('');

  useEffect(() => {
    if (propertiesInMap.length > 0) {
      setIsLoading(false);
    }
  }, [propertiesInMap, isLoading]);

  return (
    <Section>
      <div className="container">
        <div className="mb-10">
          <h1 className="text-xl">Localización de Propiedades </h1>{' '}
          <p
            style={{
              fontSize: '1rem',
              fontWeight: '300',
              color: '#616161',
            }}
          >
            Descubre propiedades es una forma fácil y eficiente de encontrar y
            explorar propiedades en una ubicación específica
          </p>
          <p className="text-primary text-sm">Propiedades activas en mapa</p>
        </div>

        <div>
          <Map
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            initialViewState={{
              pitch: 45,
              width: 400,
              height: 400,
              attributionControl: false,
              longitude: -70.64827,
              latitude: -33.45694,
              zoom: 10,
              style: {
                width: 'auto',
                height: '80vh',
                borderRadius: '15px',
              },
            }}
            mapStyle={'mapbox://styles/mapbox/streets-v12'}
            style={{
              width: 'auto',
              height: '80vh',
              borderRadius: '15px',
            }}
          >
            {propertiesInMap?.map((property) => {
              let longitude =
                Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) ||
                -70.64827;
              let latitude =
                Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) ||
                -33.45694;

              return (
                <Marker
                  key={property?.id}
                  longitude={longitude}
                  latitude={latitude}
                  offsetLeft={-20}
                  offsetTop={-10}
                  style={{
                    cursor: 'pointer',
                    zIndex: 0,
                    margin: '0',
                    padding: '0',
                  }}
                >
                  <div>
                    <img
                      src={MarkerIcon}
                      alt="marker"
                      height={50}
                      width={50}
                      onClick={() =>
                        setSelectedProperty((prev) =>
                          prev && prev.id === property.id ? false : property
                        )
                      }
                    />

                    {selectedProperty &&
                      selectedProperty.id === property.id && (
                        <Popup
                          longitude={longitude}
                          latitude={latitude}
                          onClose={() => setSelectedProperty(true)}
                          anchor="bottom"
                          closeButton={false}
                          closeOnClick={false}
                          dynamicPosition={true}
                          focusAfterOpen={false}
                          offsetTop={-10}
                          offsetLeft={-10}
                          closeOnMove={false}
                          style={{
                            zIndex: 100,
                            cursor: 'pointer',
                          }}
                        >
                          <Link
                            to={`/propiedades/${
                              property?.id
                            }?statusId=${1}&companyId=${15}`}
                          >
                            <div className="max-w-sm bg-white">
                              <img
                                className="rounded-t-lg"
                                src={`https://aulen.partnersadvisers.info/properties/secure-imgs/Imagenes//${property?.id}//1.jpg`}
                                alt={`small-card-${property?.title}`}
                                style={{
                                  height: '30px',
                                }}
                              />

                              <div>
                                <span className="bg-primary text-white px-2 py-.5 mt-1 rounded-full">
                                  {property?.types?.[0] ?? 'Propiedad'}
                                </span>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                  {property?.address ??
                                    'Dirección no registrada'}{' '}
                                  ,{' '}
                                  {property?.commune ?? 'Comuna no registrada'}{' '}
                                  , {property?.city ?? 'Ciudad no registrada'}
                                </p>

                                {property?.currency?.name === 'UF' &&
                                  property?.currency?.isoCode === 'UF' && (
                                    <p className="flex justify-end items-center mb-3 font-normal bg-slate-50 border-l-2 border-primary-400 p-1 rounded-sm text-primary">
                                      <span className="mr-1">Desde:</span>
                                      {parseToDecimal(property?.price ?? 0)} UF
                                    </p>
                                  )}

                                {property?.currency?.name === 'Peso Chileno' &&
                                  property?.currency?.isoCode === 'CLP' && (
                                    <p className="flex justify-end items-center mb-3 font-normal bg-slate-50 border-l-2 border-primary-400 p-1 rounded-sm text-primary">
                                      <span className="mr-1">Desde:</span>
                                      {parseToCLPCurrency(
                                        property?.price ?? 0
                                      )}{' '}
                                      CLP
                                    </p>
                                  )}

                                <div>
                                  <span>
                                    {`${property?.surface_m2}`} m<sup>2</sup>{' '}
                                    utiles -{property?.bedrooms} dorms.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Popup>
                      )}
                  </div>
                </Marker>
              );
            })}
            <NavigationControl />
            <GeolocateControl />
            <FullscreenControl />
          </Map>
        </div>
      </div>
    </Section>
  );
};

export default PropertiesInMapComponent;
