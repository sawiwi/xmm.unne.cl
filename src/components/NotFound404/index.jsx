import React from 'react';
import Section from '../Section/Section';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const NotFoundError = () => {
  const ErrorImg =
    'https://res.cloudinary.com/dvdb33uyj/image/upload/v1686667150/Projects/unne/img/Error404/Unne_Error_404_eg3lm8.png';
  return (
    <div className="flex justify-center items-center container h-screen mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 ml-4">
        <div className="col-span-2 sm:col-auto">
          <p className="text-2xl uppercase font-semibold my-9 md:mx-24 w-max relative">
            OOPS!
          </p>
          <h2 className="text-primary text-2xl xl:text-5xl uppercase">
            404 - Page Not Found
          </h2>
          <p className="my-5">
            Es posible que la página que busca haya sido eliminada, haya
            cambiado de nombre o no esté disponible temporalmente.
          </p>
          <p className="my-5">
            <Link to="/" className="hover:text-primary">
              <strong>Pulse aquí para volver a la página de inicio</strong>
            </Link>
          </p>
        </div>
        <div class="col-span-2 sm:col-auto mt-8">
          <img src={ErrorImg} alt="404-img" className="w-full" />
        </div>
      </div>
    </div>
  );
};
export default NotFoundError;
