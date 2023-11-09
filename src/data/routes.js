import Home from '../pages/Home';
import About from '../pages/About';
import Properties from '../pages/Properties/Properties';
// import Property from '../pages/Properties/Property';
// import PropertiesInMap from '../pages/PropertiesInMap';

// import { useLocation } from 'react-router-dom';

// const location = useLocation();

// useEffect(() => {
//   if (location.pathname === 'inicio') {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }else if(location.pathname === 'sobre-mi'){
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }
// }, [location.pathname]);

export const navigationRoutes = [
  {
    id: 1,
    name: 'Unne',
    path: '/',
    element: <Home/>,
  },
  {
    id: 2,
    name: 'Sobre mi',
    path: '#sobre-mi',
    element: <About />,
  },
  {
    id: 3,
    name: 'Mis propiedades',
    path: '#propiedades',
    element: <Properties />,
  },

];
