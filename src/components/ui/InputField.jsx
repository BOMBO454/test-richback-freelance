import React from 'react';
import PropTypes from 'prop-types';

export default function InputField({ title, onChange, value, placeholder }) {
  return (
    <label className="input__field">
      {title && <span className="input__label">{title}</span>}
      <input
        type="text"
        className="input__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

InputField.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
