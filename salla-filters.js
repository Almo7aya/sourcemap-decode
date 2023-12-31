/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { F as FilterOptionInputType, a as FilterOptionTypes, d as defineCustomElement$4 } from './salla-filters-widget2.js';
import { d as defineCustomElement$5 } from './salla-button2.js';
import { d as defineCustomElement$3 } from './salla-price-range2.js';
import { d as defineCustomElement$2 } from './salla-rating-stars2.js';

const sallaFiltersCss = ":host{display:block}.s-rating-stars-small{line-height:12px}.s-filters-radio{background-image:none !important}";

const SallaFilters$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.changed = createEvent(this, "changed", 7);
    this.isReady = false; //to avoid triggering the changed event
    this.filters = undefined;
    this.isSidebarOpen = undefined;
    this.filtersData = {};
    this.apply = undefined;
    this.reset = undefined;
    salla.event.on('filters::hidden', () => this.host.style.display = 'none');
    salla.lang.onLoaded(() => {
      this.apply = salla.lang.get('pages.checkout.apply');
      this.reset = salla.lang.get('pages.categories.filters_reset');
    });
    salla.event.on('filters::fetched', ({ filters }) => {
      this.host.style.display = '';
      let freshFilterData = {};
      this.filters = filters
        .map((filter) => {
        filter.label = {
          category_id: salla.lang.get('common.titles.categories'),
          brand_id: salla.lang.get('common.titles.brands'),
          rating: salla.lang.get('pages.categories.filter_rating'),
          price: salla.lang.get('pages.categories.filter_price'),
        }[filter.key] || filter.label;
        filter.inputType = FilterOptionInputType.RADIO; //todo:: support FilterOptionInputType.CHECKBOX
        if (filter.key == 'rating') {
          filter.inputType = FilterOptionInputType.RADIO;
          //@ts-ignore
          let { max, min } = filter.values;
          //@ts-ignore
          filter.values = [5, 4, 3, 2, 1].filter(stars => stars >= min || stars <= max);
        }
        //when getting new filters, maybe less than we had, so let's get from the old one, only what is existed now.
        if (this.filtersData[filter.key]) {
          freshFilterData[filter.key] = this.filtersData[filter.key];
        }
        return filter;
      });
      this.filtersData = freshFilterData;
      this.host.childNodes.forEach(async (widget) => widget.setWidgetHeight && await widget.setWidgetHeight());
    });
  }
  connectedCallback() {
    try {
      let filters = (new URLSearchParams(window.location.search)).get('filters');
      this.filtersData = filters ? JSON.parse(decodeURIComponent(filters)) : {};
    }
    catch (e) {
      salla.logger.warn('failed to get filters from url', e.message);
    }
  }
  /**
   * Method to get filter data.
   */
  async getFilters() {
    return this.filtersData;
  }
  /**
   * Apply filter action.
   */
  async applyFilters() {
    if (!this.isReady) {
      return;
    }
    let hasFilters = Object.keys(this.filtersData).length > 0;
    setTimeout(() => {
      var _a;
      if (hasFilters) {
        window.history.pushState({}, '', salla.url.addParamToUrl('filters', encodeURIComponent(JSON.stringify(this.filtersData))));
      }
      else {
        let url = new URL(window.location.href);
        (_a = url.searchParams) === null || _a === void 0 ? void 0 : _a.delete('filters');
        window.history.pushState({}, '', url.toString());
      }
      salla.event.emit('salla-filters::changed', this.filtersData);
      this.changed.emit(this.filtersData);
    }, 300);
  }
  /**
   * Reset selected filters.
   */
  async resetFilters() {
    this.filtersData = {};
    this.host.childNodes.forEach((widget) => widget.reset && widget.reset());
    salla.event.emit('salla-filters::reset');
    return this.applyFilters();
  }
  /**
   * @param {{target:HTMLInputElement}} event
   * @param option
   * @param value
   * @private
   */
  handleOptionChange(event, option, value) {
    if (option.type === FilterOptionTypes.RANGE) {
      this.filtersData[option.key] = value;
      return;
    }
    let isChecked = event.target.checked;
    if (option.type === FilterOptionTypes.VARIANTS) {
      this.filtersData.variants = this.filtersData.variants || {};
      isChecked && (this.filtersData.variants[option.key] = value);
      isChecked || (delete this.filtersData.variants[option.key]);
      return;
    }
    if (event.target.type == FilterOptionInputType.RADIO) {
      isChecked && (this.filtersData[option.key] = value);
      isChecked || (delete this.filtersData[option.key]);
      return;
    }
    //it's checkbox
    this.filtersData[option.key] = this.filtersData[option.key] || [];
    if (isChecked) {
      this.filtersData[option.key].push(value);
      return;
    }
    this.filtersData[option.key] = this.filtersData[option.key].filter(val => val != value);
  }
  render() {
    var _a, _b;
    return h(Host, null, (_a = this.filters) === null || _a === void 0 ? void 0 :
      _a.map(option => h("salla-filters-widget", { option: option, filtersData: this.filtersData, onChanged: ({ detail: { event, option, value } }) => this.handleOptionChange(event, option, value) })), ((_b = this.filters) === null || _b === void 0 ? void 0 : _b.length) ? h("div", { class: "s-filters-footer" }, h("salla-button", { color: 'primary', onClick: () => this.applyFilters() }, this.apply), h("salla-button", { color: 'gray', fill: 'outline', onClick: () => this.resetFilters() }, this.reset)) : '');
  }
  componentDidLoad() {
    this.isReady = true;
  }
  get host() { return this; }
  static get style() { return sallaFiltersCss; }
}, [0, "salla-filters", {
    "filters": [1040],
    "isSidebarOpen": [32],
    "filtersData": [32],
    "apply": [32],
    "reset": [32],
    "getFilters": [64],
    "applyFilters": [64],
    "resetFilters": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-filters", "salla-button", "salla-filters-widget", "salla-price-range", "salla-rating-stars"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-filters":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaFilters$1);
      }
      break;
    case "salla-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "salla-filters-widget":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "salla-price-range":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "salla-rating-stars":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const SallaFilters = SallaFilters$1;
const defineCustomElement = defineCustomElement$1;

export { SallaFilters, defineCustomElement };

//# sourceMappingURL=salla-filters.js.map