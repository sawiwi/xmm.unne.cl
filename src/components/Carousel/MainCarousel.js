import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../assets/styles/components/Carousel/MainCarousel.css';

const MainCarousel = ({ data }) => {
  return (
    <AwesomeSlider
      bullets={false}
      mobileTouch={true}
      organicArrows={true}
      infinite={true}
      className="awsBtn"
    >
      {data?.length > 0
        ? data.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.img}
                alt="slide-1"
                className="bg-center bg-no-repeat bg-cover brightness-100 w-screen h-[400px] xl:h-[600px]"
                style={{
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
              />

              <div className="absolute inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32 bg-black bg-opacity-25">
                {/* <div className="d-flex flex-col w-2/3 xl:w-1/3 ">
                  <h2 className="text-2xl font-bold xl:text-4xl pb-2 text-white drop-shadow-lg border-b-2">
                    {slide.title}
                  </h2>
                  <p className="text-md xl:text-xl text-white">{slide.desc}</p>
                </div> */}
              </div>
            </div>
          ))
        : null}
    </AwesomeSlider>
  );
};

export default MainCarousel;
