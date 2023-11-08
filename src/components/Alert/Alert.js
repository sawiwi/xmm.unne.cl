import React from 'react';

const Alert = ({ type, message }) => {
  const setTypeMessage = (type) => {
    switch (type) {
      case 'danger':
        return 'bg-red-50 text-red-800';
      case 'info':
        return 'bg-blue-50 text-blue-800';
      default:
        return 'bg-gray-50 text-gray-800';
    }
  };

  return (
    <div className={`${setTypeMessage(type)} p-4 mb-4 text-sm`} role="alert">
      {message}
    </div>
  );
};

export default Alert;

