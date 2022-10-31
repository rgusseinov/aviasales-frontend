import { filters, FilterType } from "../utils/filter";
import { AbstractComponent } from "./abstract-component";

const createFilterMarkup = (filter) => {
  const { type, name } = filter;
  return (`<div class="filter__row">
            <label class="filter-checkbox">
              <div class="filter-checkbox__wrapper">
                <input
                  type="checkbox"
                  class="filter-checkbox__input"
                  name="filter"
                  data-filter-type="${type}"
                  value="${type}"
                />
                <div class="filter-checkbox__hidden"></div>
                <span>${name}</span>
              </div>
            </label>
          </div>`);
};

const createFilterTemplate = () => {
  const filterTemplate = filters.map((filter) => createFilterMarkup(filter));

  return `<aside class="app__filter filter">
            <div class="filter__group">
              <div class="filter__header">Количество пересадок</div>
              <div class="filter__content filter-stops">
                ${filterTemplate.join("")}
              </div>
            </div>
          </aside>`;
};

export default class Filter extends AbstractComponent {
  constructor() {
    super();

    this._filterType = { ...FilterType };
  }

  getTemplate() {
    return createFilterTemplate();
  }

  setFirstFilterChangeHandler(handler) {
    this.getElement()
      .querySelector("input[data-filter-type=\"all\"]")
      .addEventListener("change", (evt) => {
        const isFirstFilterChecked = evt.target.checked;
        const filterElements = this.getElement().querySelectorAll("input:not([data-filter-type=\"all\"])");

        filterElements.forEach((filter) => {
          if (isFirstFilterChecked) {
            filter.checked = true;
            this.updateFilter(true);
          } else {
            filter.checked = false;
            this.updateFilter(false);
          }
        });
        handler(this._filterType);
      });
  }

  updateFilter(flag) {
    Object.keys(this._filterType).forEach(prop => this._filterType[prop] = flag);
  }

  setFilterChangeHandler(handler) {
    this.getElement()
      .querySelectorAll("input:not([data-filter-type=\"all\"])")
      .forEach((filter) => {
        filter.addEventListener("change", (evt) => {
          const filterType = evt.target.value;
          this._filterType[filterType] = !this._filterType[filterType];

          const filterElements = this.getElement().querySelectorAll("input:not([data-filter-type=\"all\"])");
          const isFiltersChecked = Array.from(filterElements).every((filter) => filter.checked);

          const firstFilter = this.getElement().querySelector("input[data-filter-type=\"all\"]");
          if (isFiltersChecked) {
            firstFilter.checked = true;
            this._filterType.all = true;
          } else {
            firstFilter.checked = false;
            this._filterType.all = false;
          }
          handler(this._filterType);
        });
      });
  }

  setFilterAccess(flag) {
    this.getElement().querySelectorAll("input[name='filter']")
    .forEach((filter) => {
      filter.disabled = flag;
    });
  }
}
