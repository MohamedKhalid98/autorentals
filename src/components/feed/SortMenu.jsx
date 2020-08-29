import React, { useState, useEffect } from "react";

const SortMenu = ({ onSortChange, availableCars }) => {
  const [sortBy, setSort] = useState({});

  useEffect(() => {
    onSortChange(sortBy);
  }, [sortBy]);

  function toggleSort({ currentTarget }) {
    setSort({ [currentTarget.name]: -sortBy[currentTarget.name] || 1 });
  }
  return (
    <div className="d-flex align-items-center">
      <div className="mr-3 small text-dark font-weight-bold">Sort by :</div>
      <div
        className="btn-group btn-group-sm"
        role="group"
        aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-theme ${sortBy["price"] && "text-white"}`}
          name="price"
          onClick={toggleSort}>
          Price
          {sortBy.price && (
            <i
              className={`fas ml-1 fa-sort-${
                sortBy.price === 1 ? "up" : "down"
              }`}></i>
          )}
        </button>
        <button
          type="button"
          className={`btn btn-theme ${sortBy["year"] && "text-white"}`}
          onClick={toggleSort}
          name="year">
          Year
          {sortBy.year && (
            <i
              className={`fas ml-1 fa-sort-${
                sortBy.year === 1 ? "up" : "down"
              }`}></i>
          )}
        </button>
      </div>
      <button
        className="btn-sm btn-theme ml-2 border-0"
        onClick={() => setSort({})}>
        reset
      </button>
      <h6 className="mb-0 ml-auto text-theme">
        Available cars:{" "}
        <b className="badge bg-theme text-white">{availableCars}</b>
      </h6>
    </div>
  );
};

export default SortMenu;
