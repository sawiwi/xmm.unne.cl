import React, { useEffect, useState , Fragment} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import ModalDetailProperty from './ModalDetailProperty';
// import GalleryCarousel from '../../../GalleryCarousel/GalleryCarousel';
import Modal from '../../../Modal/Modal';
import { Link } from 'react-router-dom';
import {
  truncateString,
  parseToCLPCurrency,
  parseToDecimal,
  ufToClp,
  clpToUf2
} from '../../../../utils';
import { company } from '../../../../constants/consts/company';
import { iconsList } from '../../../Icons';
import { is } from '@babel/types';
// import {Button, Modal, ModalBody} from 'reactstrap';

const PropertyCard = ({ data, isList, property,valueUf }) => {
  const [modalOpen, setModalOpen]= useState(false);
  const { id, title, image, address, commune, city, price, types, surface_m2 , bedrooms, bathrooms, covered_parkings_lots} = data;
  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
    BiMap, 
    TbArrowBigRightFilled
  } = iconsList;

  // console.log([data])

  const renderDetailProp = () => (
    <ModalDetailProperty
      property={data}
    />
  );


  const _renderItem = (name,code,price) => {
    let ufValue = price;
    let clpValue = price;

    let valueIntUF = valueUf.Valor.replace(/\./g, '').replace(',', '.');

    if (name === 'UF' && code === 'UF'){
      clpValue = ufToClp(price,valueIntUF);
    }
    if (name === 'Peso Chileno' && code === 'CLP'){
      ufValue = clpToUf2(price,valueIntUF);
    }

    return (
      <div className= {`${isList ? 'grid grid-cols-1' : ""}flex justify-between`}>
        <h1 className="flex justify-end items-center mb-3 font-semibold text-xl bg-slate-50  border-primary-400 p-1 rounded-sm text-primary">
          <span className="mr-1">UF: </span>{' '}
          {parseToDecimal(ufValue)}
        </h1>
        <p className="flex justify-end items-center mb-3 font-semibold text-xl bg-slate-50  border-primary-400 p-1 rounded-sm text-black">
          <span className="mr-1">CLP: </span>{' '}
          {parseToCLPCurrency(clpValue)}
        </p>
      </div>
    )
  };

  return (
    <div
      className={`${
        isList
          ? 'flex flex-col items-center bg-white border border-gray-200 hover:shadow-lg md:flex-row h-299'
          : 'w-full '
      } border rounded-xl border-gray-200 hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out`}
    >
      <img
        className={`${
          isList
            ? 'h-[299px] w-[100%] md:w-[400px]  xl:w-[400px] object-cover rounded-t-xl xl:rounded-none'
            : 'rounded-t-xl'
        }  object-cover h-[299px] w-full`}
        src={`https://accion.panal.house//Imagenes//${id}//1.jpg`}
        alt={`top-img-${title}`}
        width="full"

      />

      <div className="p-3">
        <div className={`${isList ? 'grid grid-cols-1 w-full  md:w-[20vw] lg:w-[32vw] xl:w-[30vw]': ""} flex flex-row justify-between`}>
          <small className="mb-3 font-normal text-sm text-gray-400 flex items-start justify-start">
            <BiMap className="text-xl mr-1" />
            {truncateString(
              `${address || 'Dirección no registrada'}, ${
                commune || 'Comuna no registrada'
              }`,
              60
            )}
          </small>
          <small className="uppercase text-primary">Cod: {id}</small>
        </div>
        <h5 className="mb-2 h-18 text-md font-light xl:text-md text-gray-700">
          {truncateString(title ?? 'Titulo de propiedad no registrado', 70)}
        </h5>
        <div className='border border-bottom  mb-4'></div>
        <div className={`${isList ? 'grid grid-cols-1  w-full': ""} block md:w-full xl:flex xl:flex-row xl:justify-between`}>
          <div className="table w-full ">
            <div className="table-header-group">
              <div className="table-row">
                <div className="table-cell text-sm px-3">m<sup>2</sup></div>
                <div className="table-cell text-sm px-3">Dormitorios</div>
                <div className="table-cell text-sm px-3">Baños</div>
                <div className="table-cell text-sm px-3 ">Garages</div>
              </div>
            </div>
            <div className="table-row-group ">
              <div className="table-row ">
                <div className="table-cell px-5 "><RiPencilRulerLine fill='#E85512'/>{bedrooms ?? 0}</div>
                <div className="table-cell px-5"><FaBed fill='#E85512' /><span>{bedrooms ?? 0}</span></div>
                <div className="table-cell px-5"><FaBath  fill='#E85512'/>{bathrooms ?? 0}</div>
                <div className="table-cell px-5"><GiHomeGarage fill='#E85512' />{covered_parkings_lots ?? 0}</div>
              </div>
            </div>
          </div>
        </div>
   
      </div>
      <div>
      <div className={`${isList ? 'grid grid-cols-1 w-full  sm:block  md:block lg:w-[30vw] xl:w-[30vw] ': ""} grid grid-cols-span-1 text-center md:grid `}>
          {_renderItem(data?.currency?.name, data?.currency?.isoCode, data.price)}

      </div>
      <div className={`${isList ? 'grid grid-cols-1 w-full sm:block  md:block lg:w-[30vw] xl:w-[30vw]': ""} grid grid-cols-span-1  md:grid `}>
          <button
          type="button"
          onClick={()=> setModalOpen(true)}
          className="inline-flex items-center px-6 py-2 w-52 m-2 text-center  xl:w-48 xl:h-12 xl:px-8 text-white bg-primary rounded-lg hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
         <span className='text-lg items-center xl:text-lg m-1 inline-flex '>Ver detalle 
         <TbArrowBigRightFilled className='mt-[0.3rem] ml-1 hover:translate-x-3 transition duration-500'/>
         </span>  
        </button>
      </div>
      
        <Modal
            renderTrigger={() => null}
            isOpenProp={modalOpen}
            renderContent={renderDetailProp}
            contentExtraClass="max-w-6xl"
            modalTitle={`Detalle de propiedad`}
            modalSubtitle={`Código de la propiedad ${id}`}
            onCloseModal={() => {
              setModalOpen(false);
            }}
          />

      </div>

    </div>
  );
};

export default PropertyCard;
