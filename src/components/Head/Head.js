import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ description, keywords }) => {
  return (
    <Helmet>
      <title>Página Socio Unne - Inicio</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Head;
