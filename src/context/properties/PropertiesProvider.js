import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PropertiesContext } from './PropertiesContext';
import PropertiesServices from '../../services/PropertiesServices';
import ExchangeRateServices from '../../services/ExchangeRateServices';
import { paginationTopLimit } from '../../constants/consts/company';

const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);
  // const [allSimilarProperties, setAllSimilarProperties] = useState([]);
  // const [highlightedProperties, setHighlightedProperties] = useState([]);
  // const [propertiesInMap, setPropertiesInMap] = useState([]);
  const [propertiesToShow, setPropertiesToShow] = useState([]);
  const [propertyId, setPropertyId] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundMsg, setNotFoundMsg] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const [valueUf, setValueUf] = useState('');

  const { pathname } = useLocation();

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  properties.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const getProperties = async (
    currentPage,
    limit = paginationTopLimit.limit
  ) => {
    try {
      setNotFoundMsg('');
      setIsLoading(true);
      const { data, newUnitiesData, meta } =
        await PropertiesServices.getProperties(currentPage, limit);
      setProperties(
        pathname === '/soy-inversionista/unidades-nuevas'
          ? newUnitiesData
          : pathname === '/propiedades'
          ? data
          : data
      );
      // setHighlightedProperties(data);
      setTotalItems(meta.totalItems);
      setTotalPages(Math.ceil(meta.totalItems / limit)); // + 0.5
      setNotFoundMsg(
        data.length === 0
          ? 'Lo sentimos, tu busqueda no coincide con nuestros registros'
          : ''
      );
      setIsLoading(false);
    } catch (error) {
      console.log('Bad server request', error);
    }
  };

  const getAllProperties = async (currentPage, limit, statusId, companyId) => {
    const { data, meta } = await PropertiesServices.getAllProperties(
      currentPage,
      limit,
      statusId,
      companyId
    );
    setAllProperties(data);
    // setAllSimilarProperties(data);
    // setPropertiesInMap(data);
    setPropertiesToShow(data.slice(0, 10));
  };

  const getValueUF = async () => {
    const value = await ExchangeRateServices.getExchangeRateUF();
    setValueUf(value.UFs[0]);
  };

  useEffect(() => {
    getValueUF();
  }, []);

  useEffect(() => {
    getAllProperties();
  }, []);

  const handlePageChange = (newPage) => {
    setProperties([]);
    setPage(newPage);
  };

  useEffect(() => {
    getProperties(page);
  }, [page]);

  return (
    <PropertiesContext.Provider
      value={{
        contextData: {
          properties,
          allProperties,
          // allSimilarProperties,
          // highlightedProperties,
          setAllProperties,
          propertiesToShow,
          setPropertiesToShow,
          // propertiesInMap,
          setProperties,
          page,
          totalPages,
          totalItems,
          handlePageChange,
          isLoading,
          setIsLoading,
          notFoundMsg,
          setNotFoundMsg,
          propertyId,
          setPropertyId,
          handleSortChange,
          sortOrder,
          setSortOrder,
          valueUf,
        },
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
