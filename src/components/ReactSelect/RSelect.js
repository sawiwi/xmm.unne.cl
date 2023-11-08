import React, { useId } from 'react';
import ReactSelect from 'react-select';

const RSelect = ({ id, options, onChange, value }) => {
  return (
    <ReactSelect
      id={id}
      options={options}
      onChange={onChange}
      value={value}
      instanceId={useId()}
    />
  );
};

export default RSelect;
