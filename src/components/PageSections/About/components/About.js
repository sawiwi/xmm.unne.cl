import React from 'react';
import Section from '../../../Section/Section';
// import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <Section>
      {/* <Fade delay={300} direction="right"> */}
      <div className="grid grid-cols-1 gap-4">
        <div className="col-span-2 flex flex-col justify-center mx-4 xl:ml-24">
          <h2 className="text-2xl xl:text-5xl text-center  text-primary font-bold">
            Sobre mi
          </h2>
          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
            Creamos Unne con la misión de poder arrendar, vender e invertir en propiedades de manera informada, segura y rápida. 
            <br />
            <br />
            Nuestro propósito es aportar a la democratización y profesionalización de nuestra industria por la vía de la innovación en tecnología, capacitaciones, alianzas y trabajo colaborativo.  
            <br />
            <br />
            Unne es un acelerador inmobiliario que ofrece una amplia gama de productos y servicios innovadores, esto junto con una gestión comercial proactiva, impulsarán los resultados de nuestros clientes.
            <br />
            <br />
          </p>

          <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-5 md:text-center xl:text-left">
            Pablo Ramirez P.
          </p>
          <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-5 md:text-center xl:text-left">
            Fundador y Gerente General.
          </p>

          {/* <div className="w-full">
            <div className="mt-8 ml-8 mr-8 mb-8 hover:scale-110 transition duration-500">
              <div className="w-full xl:w-5/6 h-50 sm:h-auto bg-primary-400 rounded-[50px] overflow-hidden shadow-md">
                <div className="p-14 pl-10">
                  <h2 className="text-xl xl:text-2xl text-white font-bold mb-2">
                    ¡Los números nos avalan!
                  </h2>
                  <p className="text-lg xl:text-xl text-white ">
                  Más de <span className='font-bold'>2.000.000</span> millones de visitas a nuestras publicaciones mensuales.<br></br> Más de <span className='font-bold'>300</span> corredores ya son parte de Unne.<br></br> Cerca de <span className='font-bold'>6.000</span> propiedades vigentes en cartera.<br></br> El Banco de Canje más grande del país.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex items-center justify-center flex-col">
          <img
            src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681682/Projects/unne/img/experienciaUsuarios/mujer.png"
            alt="about-img"
            className="rounded-full h-[50px] w-[150px] xl:w-[400px] xl:h-[400px]"
          />
{/* 
          <div className="pt-10">
            <h2 className="text-2xl xl:text-4xl font-bold text-black text-center sm:text-start">
              “Un largo camino
              <br />
              se inicia con un solo paso...”
            </h2>
          </div> 
        </div> */}
      </div>
      {/* </Fade> */}
    </Section>
  );
};
export default About;
