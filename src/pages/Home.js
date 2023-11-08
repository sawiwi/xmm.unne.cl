import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../components/Head/Head';
import HomeComponent from '../components/PageSections/Home';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head
        title="Inicio"
        description="Unne es una plataforma de corretaje, donde los corredores puedan acceder a herramientas digitales que de otro modo seria difícil de acceder"
        keywords="unne, propiedades, plataforma de corretaje, herramientas digitales, corredores, recursos, corretaje"
      />
      <HomeComponent />
    </Fragment>
  );
};

export default Home;
