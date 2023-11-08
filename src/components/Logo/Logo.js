import React from 'react';
import { Link } from 'react-router-dom';
import UnneLogo from '../../assets/img/logo/unne-logo.png';
import UnneLogoSvg from '../Icons/custom/unneLogo';

const Logo = () => {
  return (
    <Link to="https://unne.cl/" target='_blank'>
      {UnneLogo && (
        <UnneLogoSvg></UnneLogoSvg>
      )}
    </Link>
  );
};

export default Logo;
