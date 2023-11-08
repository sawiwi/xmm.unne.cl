import React from 'react';
import MainCarousel from '../../../Carousel/MainCarousel';
import { mainCarouselData } from '../../../../data';

const CarouselSection = () => (
  <div className="h-[400px] xl:h-[600px]" id='IndexSection'>
    <MainCarousel data={mainCarouselData} />
  </div>
);

export default CarouselSection;
