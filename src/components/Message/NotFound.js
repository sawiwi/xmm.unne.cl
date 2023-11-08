import React from 'react';
import ButtonPrimary from '../Button/ButtonPrimary';
import { iconsList } from '../Icons';
import '../../assets/styles/components/Message/NotFound.css';

const NotFound = ({ message }) => {
  const { BiErrorCircle } = iconsList;
  return (
    <div className="container-message flex flex-col">
      <span className="flex items-center">
        <BiErrorCircle className="mb-0.3 mr-[2px]" />
        {message}
      </span>
      <ButtonPrimary
        onClick={() => window.location.reload()}
        className="text-blue-500 hover:text-blue-600"
      >
        Restablecer búsqueda
      </ButtonPrimary>
    </div>
  );
};

export default NotFound;
