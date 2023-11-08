import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropertiesServices from '../../services/PropertiesServices';
import { useState } from 'react';
import { useEffect } from 'react';
import { company } from '../../constants/consts/company';


const GalleryCarousel = ({property}) => {
  const [propertyId, setPropertyId]= useState("")
  console.log(property)


  const getPropertyForId= async (id, statusId, companyId)=>{
    const data= await PropertiesServices.getProperty(id, statusId, companyId);
    console.log(data)

    setPropertyId(data)
    }


    useEffect(()=>{
      getPropertyForId(property.id, 1, company.companyId)
    }, [])

  const getImages = () =>
  propertyId?.images
      ? propertyId?.images?.map((_, idx) => ({
          original: `https://accion.panal.house//Imagenes//${
            propertyId?.id
          }//${idx + 1}.jpg`,
          thumbnail: `https://accion.panal.house//Imagenes//${
            propertyId?.id
          }//${idx + 1}.jpg`,
        }))
      : [];

  // const getImages = () => {
  //   if (propertyId && data.image) {
  //       return [{
  //           original: `https://accion.panal.house//Imagenes//${data.id}//1.jpg`,
  //           thumbnail: `https://accion.panal.house//Imagenes//${data.id}//1.jpg`,
  //       },
  //       {
  //         original: `https://accion.panal.house//Imagenes//${data.id}//1.jpg`,
  //         thumbnail: `https://accion.panal.house//Imagenes//${data.id}//1.jpg`,
  //     },
  //     ]
  //   } else {
  //       return {};
  //   }
  // };

  return (
    <ImageGallery
      autoPlay={true}
      slideDuration={500}
      slideInterval={3000}
      infinite={true}
      showNav={false}
      showPlayButton={false}
      showFullscreenButton={false}
      showBullets={false}
      showThumbnails={true}
      thumbnailPosition="bottom"
      items={getImages()}
    />
  );
};

export default GalleryCarousel;
