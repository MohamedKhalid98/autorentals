import React, { Component } from "react";
import Car from "./Car";
import _ from "lodash";
class FilterableCars extends Component {
  state = {};
  render() {
    const { data, currentPage, setCurrentPage, pages } = this.props;
    return (
      <div className="mt-4">
        {data.length === 0 && (
          <h1 className="text-dark text-center">"😭 No cars available"</h1>
        )}
        {data.map(car => (
          <Car data={car} key={car._id} />
        ))}
        <nav>
          {pages !== 1 && (
            <ul className="pagination pagination-sm">
              {_.range(1, pages + 1).map(n => (
                <li
                  className={`page-item ${currentPage == n && "active"}`}
                  key={n}
                  onClick={() => setCurrentPage(n)}>
                  <button className="page-link">{n}</button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    );
  }
}

export default FilterableCars;
