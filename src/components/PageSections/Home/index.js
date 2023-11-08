import React, { Fragment } from 'react';
import CarouselSection from './components/CarouselSection';

import About from '../../../pages/About';
import Properties from '../../../pages/Properties/Properties';

const HomeComponent = () => {
  return (
    <Fragment>
      <CarouselSection />
      <Properties/>
      <About/>     
    </Fragment>
  );
};

export default HomeComponent;
