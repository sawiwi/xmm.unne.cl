import React, { Fragment, useState } from 'react';
import Properties from './components/Properties';

const PropertiesComponent = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  return (
    <Fragment>
      <Properties {...{ isGrid, isList, setIsGrid, setIsList }} />
    </Fragment>
  );
};

export default PropertiesComponent;
