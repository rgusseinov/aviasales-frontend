import { filters } from "../utils/filter";
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
  getTemplate() {
    return createFilterTemplate();
  }

  setFirstFilterChangeHandler(handler) {
    this.getElement()
      .querySelector('input[data-filter-type="all"]')
      .addEventListener("change", (evt) => {
        handler(evt.target.value);
        
        const isFirstFilterChecked = evt.target.checked;
        const filterElements = this.getElement().querySelectorAll('input:not([data-filter-type="all"])');
        filterElements.forEach(filter => filter.checked = isFirstFilterChecked ? true : false);
      });
  }

  setFilterChangeHandler(handler) {
    this.getElement()
      .querySelectorAll('input:not([data-filter-type="all"])')
      .forEach(filter => {
        filter.addEventListener("change", (evt) => {
          handler(evt.target.value);

          const filterElements = this.getElement().querySelectorAll('input:not([data-filter-type="all"])');
          const isFiltersChecked = Array.from(filterElements).every(filter => filter.checked);

          const firstFilter = this.getElement().querySelector('input[data-filter-type="all"]');
          (isFiltersChecked) ? firstFilter.checked = true : firstFilter.checked = false;
        });
      });
  }
}
