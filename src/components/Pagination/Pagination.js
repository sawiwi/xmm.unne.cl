// import React, { useState, useContext } from 'react';
// // import { PropertiesContext } from '../../context/properties/PropertiesContext';
// import PropertyCard from '../PageSections/Properties/components/PropertyCard';

// const Pagination = ({ isList, isGrid }) => {
//   // const { contextData } = useContext(PropertiesContext);
//   // const [
//   //   statusId,
//   //   companyId,
//   //   totalItems,
//   //   setTotalItems,
//   //   itemsPerPage,
//   //   setItemsPerPage,
//   //   properties,
//   //   setProperties,
//   // ] = contextData;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showAllPages, setShowAllPages] = useState(false);

//   const propertiesPerPage = itemsPerPage; // 10
//   const totalPages = Math.ceil(properties.length / propertiesPerPage);

//   const startIndex = (currentPage - 1) * propertiesPerPage;
//   const endIndex = startIndex + propertiesPerPage;

//   const currentProperties = properties.slice(startIndex, endIndex);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const getPageNumbers = () => {
//     const pageNumbers =
//       totalPages <= 5 || showAllPages
//         ? Array.from({ length: totalPages }, (_, i) => i + 1)
//         : [
//             1,
//             currentPage <= 3 || currentPage >= totalPages - 2 ? '...' : null,
//             ...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i).filter(
//               (pageNumber) => pageNumber > 1 && pageNumber < totalPages
//             ),
//             currentPage >= totalPages - 2 ? '...' : null,
//             totalPages,
//           ].filter(Boolean);

//     return pageNumbers;
//   };

//   return (
//     <React.Fragment>
//       <div className="relative mb-48">
//         <ul
//           className={`${
//             isGrid
//               ? 'grid grid-cols-1 sm:grid-cols-3 gap-4 p-2'
//               : 'flex flex-col gap-4 p-2'
//           }`}
//         >
//           {currentProperties?.reverse()?.map((property) => (
//             <PropertyCard key={property?.id} data={property} isList={isList} />
//           ))}
//         </ul>
//       </div>

//       <div className="absolute bottom-0 flex justify-center items-center border border-gray-200 w-[100%] p-5">
//         <button
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//           className={`${
//             currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200'
//           } p-3 border rounded-l-lg`}
//         >
//           Volver
//         </button>
//         {getPageNumbers().map((pageNumber) => (
//           <button
//             key={pageNumber}
//             onClick={() => handlePageChange(pageNumber)}
//             disabled={currentPage === pageNumber || pageNumber === '...'}
//             className={`${
//               currentPage === pageNumber || pageNumber === '...'
//                 ? 'bg-orange-500 text-white'
//                 : 'bg-white text-black'
//             } p-3 border`}
//           >
//             {pageNumber}
//           </button>
//         ))}
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           className={`${
//             currentPage === totalPages
//               ? 'bg-gray-100 text-gray-400'
//               : 'bg-gray-200'
//           } p-3 border rounded-r-lg`}
//         >
//           Siguiente
//         </button>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Pagination;
