import React, { Component } from "react";
import Checkbox from "../../shared/Checkbox";
import Range from "../../shared/Range";
import _ from "lodash";
import Select from "../../shared/Select";
import axios from "axios";

const sellerTypes = [
  { name: "owner", type: "owner" },
  { name: "pre certified owner", type: "certified-pre-owner" },
  { name: "dealer", type: "dealer" },
];
const initialFilter = {
  brandId: "",
  modelId: "",
  carTypes: [],
  sellerTypes: [],
  minPrice: "0",
  maxPrice: "0",
  minYear: "",
  maxYear: "",
};

class FilterSidebar extends Component {
  state = {
    filter: {
      brandId: "",
      modelId: "",
      carTypes: [],
      sellerTypes: [],
      minPrice: "0",
      maxPrice: "0",
      minYear: "",
      maxYear: "",
    },
    brands: [],
    models: [],
    carTypes: [],
  };

  async componentDidMount() {
    console.log(process.env);
    const { data: carTypes } = await axios.get("/car-types");
    const { data: brands } = await axios.get("/brands");
    this.setState({ carTypes, brands });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      let params = this.formatQuery(this.state.filter);
      this.props.onChangeFilter(params);
    }
  }
  formatQuery(filter) {
    let params = {};
    for (let key in filter) {
      if (typeof filter[key] == "object" && filter[key].length > 0)
        params[key] = filter[key];
      else if (
        typeof filter[key] == "string" &&
        filter[key] !== "" &&
        filter[key] !== "0"
      )
        params[key] = filter[key];
    }
    return params;
  }
  handleChangeFilter = async ({ target }) => {
    let newFilter = { ...this.state.filter };
    if (target.type === "checkbox") {
      if (target.checked) newFilter[target.name].push(target.value);
      else {
        const index = newFilter[target.name].findIndex(e => e === target.value);
        newFilter[target.name].splice(index, 1);
      }
      return this.setState({ filter: newFilter });
    } else {
      newFilter[target.name] = target.value;
    }
    if (target.name === "brandId" && target.value !== "") {
      let models = await this.getModels(target.value);
      return this.setState({ filter: newFilter, models });
    }
    this.setState({ filter: newFilter });
  };
  getModels = async brandId => {
    const modelsId = this.state.brands.find(b => b._id === brandId).modelsId;
    const { data: models } = await axios.get(`/models/${modelsId}`);
    return models;
  };
  handlePriceRange = ({ name, range }) => {
    this.setState({ filter: { ...this.state.filter, [name]: range } });
  };
  render() {
    const { brands, models, carTypes, filter } = this.state;
    return (
      <div className="rounded">
        <div className="d-flex mb-2">
          <Select
            className="form-control form-control-lg  mr-2 border-theme bg-theme text-white text-white"
            name="brandId"
            options={brands}
            textProperty="brand"
            value={filter.brandId}
            onChange={this.handleChangeFilter}
            placeholder="Make"
          />

          <Select
            className="form-control form-control-lg border-theme bg-theme text-white text-white"
            name="modelId"
            options={models}
            placeholder="Model"
            value={filter.modelId}
            onChange={this.handleChangeFilter}
          />
        </div>
        <ul className="list-unstyled">
          <li className="card bg-white text-dark border-theme shadow mb-2">
            <label className="card-header bg-theme text-white">Car Type</label>
            <ul className="card-body">
              {carTypes.map(type => (
                <Checkbox
                  label={type.name}
                  key={type._id}
                  name="carTypes"
                  value={type._id}
                  checked={filter.carTypes.includes(type._id)}
                  onChange={this.handleChangeFilter}
                />
              ))}
            </ul>
          </li>
          <li className="card bg-white text-dark border-theme shadow mb-2">
            <label className="card-header bg-theme text-white">
              Seller Type
            </label>
            <ul className="card-body list-unstyled">
              {sellerTypes.map(seller => (
                <Checkbox
                  label={seller.name}
                  name="sellerTypes"
                  value={seller.type}
                  key={seller.type}
                  onChange={this.handleChangeFilter}
                  checked={filter.sellerTypes.includes(seller.type)}
                />
              ))}
            </ul>
          </li>
          <li className="card bg-white text-dark border-theme shadow mb-2">
            <label className="card-header bg-theme text-white">Price</label>
            <ul className="card-body list-unstyled">
              <li>
                <Range
                  max="100000"
                  label="Min price"
                  name="minPrice"
                  step="10000"
                  onRangeChange={this.handlePriceRange}
                  value={filter.minPrice}
                />
              </li>
              <li>
                <Range
                  max="100000"
                  label="Max price"
                  name="maxPrice"
                  step="10000"
                  onRangeChange={this.handlePriceRange}
                  value={filter.maxPrice}
                />
              </li>
            </ul>
          </li>

          <li className="card bg-white text-dark border-theme shadow mb-2">
            <label className="card-header bg-theme text-white">Year</label>
            <div className="form-row card-body">
              <div className="form-group col-6">
                <label className="small d-block mb-0">min</label>
                <Select
                  options={_.range(1990, 2021)}
                  name="minYear"
                  placeholder="from"
                  value={filter.minYear}
                  onChange={this.handleChangeFilter}
                />
              </div>
              <div className="form-group col-6">
                <label className="small d-block mb-0">max</label>
                <Select
                  options={_.range(1990, 2021)}
                  name="maxYear"
                  value={filter.maxYear}
                  placeholder="to"
                  onChange={this.handleChangeFilter}
                />
              </div>
            </div>
          </li>
        </ul>
        <button
          className="btn btn-theme btn-lg btn-block shadow"
          onClick={() => this.setState({ filter: initialFilter, models: [] })}>
          CLEAR FILTER
        </button>
      </div>
    );
  }
}

export default FilterSidebar;
