import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const ParkOption = ({
  innerProps, isDisabled, data,
}) => (!isDisabled ? (
  <div
    className="react-select__option"
    {...innerProps}
  >
    {data.label}
  </div>
) : null);

ParkOption.propTypes = {
  isDisabled: PropTypes.bool,
  innerProps: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

ParkOption.defaultProps = {
  isDisabled: false,
};

const ParkSelect = ({ options, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      options={options}
      clearable={false}
      className="react-select"
      classNamePrefix="react-select"
      placeholder={placeholder}
      components={{ Option: ParkOption }}
    />
  );
};

ParkSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
  })),
  placeholder: PropTypes.string,
};

ParkSelect.defaultProps = {
  options: null,
  placeholder: 'เลือกดูรายการสวน...',
};

export default ParkSelect;
