import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../components/Head/Head';
import AboutComponent from '../components/PageSections/About';

const About = () => {
  const location = useLocation();

  /* useEffect(() => {
    if (location.pathname === '/sobre-mi') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]); */

  return (
    <Fragment>
      <div id='AboutSectionScroll'>
        <AboutComponent />
      </div>
    </Fragment>
  );
};

export default About;
