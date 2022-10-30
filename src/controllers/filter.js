import Filter from "../components/filter";
import { render } from "../utils/render";

export class FilterController {
  constructor(container, ticketsModel) {
    this._container = container;
    this._ticketsModel = ticketsModel;

    this._filterComponent = new Filter();
    this._onFilterChange = this._onFilterChange.bind(this);
  }

  render() {
    const container = this._container;

    render(container, this._filterComponent, "afterbegin");
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);
    this._filterComponent.setFirstFilterChangeHandler(this._onFilterChange);
  }

  _onFilterChange(filterTypes) {
    this._ticketsModel.setFilter(filterTypes);
  }
}
