import React from "react";

const Select = ({
  options,
  onChange,
  name,
  valueProperty,
  textProperty,
  placeholder,
  ...rest
}) => {
  return (
    <select
      className="form-control form-control-sm"
      name={name}
      onChange={onChange}
      {...rest}>
      <option value="">{placeholder}</option>
      {options.map(op => (
        <option value={op[valueProperty] || op} key={op[valueProperty] || op}>
          {op[textProperty] || op}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};
export default Select;
