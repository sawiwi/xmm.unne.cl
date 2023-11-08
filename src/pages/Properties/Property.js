import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import PropertyComponent from '../../components/PageSections/Properties/components/Property';
import PropertiesServices from '../../services/PropertiesServices';
import { company } from '../../constants/consts/company';

const Property = () => {
  const { id } = useParams();
  const location = useLocation();
  const [property, setProperty] = useState({});

  const getProperty = async (id, statusId, companyId) => {
    const response = await PropertiesServices.getProperty(
      id,
      statusId,
      companyId
    );
    setProperty(response);
  };

  useEffect(() => {
    getProperty(id, company?.statusId, company?.companyId);
  }, [id]);

  useEffect(() => {
    if (
      `${location.pathname}${location.search}` ===
      `/propiedades/${id}?statusId=${company?.statusId}&companyId=${company?.companyId}`
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title={`${property?.title ?? 'cargando...'}`} />
      <PropertyComponent {...{ property }} />
    </Fragment>
  );
};

export default Property;
