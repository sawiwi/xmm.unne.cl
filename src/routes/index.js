import React, { useEffect }from 'react';
import { Routes, Route } from 'react-router-dom';
import { navigationRoutes } from '../data/routes';
import NotFoundError from '../components/NotFound404';



const AppRoutes = () => {

  
  return (
    <Routes>
      {navigationRoutes.map(({ id, name, path, element }) => (
        <Route key={id} name={name} path={path} element={element}/>
      ))}
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
};

export default AppRoutes;
