import React from 'react';
import { iconsList } from '../Icons';

const ButtonClose = ({ className = '', onClick = () => {} }) => {
  const { GrClose } = iconsList;

  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-[#e5e7eb] border-none outline-none focus:outline-none ${className} `}
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <GrClose className="w-5 h-5" />
    </button>
  );
};

export default ButtonClose;
