/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import Filter from "../components/filter";
import { render } from "../utils/render";

export class FilterController {
  constructor(container, ticketsModel) {
    this._container = container;
    this._ticketsModel = ticketsModel;

    this._filterComponent = null;
    this._onDataChange = this._onDataChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._ticketsModel.setDataChangeHandler(this._onDataChange);
  }

  render() {
    const container = this._container;

    this._filterComponent = new Filter();
    render(container, this._filterComponent, "afterbegin");

    this._filterComponent.setFilterChangeHandler(this._onFilterChange);
  }

  _onFilterChange(filterType) {
    this._ticketsModel.setFilter(filterType);
  }

  _onDataChange() {
    this.render();
  }
}
