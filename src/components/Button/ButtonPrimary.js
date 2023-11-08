import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({
  className = '',
  translate = '',
  sizeClass = 'px-4 py-3 sm:px-6',
  fontSize = 'text-sm sm:text-base font-medium',
  disabled = false,
  href = '',
  children,
  targetBlank,
  type = 'button',
  loading,
  onClick = () => {},
}) => {
  const CLASSES = `relative h-auto inline-flex items-center justify-center rounded-full transition-colors ${fontSize} ${sizeClass} ${translate} ${className} `;

  const _renderLoading = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-5 border-t-2 border-b-2 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  };

  if (!!href) {
    return (
      <Link
        to={href}
        target={targetBlank ? '_blank' : undefined}
        className={`${CLASSES} `}
        onClick={onClick}
        rel="noopener noreferrer"
      >
        {children || `This is Link`}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${CLASSES}`}
      onClick={onClick}
      type={type}
    >
      {loading && _renderLoading()}
      {children || `This is Button`}
    </button>
  );
};

export default ButtonPrimary;
