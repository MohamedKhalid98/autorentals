import React, { Component } from "react";
import FilterSidebar from "./FilterSidebar";
import axios from "axios";
import SortMenu from "./SortMenu";
import FilteredCars from "./CarsFeed";
import { isEmpty } from "lodash";
import Modal from "../../common/Modal";
import Backdrop from "../../common/Backdrop";
import PostCar from "./postCarForm";

import auth from '../../services/auth.service'
import { Redirect } from "react-router";
class FilterableCarRentals extends Component {
  state = {
    rentalCars: [],
    queryParams: {},
    currentPage: 1,
    pageSize: 5,
    pages: 0,
    availableCars: 0,
    toggleModal: false
  };
  async componentDidMount() {
    await this.getRentalCars();
  }
  async componentDidUpdate(prevProps, prevState) {
    let isFilterChanged = prevState.queryParams !== this.state.queryParams;
    let isPaginationChanged = prevState.currentPage !== this.state.currentPage;

    if (isFilterChanged || isPaginationChanged) {
      await this.getRentalCars();
    }
  }

  getRentalCars = async () => {
    const { currentPage, pageSize, queryParams } = this.state;
    let params = {
      pagination: {
        currentPage: currentPage,
        pageSize: pageSize,
      },
    };
    if (!isEmpty(queryParams)) Object.assign(params, queryParams);
    const { data } = await axios.get("/cars", {
      params,
    });

    let state = {
      rentalCars: data.cars,
      pages: data.pages,
      availableCars: data.availableCars,
    };
    if (data.pages < currentPage) state.currentPage = data.pages || 1;
    this.setState(state);
  };

  handleFilter = e => {
    let params = e;
    if (this.state.queryParams.sortBy)
      params.sortBy = this.state.queryParams.sortBy;
    this.setState({ queryParams: params });
  };
  handleSort = sort => {
    if (isEmpty(sort)) {
      if (this.state.queryParams.sortBy) {
        let queryParams = { ...this.state.queryParams };
        delete queryParams.sortBy;
        return this.setState({ queryParams });
      }
      return;
    }
    this.setState({ queryParams: { ...this.state.queryParams, sortBy: sort } });
  };
  render() {
    const { brands, models, carTypes, availableCars } = this.state;

    return (
      <div className="container">
        <div className="my-4 h1 text-theme d-flex justify-content-between">
          Available cars for rent
          <button
            className="btn btn-sm btn-theme px-5 py-4"
            onClick={() => {
              this.props.history.location.state = { name: 'ss' }
              if (!auth.getCurrentUser()) return this.props.history.push('/login')
              this.setState({ toggleModal: true })
            }}>
            RENT YOUR CAR
          </button>
          <Modal
            header="POST YOUR CAR FOR RENT"
            show={this.state.toggleModal}
            closeModal={() => this.setState({ toggleModal: false })} >
            <PostCar brands={brands} />
          </Modal>
          <Backdrop show={this.state.toggleModal} clicked={() => this.setState({ toggleModal: false })} />
        </div>
        <div className="row"></div>
        <div className="row mt-3">
          <div className="col-4">
            <FilterSidebar
              carTypes={carTypes}
              brands={brands}
              models={models}
              onChangeFilter={e => this.handleFilter(e)}
            />
          </div>
          <div className="col-8">
            <SortMenu
              onSortChange={this.handleSort}
              availableCars={availableCars}
            />
            <FilteredCars
              data={this.state.rentalCars}
              currentPage={this.state.currentPage}
              pages={this.state.pages}
              setCurrentPage={num => this.setState({ currentPage: num })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FilterableCarRentals;
