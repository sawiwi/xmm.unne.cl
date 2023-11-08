import React, { Fragment, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { iconsList } from '../Icons';

import { Link } from 'react-scroll';

const NavigationItem = ({ menuItem }) => {
  const { pathname } = useLocation();
  /* const { name, href, children } = menuItem; */
  const { IoIosArrowDown } = iconsList;

  const [viewActive, setViewActive] = useState(false);

  const ActiveClassTw = 'bg-secondary text-white inline-flex items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5 rounded-full cursor-pointer';
  const NoActiveClassTw = 'inline-flex items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5 rounded-full text-slate-800 cursor-pointer';

  const hoverEffect = 'hover:bg-slate-100 hover:text-slate-900';
  const myAcount = 'bg-primary inline-flex items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5 rounded-full text-white hover:bg-primary hover:text-white';

  const handleActive = (viewName) => {
    setViewActive(viewName);
    document.title = 'Página gratis Unne - '+ menuItem.name;
  };

  const handleInActive = (viewName) => {
    setViewActive(viewName);
  };

  return (
    
    <>
      {menuItem.name.toLowerCase() === 'mi cuenta' ? (
        <li className='nav-item'>
          <a href={menuItem.toScroll} className={myAcount} target='_blank'>{menuItem.name}</a>
        </li>) : 
        menuItem.name.toLowerCase() == 'contacto' ? 
        (<li className='nav-item'>
          <Link activeClass={ActiveClassTw} 
            className={viewActive ? ActiveClassTw : hoverEffect +' '+ NoActiveClassTw} 
            to={menuItem.toScroll}  
            smooth={true} 
            offset={menuItem.offset} 
            duration={menuItem.duration} 
            onSetActive={() => handleActive(true)} 
            onSetInactive={() => handleInActive(false)}>
            {menuItem.name}
          </Link>
        </li>) : (
        <li className='nav-item'>
          <Link activeClass={ActiveClassTw} 
            className={viewActive ? ActiveClassTw : hoverEffect +' '+ NoActiveClassTw} 
            to={menuItem.toScroll} 
            spy={true} 
            smooth={true} 
            offset={menuItem.offset} 
            duration={menuItem.duration} 
            onSetActive={() => handleActive(true)} 
            onSetInactive={() => handleInActive(false)}>
            {menuItem.name}
          </Link>
        </li>)
        }
      
    </>
    
  );
};

export default NavigationItem;
