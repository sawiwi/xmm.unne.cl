import React from 'react';
import { Link } from 'react-scroll';
import ButtonClose from '../BottonClose/BottonClose';
import Logo from '../Logo/Logo';
import { Disclosure } from '@headlessui/react';
import { navigationData } from '../../data/navigation';
import { iconsList } from '../Icons';

const NavMobile = ({ data = navigationData, onClickClose }) => {
  const { MdOutlineArrowDropDown } = iconsList;

  const _renderItem = (item) => {
    return (
      <Disclosure key={item.id} as="li" className="text-gray-900">
        {item.name.toLowerCase() != 'mi cuenta' ? (
          <Link
            className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-[#e5e7eb] rounded-lg"
            to={item.toScroll}
            spy={true} 
            smooth={true} 
            offset={item.offset} 
            duration={item.duration} 
          >
            <span
              className={'block w-full'}
              onClick={onClickClose}
            >
              {item.name}
            </span>
          </Link>
        ) : (
          <a href={item.toScroll} className={'flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-[#e5e7eb] rounded-lg'} target='_blank'>
            <span
              className={'block w-full'}
              onClick={onClickClose}
            >
              {item.name}
            </span>
          </a>
        )}
        
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto w-full max-w-sm h-screen py-2 transition transform shadow-lg bg-white  divide-y-2 divide-[#d5d7db]">
      <div className="py-6 px-5">
        <Logo />
        <div className="flex flex-col mt-5 text-gray-700 text-sm">
          <div className="flex justify-between items-center mt-4">
            <span className="block"></span>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1 ">
        {data.map(_renderItem)}
      </ul>
    </div>
  );
};

export default NavMobile;
