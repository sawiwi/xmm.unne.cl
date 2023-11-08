import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../api';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import { SelectsContext } from '../../context/selects/SelectsContext';
import {
  bedroomsOptions,
  bathroomsOptions,
  coveredParkingLotsOptions,
} from '../../constants/consts/selects';
import { company, paginationTopLimit } from '../../constants/consts/company';
import Button from '../Button/Button';

const AdvancedSearch = ({ setProperties }) => {
  const { contextData } = useContext(PropertiesContext);
  const { contextDataSelects } = useContext(SelectsContext);
  const { isLoading, setIsLoading, setNotFoundMsg } = contextData;
  const {
    regions,
    communes,
    operationType,
    typeOfProperty,
    installmentType,
    setStateId,
    selectedSelects,
    setSelectedSelects,
  } = contextDataSelects;
  const { pathname } = useLocation();

  /** Handle Inputs Form */
  const onOperationTypeChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      operationType: ev.target.value,
    });

  const onTypeOfPropertyChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      typeOfProperty: ev.target.value,
    });

  const onInstallmentTypeChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      installmentType: ev.target.value,
    });

  const onRegionChange = (ev) => {
    const selectedRegionId = ev.target.value;
    const selectedRegion = regions.find(
      (region) => region.id === Number(selectedRegionId)
    );
    setStateId(selectedRegion.id);
    setSelectedSelects({
      ...selectedSelects,
      region:
        selectedRegion.name === 'Metropolitana de Santiago'
          ? 'Santiago'
          : selectedRegion.name === 'Arica y Parinacota'
          ? 'Arica'
          : selectedRegion.name,
    });
  };

  const onCommuneChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      commune: ev.target.value,
    });

  const onSurfaceM2Change = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      surfaceM2: ev.target.value,
    });

  const onMinPriceChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      minPrice: Number(ev.target.value),
    });

  const onMaxPriceChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      maxPrice: Number(ev.target.value),
    });

  const onBedroomChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      bedrooms: ev.target.value,
    });

  const onBathroomChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      bathrooms: ev.target.value,
    });

  const onCoveredParkingLotChange = (ev) =>
    setSelectedSelects({
      ...selectedSelects,
      coveredParkingLots: ev.target.value,
    });

  const resetForm = () =>
    setSelectedSelects({
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

  const scrollToTop = () => {
    window.scrollTo({
      top: pathname === '/propiedades' ? 0 : 850,
      behavior: 'smooth',
    });
  };

  /** On Form Submit */
  const handleSubmit = async (event) => {
    event.preventDefault();
    scrollToTop();

    const createUrl = {
      operationType:
        selectedSelects.operationType?.length > 0
          ? `&operationType=${selectedSelects?.operationType}`
          : '',
      typeOfProperty:
        selectedSelects.typeOfProperty?.length > 0
          ? `&typeOfProperty=${selectedSelects.typeOfProperty}`
          : '',
      installmentType:
        selectedSelects.installmentType?.length > 0
          ? `&installment_type=${selectedSelects.installmentType}`
          : '',
      region:
        selectedSelects.region?.length > 0
          ? `&region=${selectedSelects.region}`
          : '',
      commune:
        selectedSelects.commune?.length > 0
          ? `&commune=${selectedSelects.commune}`
          : '',
      surfaceM2:
        selectedSelects.surfaceM2?.length > 0
          ? `&surface_m2=${selectedSelects.surfaceM2}`
          : '',
      minPrice:
        selectedSelects.minPrice > 0
          ? `&min_price=${selectedSelects.minPrice}`
          : '',
      maxPrice:
        selectedSelects.maxPrice > 0
          ? `&max_price=${selectedSelects.maxPrice}`
          : '',
      bedrooms:
        selectedSelects.bedrooms?.length > 0
          ? `&bedrooms=${selectedSelects.bedrooms}`
          : '',
      bathrooms:
        selectedSelects.bathrooms?.length > 0
          ? `&bathrooms=${selectedSelects.bathrooms}`
          : '',
      coveredParkingLots:
        selectedSelects.coveredParkingLots?.length > 0
          ? `&covered_parking_lots=${selectedSelects.coveredParkingLots}`
          : '',
    };

    const url = `properties?page=${1}&limit=${
      paginationTopLimit.topLimit
    }&statusId=${company.statusId}&companyId=${company.companyId}${
      createUrl.operationType
    }${createUrl.typeOfProperty}${createUrl.installmentType}${
      createUrl.region
    }${createUrl.commune}${createUrl.surfaceM2}${createUrl.minPrice}${
      createUrl.maxPrice
    }${createUrl.bedrooms}${createUrl.bathrooms}${
      createUrl.coveredParkingLots
    }`;

    try {
      setNotFoundMsg('');
      setProperties([]);
      setIsLoading(true);
      const response = await api.get(url);
      setProperties(response.data.data);
      setIsLoading(false);
      setNotFoundMsg(
        response.data.data.length === 0
          ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
          : ''
      );
    } catch (error) {
      console.error(error);
    }
  };

  const hideSelects = (pathname) => {
    switch (pathname) {
      case '/propiedades':
        return 'hidden';
      case '/soy-inversionista/unidades-nuevas':
        return 'flex flex-col';
      default:
        return 'hidden';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-b p-5">
      <div className="flex flex-col mb-3">
        <label className="mb-1 text-gray-500">Tipo de Operación</label>
        <select
          value={selectedSelects?.operationType}
          onChange={onOperationTypeChange}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
        >
          <option value="">Seleccione...</option>
          {operationType.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-3">
        <label className="mb-1 text-gray-500">Tipo de Propiedad</label>
        <select
          value={selectedSelects?.typeOfProperty}
          onChange={onTypeOfPropertyChange}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
        >
          <option value="">Seleccione...</option>
          {typeOfProperty.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className={`${hideSelects(pathname)} mb-3`}>
        <label className="mb-1 text-gray-500">Tipo de Instalación</label>
        <select
          value={selectedSelects.installmentType}
          onChange={onInstallmentTypeChange}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
        >
          <option value="">Seleccione...</option>
          {installmentType.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-3">
        <label className="mb-1 text-gray-500">Región</label>
        <select
          onChange={onRegionChange}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
        >
          {regions.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-3">
        <label className="mb-1 text-gray-500">Comuna</label>
        <select
          onChange={onCommuneChange}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
        >
          {communes.map((region) => (
            <option key={region.id} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-3">
        <label className="mb-1 text-gray-500">Metros cuadrados</label>
        <input
          type="text"
          value={selectedSelects.surfaceM2}
          onChange={onSurfaceM2Change}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
          placeholder="Ej: 500"
        />
      </div>

      <div className="flex flex-row justify-between items-center w-[100%] mb-3">
        <div className="w-[49%]">
          <label className="mb-1 text-gray-500">P. mínimo</label>
          <input
            type="text"
            value={selectedSelects.minPrice}
            onChange={onMinPriceChange}
            className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
          />
        </div>

        <div className="w-[49%]">
          <label className="mb-1 text-gray-500">P. máximo</label>
          <input
            type="text"
            value={selectedSelects.maxPrice}
            onChange={onMaxPriceChange}
            className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
          />
        </div>
      </div>

      <div className="flex flex-col mb-3">
        <label className="mb-1 text-gray-500">Dormitorios</label>
        <select
          value={selectedSelects?.bedrooms}
          onChange={onBedroomChange}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
        >
          <option value="">Seleccione...</option>
          {bedroomsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-3">
        <label className="mb-1 text-gray-500">Baños</label>
        <select
          value={selectedSelects?.bathrooms}
          onChange={onBathroomChange}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
        >
          <option value="">Seleccione...</option>
          {bathroomsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-3">
        <label className="mb-1 text-gray-500">Estacionamientos</label>
        <select
          value={selectedSelects?.coveredParkingLots}
          onChange={onCoveredParkingLotChange}
          className="p-2 border outline-none focus:outline-none bg-white border-gray-200 w-[100%]"
        >
          <option value="">Seleccione...</option>
          {coveredParkingLotsOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <Button
        type="submit"
        className="block w-full p-2 my-1 uppercase font-semibold text-sm rounded-full hover:shadow-sm transition ease-in-out duration-300 text-white bg-primary hover:bg-primary-opacity"
      >
        {isLoading ? 'Buscando...' : 'Buscar'}
      </Button>

      <Button
        onClick={resetForm}
        className="block w-full p-2 my-1 text-sm rounded-full hover:shadow-sm transition ease-in-out duration-300 text-white bg-gray-500 hover:bg-gray-600"
      >
        Limpiar
      </Button>
    </form>
  );
};

export default AdvancedSearch;
