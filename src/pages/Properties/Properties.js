import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import Section from '../../components/Section/Section';
import PropertiesComponent from '../../components/PageSections/Properties';

const Properties = () => {
  const location = useLocation();

  /* useEffect(() => {
    if (location.pathname === '/propiedades') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }  else if (location.pathname === '/sobre-mi') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // else if (location.pathname === '/contacto') {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
  }, [location.pathname]); */

  return (
    <div id='PropertiesSectionScroll'>
      <Section className="relative flex flex-col md:flex-row">
        <PropertiesComponent />
      </Section>
    </div>
    
  );
};

export default Properties;
