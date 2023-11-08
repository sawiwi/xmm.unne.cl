import React from 'react';
import Slider from 'react-slick';

const ReactSlickComponent = ({ data, RenderComponent, slidesToShow, xl }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 200,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: xl,
          slidesToScroll: xl,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} className="flex items-center">
        {data.length > 0 &&
          data.map((item) => <RenderComponent key={item.id} item={item} />)}
      </Slider>
    </div>
  );
};

export default ReactSlickComponent;
