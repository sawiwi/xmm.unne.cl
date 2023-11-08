import React, { useContext } from 'react';
import { PropertiesContext } from '../../../../context/properties/PropertiesContext';
import SimilarPropertyCard from './SimilarPropertyCard';
import styles from '../../../../styles/components/Scrollbar/Scrollbar.module.css';

const SimilarProyects = ({ property }) => {
  const { contextData } = useContext(PropertiesContext);
  const { allSimilarProperties } = contextData;

  const similarProperties = allSimilarProperties?.filter(
    (prop) =>
      prop?.types[0] === property?.types[0] &&
      prop?.operation === property?.operation &&
      prop?.surface_m2 === property?.surface_m2 &&
      prop?.bedrooms === property?.bedrooms &&
      prop?.bathrooms === property?.bathrooms
  );

  const renderedSimiliarProperties = similarProperties?.map((property) => (
    <SimilarPropertyCard key={property?.id} property={property} />
  ));

  return (
    <div
      className={`${styles.scrollbarY} flex flex-col overflow-y-scroll max-h-[600px]`}
    >
      <div className="p-2 my-2 border-b">
        <h2>Proyectos similares</h2>
      </div>

      {similarProperties?.length > 0 ? (
        renderedSimiliarProperties
      ) : (
        <p className="p-2">Propiedades no encontradas</p>
      )}
    </div>
  );
};

export default SimilarProyects;
