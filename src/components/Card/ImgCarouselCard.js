import React from 'react';

const ImgCarouselCard = ({ item }) => {
  const { id, title, img, href } = item;
  return (
    <div
      className={` flex justify-center items-center w-[95%] mx-auto rounded-[50px]`}
    >
      <div className="">
        <div className="flex justify-center items-center mb-12 cursor-pointer">
          <a href={href} target="_blank" rel="noreferrer">
            <img
              src={img}
              alt={`logo-${title}`}
              className=""
              width={200}
              height={150}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImgCarouselCard;
