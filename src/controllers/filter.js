/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import Filter from "../components/filter";
import { render } from "../utils/render";
import { FilterType } from "../utils/utils";

export class FilterController {
  constructor(container, ticketsModel) {
    this._container = container;
    this._ticketsModel = ticketsModel;

    this._filterComponent = null;
    this._onFilterChange = this._onFilterChange.bind(this);
  }

  render() {
    const container = this._container;

    /* const filters = Object.values(FilterType).map((filterType) => ({
      name: filterType,
      // checked: filterType === this._activeFilterType,
    })); */

    this._filterComponent = new Filter();
    render(container, this._filterComponent, "afterbegin");
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);
  }

  _onFilterChange(filterType) {
    this._ticketsModel.setFilter(filterType);
    // this._activeFilterType = filterType;
  }
}
