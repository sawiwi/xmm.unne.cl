import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SelectsContext } from './SelectsContext';
import SelectsServices from '../../services/SelectsServices';

const SelectsProvider = ({ children }) => {
  const [operationType, setOperationType] = useState([]);
  const [typeOfProperty, setTypeOfProperty] = useState([]);
  const [installmentType, setInstallmentType] = useState([]);
  const [regions, setRegions] = useState([]);
  const [communes, setCommunes] = useState([]);
  const [stateId, setStateId] = useState('');
  const [selectedSelects, setSelectedSelects] = useState({
    operationType: '',
    typeOfProperty: '',
    installmentType: '',
    region: '',
    commune: '',
    surfaceM2: '',
    minPrice: 0,
    maxPrice: 0,
    bedrooms: '',
    bathrooms: '',
    coveredParkingLots: '',
  });
  const { pathname } = useLocation();

  const getSelects = async () => {
    const { data } = await SelectsServices.getSelects();
    const filtredOperationTypeSelects = data?.operationType.filter(
      (type) => type.name !== 'arriendo' && type.name !== 'arriendo_temporal'
    );
    const filtredTypeOfPropertiesSelects = data?.typeOfProperty.filter(
      (type) =>
        type.name !== 'casa' &&
        type.name !== 'parcela' &&
        type.name !== 'industrial' &&
        type.name !== 'agricola' &&
        type.name !== 'local' &&
        type.name !== 'oficina' &&
        type.name !== 'sitio' &&
        type.name !== 'terreno' &&
        type.name !== 'agrícola' &&
        type.name !== 'Terreno En Construccion'
    );
    setOperationType(
      pathname === '/soy-inversionista/unidades-nuevas'
        ? filtredOperationTypeSelects
        : pathname === '/propiedades'
        ? data?.operationType
        : data?.operationType
    );
    setTypeOfProperty(
      pathname === '/soy-inversionista/unidades-nuevas'
        ? filtredTypeOfPropertiesSelects
        : pathname === '/propiedades'
        ? data?.typeOfProperty
        : data?.typeOfProperty
    );
    setRegions(data?.regions);
    setInstallmentType(data?.installment_type);
  };

  const getCommunesByStateId = async (id) => {
    const { data } = await SelectsServices.getCommunesByStateId(id);
    setCommunes(data);
  };

  useEffect(() => {
    getSelects();
    getCommunesByStateId(stateId);
  }, [stateId, pathname]);

  return (
    <SelectsContext.Provider
      value={{
        contextDataSelects: {
          regions,
          communes,
          stateId,
          setStateId,
          operationType,
          typeOfProperty,
          installmentType,
          selectedSelects,
          setSelectedSelects,
        },
      }}
    >
      {children}
    </SelectsContext.Provider>
  );
};

export default SelectsProvider;
