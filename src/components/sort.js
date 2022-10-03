const createSortMarkup = () => (`<ul class="app__sort sort-list">
                                    <li class="sort-list__item selected">
                                      <label for="sort-cheap">Самые дешевые</label>
                                      <input type="radio" name="" id="sort-cheap" value="cheap" class="" />
                                    </li>
                                    <li class="sort-list__item">
                                      <label for="sort-fast">Самый быстрый</label>
                                      <input type="radio" name="" id="sort-fast" value="fast" class="" />
                                    </li>
                                    <li class="sort-list__item">
                                      <label for="sort-optimal">Оптимальный</label>
                                      <input type="radio" name="" id="sort-optimal" value="optimal" class="" />
                                    </li>
                                  </ul>`);

export default class Sort {
  getTemplate() {
    return createSortMarkup();
  }
}
