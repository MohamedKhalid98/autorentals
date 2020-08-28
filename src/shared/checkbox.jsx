import React from "react";

const Checkbox = ({ label, name, value, ...rest }) => {
  return (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={value || label}
        name={name}
        value={value}
        {...rest}
      />
      <label className="custom-control-label" htmlFor={value || label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
