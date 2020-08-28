import React, { useState, useEffect } from "react";
const Range = ({ label, min, value, name, onRangeChange, ...rest }) => {
  const [range, setRange] = useState(value);

  useEffect(() => {
    setRange(value);
  }, [value]);
  function changeRange(e) {
    setRange(e.target.value);
  }
  return (
    <div className="">
      <small className="d-flex align-items-center justify-content-between">
        {label} <span>${range}</span>
      </small>
      <input
        type="range"
        className="custom-range"
        value={range}
        {...rest}
        onMouseUp={() => onRangeChange({ name, range })}
        onChange={e => changeRange(e)}
      />
    </div>
  );
};

export default Range;
