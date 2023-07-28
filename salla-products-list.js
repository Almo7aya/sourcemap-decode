/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { H as Helper } from './Helper.js';

const ShoppingBag = `<!-- Generated by IcoMoon.io -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>shopping-bag</title>
<path d="M28 10.667h-4v-2.667c0-4.412-3.588-8-8-8s-8 3.588-8 8v2.667h-4c-0.736 0-1.333 0.596-1.333 1.333v13.333c0 3.676 2.991 6.667 6.667 6.667h13.333c3.676 0 6.667-2.991 6.667-6.667v-13.333c0-0.737-0.597-1.333-1.333-1.333zM10.667 8c0-2.941 2.392-5.333 5.333-5.333s5.333 2.392 5.333 5.333v2.667h-10.667zM26.667 25.333c0 2.205-1.795 4-4 4h-13.333c-2.205 0-4-1.795-4-4v-12h2.667v2.667c0 0.737 0.597 1.333 1.333 1.333s1.333-0.596 1.333-1.333v-2.667h10.667v2.667c0 0.737 0.597 1.333 1.333 1.333s1.333-0.596 1.333-1.333v-2.667h2.667z"></path>
</svg>
`;

const sallaProductsListCss = "";

const SallaProductsList$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.productsFetched = createEvent(this, "productsFetched", 7);
    this.source = undefined;
    this.sourceValue = undefined;
    this.limit = undefined;
    this.sortBy = undefined;
    this.filtersResults = undefined;
    this.horizontalCards = undefined;
    this.page = 1;
    this.nextPage = undefined;
    this.hasInfiniteScroll = undefined;
    this.hasCustomComponent = undefined;
    this.sourceValueIsValid = undefined;
    this.placeholderText = undefined;
    this.isReady = undefined;
    this.showPlaceholder = undefined;
    this.parsedFilters = undefined;
  }
  connectedCallback() {
    salla.onReady(() => {
      this.hasCustomComponent = !!customElements.get('custom-salla-product-card');
      this.sourceValueIsValid = !!(this.getSourceValue() || this.isSourceWithoutValue());
      this.hasInfiniteScroll = !['json', 'selected', 'related', 'landing-page'].includes(this.getSource());
      try {
        let searchParams = new URLSearchParams(window.location.search);
        this.sortBy = this.sortBy || searchParams.get('sort') || searchParams.get('by');
        let filters = searchParams.get('filters');
        this.parsedFilters = filters ? JSON.parse(decodeURIComponent(filters)) : {};
      }
      catch (e) {
        salla.logger.warn('failed to get filters from url', e.message);
      }
      this.buildNextPageUrl();
      this.createStatusDom();
      this.isReady = true;
    });
    if (!this.sourceValueIsValid) {
      salla.logger.warn(`source-value prop is required for source [${this.getSource()}]`);
      return;
    }
    salla.event.on('salla-filters::changed', filters => this.setFilters(filters));
  }
  /**
   * Set parsed filters data from URI
   * @param filters
   */
  async setFilters(filters) {
    if (!!filters && JSON.stringify(this.parsedFilters) === JSON.stringify(filters)) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.parsedFilters = filters;
    return this.reload();
  }
  /**
   * Reload the list of products (entire content of the component).
   */
  async reload() {
    salla.infiniteScroll.destroy(this.infiniteScroll);
    this.buildNextPageUrl();
    // TODO: this is problematic in testing, for the time being it's been resolved like this
    this.wrapper.innerHTML = '';
    this.init();
  }
  isFilterable() {
    return salla.config.get('store.settings.product.filters') && this.filtersResults;
  }
  isSourceWithoutValue() {
    return ['offers', 'latest', 'sales'].includes(this.getSource());
  }
  animateItems() {
    anime({
      targets: 'salla-products-list salla-product-card',
      opacity: [0, 1],
      duration: 1200,
      translateY: [20, 0],
      delay: function (_el, i) {
        return i * 100;
      },
    });
  }
  createStatusDom() {
    this.status = document.createElement('div');
    this.status.className = 's-infinite-scroll-wrapper';
    this.status.innerHTML = `<div class="s-infinite-scroll-status">
        <p class="s-infinite-scroll-last infinite-scroll-last s-hidden" >${salla.lang.get('common.elements.end_of_content')}</p>
        <p class="s-infinite-scroll-error infinite-scroll-error s-hidden">${salla.lang.get('common.elements.failed_to_load_more')}</p>
      </div>
      <a href="#" class="s-infinite-scroll-btn s-button-btn">
        <span class="s-button-loader s-button-loader-center s-infinite-scroll-btn-loader" style="display: none"></span>
      </a>`;
    this.btnLoader = this.status.querySelector('.s-button-loader');
    salla.lang.onLoaded(() => {
      this.status.querySelector('.s-infinite-scroll-last').innerHTML = salla.lang.get('common.elements.end_of_content');
      this.status.querySelector('.s-infinite-scroll-error').innerHTML = salla.lang.get('common.elements.failed_to_load_more');
      this.placeholderText = salla.lang.get('pages.categories.no_products');
    });
  }
  initBaseNextPageUrl(source) {
    this.nextPage = salla.url.api(`products?source=${source}`);
    if (this.limit) {
      this.nextPage += `&per_page=${this.limit > 32 ? 32 : this.limit}`;
    }
    if (this.sortBy) {
      this.nextPage += `&sort=${this.sortBy}`;
    }
    // if (!this.isFilterable()) {
    //   return this.nextPage;
    // }
    this.nextPage += '&filterable=1';
    for (const [key, value] of Object.entries(this.parsedFilters || {})) {
      if (["string", "number"].includes(typeof value)) {
        // @ts-ignore
        this.nextPage += `&filters[${encodeURIComponent(key)}]=${encodeURIComponent(value)}`;
      }
      else if (Array.isArray(value)) {
        value.forEach(item => this.nextPage += `&filters[${encodeURIComponent(key)}][]=${encodeURIComponent(item)}`);
      }
      else if (typeof value === 'object') {
        for (const [k, v] of Object.entries(value)) {
          this.nextPage += `&filters[${encodeURIComponent(key)}][${encodeURIComponent(k)}]=${encodeURIComponent(v)}`;
        }
      }
    }
  }
  buildNextPageUrl() {
    let source = this.getSource();
    if (source === 'json') {
      return;
    }
    this.initBaseNextPageUrl(source);
    if (this.isSourceWithoutValue()) {
      return;
    }
    if (['search', 'related', 'landing-page'].includes(source)) {
      this.nextPage += `&source_value=${this.getSourceValue()}`;
      return;
    }
    try {
      this.nextPage += `&source_value[]=${this.getSourceValue().join('&source_value[]=')}`;
    }
    catch (e) {
      salla.logger.warn(`source-value prop should be array of ids ex source-value="[1,2,3]" for the source [${source}]`);
      this.sourceValueIsValid = false;
    }
  }
  loading(isLoading = true) {
    this.btnLoader.style.display = isLoading ? 'inherit' : 'none';
  }
  getItemHTML(product) {
    const customComponentTag = this.hasCustomComponent ? 'custom-salla-product-card' : 'salla-product-card';
    const productCard = document.createElement(customComponentTag);
    productCard.product = product;
    this.applyLandingPageStyles(productCard);
    this.applyHorizontalCardStyles(productCard);
    return productCard;
  }
  applyLandingPageStyles(productCard) {
    if (this.getSource() === 'landing-page' && !this.hasCustomComponent) {
      productCard.toggleAttribute('hide-add-btn', true);
      productCard.classList.add('s-product-card-fit-height');
    }
  }
  applyHorizontalCardStyles(productCard) {
    if (!this.horizontalCards) {
      return;
    }
    productCard.setAttribute('horizontal', true);
    if (!this.hasCustomComponent) {
      productCard.setAttribute('shadow-on-hover', true);
    }
  }
  getSource() {
    return Helper.getProductsSource(this.source);
  }
  getSourceValue() {
    return Helper.getProductsSourceValue(this.source, this.sourceValue);
  }
  fetchProducts() {
    salla.product.api.fetch({
      source: this.getSource(),
      source_value: this.getSourceValue(),
      limit: this.limit
    })
      .then(res => {
      if (!res.data.length) {
        this.showPlaceholder = true;
        this.loading(false);
        return;
      }
      this.handleResponse(res).forEach(card => this.wrapper.append(card));
    });
  }
  initiateInfiniteScroll() {
    var _a, _b, _c;
    if (!this.hasInfiniteScroll) {
      return;
    }
    this.host.insertAdjacentElement('beforeend', this.status);
    this.infiniteScroll = salla.infiniteScroll.initiate(this.wrapper, this.wrapper, {
      path: () => this.nextPage,
      history: false,
      nextPage: this.nextPage,
      scrollThreshold: 100,
    }, /* infinite via api*/ true);
    (_a = this.infiniteScroll) === null || _a === void 0 ? void 0 : _a.on('request', () => this.loading());
    (_b = this.infiniteScroll) === null || _b === void 0 ? void 0 : _b.on('load', response => {
      var _a;
      if (!((_a = response.data) === null || _a === void 0 ? void 0 : _a.length) && this.infiniteScroll.pageIndex == 2) {
        this.showPlaceholder = true;
        salla.infiniteScroll.destroy(this.infiniteScroll);
        this.loading(false);
        return;
      }
      else {
        this.showPlaceholder = false;
      }
      this.infiniteScroll.appendItems(this.handleResponse(response));
      if (this.infiniteScroll.pageIndex == 2) {
        this.animateItems();
      }
    });
    (_c = this.infiniteScroll) === null || _c === void 0 ? void 0 : _c.on('error', () => {
      this.status.querySelector('.s-infinite-scroll-error').classList.remove('s-hidden');
      this.loading(false);
    });
    salla.onReady(() => salla.infiniteScroll.loadNextPage(this.infiniteScroll));
  }
  canRender() {
    return this.sourceValueIsValid && this.isReady;
  }
  render() {
    if (!this.canRender()) {
      return '';
    }
    if (this.showPlaceholder) {
      return h("div", { class: "s-products-list-placeholder" }, h("span", { innerHTML: ShoppingBag }), h("p", null, this.placeholderText));
    }
    return (h(Host, { class: "s-products-list" }, h("div", { class: {
        "s-products-list-wrapper": true,
        's-products-list-horizontal-cards': this.horizontalCards && !this.filtersResults,
        's-products-list-vertical-cards': !this.horizontalCards && !this.filtersResults,
        's-products-list-filters-results': this.filtersResults,
      }, ref: wrapper => this.wrapper = wrapper })));
  }
  componentDidLoad() {
    if (!this.canRender()) {
      return;
    }
    // Handle json source
    if (this.getSource() === 'json') {
      if (!this.getSourceValue().length) {
        this.showPlaceholder = true;
        return;
      }
      this.getSourceValue().map(product => this.wrapper.append(this.getItemHTML(product)));
      return;
    }
    // Handle selected source
    if (this.getSource() === 'selected' || this.getSource() === 'landing-page') {
      if (this.getSource() === 'selected' && !this.getSourceValue().length) {
        this.showPlaceholder = true;
        return;
      }
      this.fetchProducts();
      return;
    }
    this.init();
  }
  init() {
    this.initiateInfiniteScroll();
    this.loading();
  }
  handleResponse(response) {
    var _a, _b, _c, _d, _e, _f;
    let source = this.getSource();
    let title = '';
    //help the developer to know the current page title
    if (((_a = response.cursor) === null || _a === void 0 ? void 0 : _a.current) === 1) {
      title = Helper.getPageTitleForSource(source);
      try {
        if (this.getSource() === 'search') {
          title = salla.lang.get('common.elements.search_about', { 'word': this.getSourceValue() });
        }
        else if (!title) {
          let catId = this.parsedFilters.category_id || this.getSourceValue()[0];
          // get the first filter that its key is category_id, then get the value when filter.value.*.key==catId
          title = ((_d = (_c = (_b = response.filters.find(filter => filter.key == 'category_id')) === null || _b === void 0 ? void 0 : _b.values) === null || _c === void 0 ? void 0 : _c.find(cat => cat.key == catId)) === null || _d === void 0 ? void 0 : _d.value) || '';
        }
        title += (title ? ' - ' : '') + salla.lang.choice('blocks.header.products_count', (_e = response.data) === null || _e === void 0 ? void 0 : _e.length);
        if (response.data.length === 20) {
          title = title.replace(response.data.length, salla.lang.get('common.elements.more_than') + ' ' + response.data.length);
        }
        response.title = title;
      }
      catch (e) { }
    }
    salla.event.emit('salla-products-list::products.fetched', response);
    this.productsFetched.emit(response);
    //💡 when source is related, cursor will not be existed
    if (response.filters && this.isFilterable()) {
      this.filtersResults = true;
      salla.event.emit('filters::fetched', { filters: response.filters });
    }
    else if (this.isFilterable()) {
      salla.event.emit('filters::hidden');
    }
    this.nextPage = response.cursor ? response.cursor.next : this.nextPage;
    this.loading(false);
    if (this.hasInfiniteScroll && !this.nextPage) {
      this.infiniteScroll.option({ scrollThreshold: false, loadOnScroll: false });
      this.status.querySelector('.s-infinite-scroll-last').classList.remove('s-hidden');
    }
    return ((_f = response.data) === null || _f === void 0 ? void 0 : _f.map(product => this.getItemHTML(product))) || [];
  }
  get host() { return this; }
  static get style() { return sallaProductsListCss; }
}, [0, "salla-products-list", {
    "source": [1537],
    "sourceValue": [1032, "source-value"],
    "limit": [1026],
    "sortBy": [1025, "sort-by"],
    "filtersResults": [1540, "filters-results"],
    "horizontalCards": [516, "horizontal-cards"],
    "page": [32],
    "nextPage": [32],
    "hasInfiniteScroll": [32],
    "hasCustomComponent": [32],
    "sourceValueIsValid": [32],
    "placeholderText": [32],
    "isReady": [32],
    "showPlaceholder": [32],
    "parsedFilters": [32],
    "setFilters": [64],
    "reload": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-products-list"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-products-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaProductsList$1);
      }
      break;
  } });
}

const SallaProductsList = SallaProductsList$1;
const defineCustomElement = defineCustomElement$1;

export { SallaProductsList, defineCustomElement };

//# sourceMappingURL=salla-products-list.js.map