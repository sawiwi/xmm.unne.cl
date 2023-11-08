import React, { useState, useEffect } from 'react';
import { iconsList } from '../../../Icons';

const Characteristics = ({ property }) => {
  const {
    title,
    description,
    company,
    price,
    surface_m2,
    bedrooms,
    bathrooms,
    coveredParkingLots,
    status,
  } = property;
  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
  } = iconsList;

  return (
    <div className="flex flex-col p-5 mt-5 md:xl:mt-24 lg:xl:mt-24 xl:mt-24">
            <h1 className='text-lg'>Características</h1>
      <div className="flex w-full flex-col xl:flex-row xl:w-6/6 justify-between mb-3">
        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-700 text-base font-medium">
          <span className="text-gray-400 mr-1">
            <RiPencilRulerLine className='xl:w-[38px]'/>
          </span>
          Superficie útil: {surface_m2 ?? 0}m<sup>2</sup> útiles
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-700 text-base font-medium">
          <span className="text-gray-400 mr-1">
            <FaBath className='xl:w-[38px]'/>
          </span>
          Baños: {bathrooms ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-700 text-base font-medium">
          <span className="text-gray-400 mr-1">
            <BsFillCalendarCheckFill />
          </span>
          Fecha de entrega: {'Pendiente'}
        </div>
      </div>
      <div className="flex w-full flex-col xl:flex-row xl:w-6/6 justify-between">

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-700 text-base font-medium">
          <span className="text-gray-400 mr-1">
            <FaBed className='xl:w-[38px]'/>
          </span>
          Dormitorios: {bedrooms ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-700 text-base font-medium">
          <span className="text-gray-400 mr-1">
            <GiHomeGarage className='xl:w-[38px]' />
          </span>
          Estacionamientos: {coveredParkingLots ?? 0}
        </div>

        <div className="flex items-center w-full xl:w-[33%] my-1 text-gray-700 text-base font-medium">
          <span className="text-gray-400 mr-1">
            <BsCheckCircle className='xl:w-[38px]' />
          </span>
          Estado del proyecto: {status ?? 'Desabilitado'}
        </div>
      </div>

      <div className="my-7">
        <h5 className="text-lg">Descripción</h5>
        <p className="text-gray-600 mt-2">
          {title ?? 'Propiedad sin titulo registrado'}
        </p>
        <br />
        <p className="text-gray-600">
          {description ?? 'Propiedad sin descripción registrado'}
        </p>
      </div>
    </div>
  );
};

export default Characteristics;
