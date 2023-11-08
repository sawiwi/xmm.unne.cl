import React from 'react';
import { Link } from 'react-router-dom';

const TopInfoAddress = ({ property }) => {
  const { types, commune, city } = property;

  return (
    <ul className="flex rounded-md">
      <li className="py-3 text-gray-800 hover:text-primary">
        <Link to="/propiedades">Volver al listado</Link>
      </li>
      <li className="py-3 px-5 text-gray-200">
        <span>|</span>
      </li>
      <li className="hidden sm:flex py-3 pl-2 px-5">
        <span>{types?.[0] ?? 'Propiedad'}</span>
      </li>
      <li className="hidden sm:flex py-3 pl-2 px-5">
        <span>{commune ?? 'Propiedad'}</span>
      </li>
      <li className="hidden sm:flex py-3 pl-2 px-5">
        <span>{city ?? 'Propiedad'}</span>
      </li>
    </ul>
  );
};

export default TopInfoAddress;
