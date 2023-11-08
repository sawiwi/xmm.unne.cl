// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Map, {
//   Marker,
//   NavigationControl,
//   GeolocateControl,
//   FullscreenControl,
//   Popup,
// } from 'react-map-gl';
// import CardMap from './CardMap';
// import { iconsList } from '../Icons';

// const ReactMap = ({ longitudeProp, latitudeProp, property, props }) => {
//   const [showPopup, setShowPopup] = useState(false);
//   const { FaMapMarkerAlt } = iconsList;

//   const [viewport, setViewport] = useState({
//     width: '100%',
//     height: '100%',
//     latitude: latitudeProp,
//     longitude: longitudeProp,
//   });

//   const handleViewportChange = (newViewport) => {
//     setViewport(newViewport);
//   };

//   const handleMarkerDrag = (event) => {
//     setViewport({
//       ...viewport,
//       latitude: latitudeProp,
//       longitude: longitudeProp,
//     });
//   };

//   useEffect(() => {
//     setViewport((prevViewport) => ({
//       ...prevViewport,
//       latitude: latitudeProp,
//       longitude: longitudeProp,
//       zoom: 15,
//     }));
//   }, []);

//   return (
//     <div className="container my-24">
//       <div>
//         <h3>
//           <Link
//             to={`/propiedades/propiedades-en-mapa`}
//             className="flex w-full lg:w-2/6 xl:w-1/6 uppercase items-center justify-center rounded-lg py-2 text-lg font-medium text-center text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300"
//           >
//             <FaMapMarkerAlt className="mr-2" /> Ver mapa
//           </Link>
//         </h3>

//         <h4 className="flex ml-2 xl:ml-5 items-center my-5 text-gray-600">
//           <span>
//             <FaMapMarkerAlt className="mr-2" />
//           </span>
//           Ubicación: {property?.address || 'Dirección no registrada'} ,
//           {property?.commune || 'Comuna no registrada'},{' '}
//           {property?.city || 'Ciudad no registrada'}
//         </h4>

//         <Link to="/" className="ml-2 xl:ml-5 text-blue-500 text-sm">
//           Ver información de la zona
//         </Link>
//       </div>

//       <Map
//         mapboxAccessToken={
//           'pk.eyJ1Ijoic2VyZ2lvdmVyYWhlcm5hbmRlemJpZGF0YSIsImEiOiJjbDMwZHc4cmswMDdqM2NydmIzYWF0cGl4In0.hsYQFPebleAB4j6mRckMzQ'
//         }
//         initialViewState={{
//           pitch: 45,
//           width: 400,
//           height: 900,
//           attributionControl: true,
//         }}
//         {...viewport}
//         onViewportChange={handleViewportChange}
//         interactive={true}
//         dragPan={true}
//         dragRotate={false}
//         scrollZoom={true}
//         touchZoom={true}
//         doubleClickZoom={true}
//         mapStyle={'mapbox://styles/mapbox/streets-v12'}
//         style={{
//           margin: '1.5rem 0rem',
//           width: 'auto',
//           height: '450px',
//         }}
//       >
//         <Marker
//           latitude={latitudeProp}
//           longitude={longitudeProp}
//           draggable={true}
//           onDragEnd={handleMarkerDrag}
//           onClick={() => setShowPopup(!showPopup)}
//         >
//           {showPopup && (
//             <Popup
//               longitude={longitudeProp}
//               latitude={latitudeProp}
//               onClose={() => setShowPopup(false)}
//               anchor="bottom"
//               closeButton={false}
//               closeOnClick={false}
//               dynamicPosition={true}
//               focusAfterOpen={false}
//               offsetTop={-10}
//               offsetLeft={-10}
//               closeOnMove={false}
//               style={{
//                 zIndex: 100,
//                 cursor: 'pointer',
//               }}
//             >
//               <CardMap property={property} />
//             </Popup>
//           )}
//         </Marker>

//         <NavigationControl />
//         <GeolocateControl />
//         <FullscreenControl />
//       </Map>
//     </div>
//   );
// };

// export default ReactMap;
