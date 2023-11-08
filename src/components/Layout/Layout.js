import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CarouselSection from '../PageSections/Home/components/CarouselSection';
import Properties from '../../pages/Properties/Properties';
// import Property from '../../pages/Properties/Property';
import About from '../../pages/About';
import Head from '../../components/Head/Head';

const Layout = () => {
  return (
    <div className="relative mt-16 xl:mt-24 overflow-hidden w-100 bg-white">
      <Head
        title="Inicio"
        description="Pagina web otorgada por Unne a sus socios"
        keywords="unne, propiedades, plataforma de corretaje, herramientas digitales, corredores, recursos, corretaje"
      />

      {/* HEADER PAGE */}
      <Header />
      {/* MAIN CONTENT */}
      <CarouselSection/> 
      <Properties/>
      {/* <Property/> */}
      <About/>
      {/* FOOTER PAGE */}
      <Footer />    
    </div>
  );
};

export default Layout;
