import React from "react";
const Input = ({ label, name, onChange, error, type }) => {
  return (
    <div className="form-group custom">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type || "text"}
        className={`form-control ${error[name] && "border-danger"}`}
        id={name}
        name={name}
        onChange={onChange}
      />
      {error[name] && <div className="error">{error[name]}</div>}
    </div>
  );
};

export default Input;
