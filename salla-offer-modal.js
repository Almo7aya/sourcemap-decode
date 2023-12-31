/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$7 } from './salla-button2.js';
import { d as defineCustomElement$6 } from './salla-loading2.js';
import { d as defineCustomElement$5 } from './salla-modal2.js';
import { d as defineCustomElement$4 } from './salla-placeholder2.js';
import { d as defineCustomElement$3 } from './salla-skeleton2.js';
import { d as defineCustomElement$2 } from './salla-slider2.js';

const SpecialDiscountIcon = `<!-- Generated by IcoMoon.io -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>special-discount</title>
<path d="M20.667 19.333c-0.737 0-1.333 0.596-1.333 1.333v0.013c0 0.737 0.596 1.327 1.333 1.327s1.333-0.603 1.333-1.34-0.596-1.333-1.333-1.333zM11.333 12.673c0.737 0 1.333-0.603 1.333-1.34s-0.596-1.333-1.333-1.333-1.333 0.596-1.333 1.333v0.013c0 0.736 0.596 1.327 1.333 1.327zM30.307 16l0.947-4.244c0.107-0.473-0.055-0.969-0.417-1.291l-3.259-2.876-1.732-3.987c-0.193-0.444-0.612-0.749-1.095-0.796l-4.327-0.417-3.748-2.204c-0.416-0.248-0.933-0.248-1.353 0l-3.744 2.204-4.329 0.417c-0.483 0.047-0.901 0.352-1.095 0.796l-1.732 3.987-3.259 2.877c-0.363 0.321-0.525 0.816-0.417 1.289l0.947 4.244-0.947 4.244c-0.107 0.473 0.055 0.969 0.417 1.291l3.259 2.876 1.732 3.987c0.193 0.444 0.612 0.749 1.095 0.796l4.325 0.416 3.749 2.207c0.208 0.123 0.441 0.184 0.676 0.184s0.468-0.061 0.676-0.185l3.747-2.205 4.328-0.416c0.483-0.045 0.903-0.351 1.095-0.796l1.732-3.985 3.259-2.877c0.363-0.321 0.525-0.816 0.417-1.291zM28.48 20.056l-2.892 2.552c-0.145 0.131-0.261 0.291-0.34 0.469l-1.536 3.536-3.84 0.369c-0.195 0.019-0.381 0.080-0.551 0.179l-3.321 1.959-3.324-1.959c-0.168-0.099-0.356-0.16-0.549-0.179l-3.839-0.369-1.536-3.537c-0.077-0.18-0.195-0.339-0.34-0.469l-2.892-2.551 0.84-3.765c0.043-0.192 0.043-0.389 0-0.581l-0.84-3.765 2.892-2.551c0.145-0.131 0.263-0.289 0.34-0.469l1.536-3.539 3.84-0.369c0.195-0.019 0.381-0.080 0.549-0.179l3.323-1.957 3.325 1.957c0.167 0.099 0.355 0.16 0.548 0.179l3.839 0.369 1.536 3.539c0.077 0.18 0.195 0.339 0.34 0.469l2.892 2.551-0.84 3.765c-0.043 0.192-0.043 0.389 0 0.581zM20.391 9.724l-10.667 10.667c-0.521 0.521-0.521 1.364 0 1.885 0.26 0.26 0.601 0.391 0.943 0.391s0.683-0.131 0.943-0.391l10.667-10.667c0.521-0.521 0.521-1.364 0-1.885s-1.364-0.521-1.885 0z"></path>
</svg>
`;

const Tag = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>tag</title>
<path d="M28 0h-9.344c-1.059 0-2.056 0.411-2.809 1.153l-14.673 14.456c-1.56 1.56-1.561 4.097-0.001 5.657l9.56 9.56c0.755 0.755 1.76 1.172 2.828 1.173h0.003c1.068 0 2.072-0.416 2.833-1.179l14.451-14.668c0.743-0.753 1.153-1.751 1.153-2.809v-9.344c0-2.205-1.795-4-4-4zM29.333 13.344c0 0.353-0.137 0.685-0.385 0.937l-14.444 14.661c-0.252 0.252-0.587 0.391-0.941 0.391-0.001 0-0.001 0-0.001 0-0.356-0.001-0.691-0.139-0.943-0.392l-9.561-9.56c-0.52-0.52-0.52-1.365-0.005-1.88l14.667-14.449c0.253-0.248 0.585-0.385 0.937-0.385h9.344c0.736 0 1.333 0.597 1.333 1.333zM24 6.673c-0.737 0-1.333 0.604-1.333 1.341s0.596 1.333 1.333 1.333 1.333-0.596 1.333-1.333v-0.015c0-0.737-0.596-1.327-1.333-1.327z"></path>
</svg>
`;

const Cart2 = `<!-- Generated by IcoMoon.io -->
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
<title>cart2</title>
<path d="M6.845 5.333l-1.905-5.333h-3.607c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0h1.727l5.72 16.012c0.569 1.56 2.039 2.654 3.765 2.655h12.133c0.001 0 0.002 0 0.003 0 1.825 0 3.364-1.222 3.845-2.892l0.007-0.028 3.161-13.080zM25.96 17.716c-0.167 0.554-0.672 0.951-1.27 0.951-0.002 0-0.005 0-0.007-0h-12.133c-0.575-0-1.065-0.364-1.252-0.875l-0.003-0.009-3.497-9.783h20.508zM13.333 24c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4v0c0-2.209-1.791-4-4-4v0zM13.333 29.333c-0.736 0-1.333-0.597-1.333-1.333s0.597-1.333 1.333-1.333c0.736 0 1.333 0.597 1.333 1.333v0c0 0.736-0.597 1.333-1.333 1.333v0zM24 24c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4v0c0-2.209-1.791-4-4-4v0zM24 29.333c-0.736 0-1.333-0.597-1.333-1.333s0.597-1.333 1.333-1.333c0.736 0 1.333 0.597 1.333 1.333v0c0 0.736-0.597 1.333-1.333 1.333v0z"></path>
</svg>
`;

const sallaOfferModalCss = "";

const SallaOfferModal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    var _a, _b;
    this.offer = null;
    this.offer_name = undefined;
    this.offer_message = undefined;
    this.hasError = false;
    this.errorMessage = undefined;
    this.productID = undefined;
    this.offer_type = undefined;
    this.translationLoaded = false;
    this.addToCartLabel = salla.lang.get("pages.cart.add_to_cart");
    salla.event.on('offer-modal::open', product_id => this.open(product_id));
    salla.lang.onLoaded(() => {
      this.addToCartLabel = salla.lang.get("pages.cart.add_to_cart");
      this.translationLoaded = true;
    });
    this.categorySlot = ((_a = this.host.querySelector('[slot="category"]')) === null || _a === void 0 ? void 0 : _a.innerHTML) || `<span class="s-offer-modal-badge-icon">{tagIcon}</span><span class="s-offer-modal-badge-text">{name}</span>`;
    this.productSlot = ((_b = this.host.querySelector('[slot="product"]')) === null || _b === void 0 ? void 0 : _b.innerHTML) || this.defaultProductSlot();
    salla.event.on('offer-modal::open', product_id => this.open(product_id));
    salla.product.event.onOfferExisted(offer => {
      if (salla.storage.get('remember-offer-' + offer.id)) {
        salla.log('User selected to don\'t show this offer again.');
        return;
      }
      this.open(offer.product_id);
    });
  }
  /**
   * Show the available offers for the product
   * @param product_id
   */
  async open(product_id) {
    this.productID = product_id;
    //TODO:: make sure there is only one offer
    this.hasError = false;
    this.modal.open();
    return await salla.api.withoutNotifier(() => salla.product.offers(product_id))
      .then(response => this.showOffer(response.data[0]))
      .catch(e => {
      var _a, _b, _c, _d;
      this.hasError = true;
      this.errorMessage = ((_c = (_b = (_a = e.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.message) || ((_d = e.response) === null || _d === void 0 ? void 0 : _d.data);
    })
      .finally(() => setTimeout(() => this.modal.stopLoading(), 1000));
  }
  /**
   * Show offer details
   * @param {Offer} offer
   */
  async showOffer(offer) {
    var _a, _b;
    this.offer = offer;
    this.offer_name = offer.name;
    this.offer_message = offer.message;
    if (this.offer.get.discounts_table) {
      this.offer_type = 'discounts-table';
    }
    else if ((_a = this.offer.get.products) === null || _a === void 0 ? void 0 : _a.length) {
      this.offer_type = 'products';
    }
    else if ((_b = this.offer.get.categories) === null || _b === void 0 ? void 0 : _b.length) {
      this.offer_type = 'categories';
    }
    this.modal.setTitle(this.offer_name);
  }
  rememberMe(event) {
    salla.storage.set('remember-offer-' + this.offer.id, event.target.checked);
  }
  addToCart(qty) {
    //todo:: add enhancement, to cover the previous quantity, because if the discount to add two, user already added one before.
    salla.api.withoutNotifier(() => salla.cart.quickAdd(this.productID, qty)).then(() => this.modal.close());
  }
  getOfferContent() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (this.offer.get.discounts_table) {
      return h("div", { class: "s-offer-modal-discount-table" }, h("table", null, h("tbody", null, (_a = this.offer.get.discounts_table) === null || _a === void 0 ? void 0 : _a.map(discount => h("tr", null, h("td", null, discount.text), h("td", { class: "s-offer-modal-discount-table-cell" }, h("salla-button", { fill: "outline", shape: "btn", color: "primary", size: "medium", width: "normal", onClick: () => this.addToCart(discount.quantity) }, this.addToCartLabel)))))));
    }
    else if ((_b = this.offer.get.products) === null || _b === void 0 ? void 0 : _b.length) {
      return h("salla-slider", { type: "carousel", class: { "s-offer-modal-slider-centered": ((_c = this.offer.get.products) === null || _c === void 0 ? void 0 : _c.length) <= 2, "s-offer-modal-slider": true }, id: "offer-modal-slider", "controls-outer": true, "show-controls": ((_d = this.offer.get.products) === null || _d === void 0 ? void 0 : _d.length) <= 2 ? 'false' : 'true' }, h("div", { slot: 'items' }, (_e = this.offer.get.products) === null || _e === void 0 ? void 0 : _e.map(product => h("div", { class: {
          "s-offer-modal-product": true,
          "s-offer-modal-slider-item": true,
          "s-offer-modal-not-available": !product.is_available
        }, id: 'product_' + product.id, innerHTML: this.productSlot
          .replace(/\{name\}/g, product.name)
          .replace(/\{url\}/g, product.url)
          .replace(/\{image\}/g, product.thumbnail)
          .replace(/\{price\}/g, product.has_special_price
          ? '<span class="s-offer-modal-product-sale-price">' + salla.money(product.price) + '</span><span class="s-offer-modal-product-old-price">' + salla.money(product.regular_price) + '</span>'
          : salla.money(product.price)) }, h("div", { class: "s-offer-modal-btn-wrap" }, h("salla-button", { width: "wide", fill: 'outline', "data-id": product.id, disabled: !product.is_available, "loader-position": "center", onClick: this.addItem }, product.is_available ? salla.lang.get('pages.cart.add_to_cart') : salla.lang.get('pages.products.out_of_stock')))))));
    }
    else if ((_f = this.offer.get.categories) === null || _f === void 0 ? void 0 : _f.length) {
      return h("salla-slider", { type: "carousel", class: { "s-offer-modal-slider-centered": ((_g = this.offer.get.categories) === null || _g === void 0 ? void 0 : _g.length) <= 2, "s-offer-modal-slider": true }, id: "offer-modal-slider", "controls-outer": true, "show-controls": ((_h = this.offer.get.categories) === null || _h === void 0 ? void 0 : _h.length) <= 2 ? 'false' : 'true' }, h("div", { slot: 'items' }, this.offer.get.categories.map(category => h("a", { href: category.urls.customer, class: "s-offer-modal-badge s-offer-modal-slider-item s-offer-modal-cat-item", innerHTML: this.categorySlot
          .replace(/\{tagIcon\}/g, Tag)
          .replace(/\{name\}/g, category.name)
          .replace(/\{url\}/g, category.urls.customer) }))));
    }
  }
  //todo:: pass event then use sallaButton from it
  addItem() {
    // this here, is sallaButton
    this['load']();
    return salla.cart.api
      .quickAdd(this['dataset'].id)
      .finally(() => this['stop']());
  }
  defaultProductSlot() {
    return '<a href={url} class="s-offer-modal-product-image-wrap"><img class="s-offer-modal-product-image" src="{image}" /></a>' +
      '<div class="s-offer-modal-product-info">' +
      '   <a href={url} class="s-offer-modal-product-name">{name}</a>' +
      '   <div class="s-offer-modal-product-price">{price}</div>' +
      '</div>';
  }
  render() {
    return h("salla-modal", { "has-skeleton": true, "sub-title": this.offer_message, ref: modal => this.modal = modal, isLoading: true, class: `s-offer-modal-type-${this.offer_type ? this.offer_type : ''}` }, h("div", { slot: 'loading' }, h("div", { class: "s-offer-modal-skeleton" }, h("div", { class: "s-offer-modal-skeleton-header" }, h("salla-skeleton", { type: 'circle', height: '80px', width: '80px' }), h("salla-skeleton", { height: '15px', width: '50%' }), h("salla-skeleton", { height: '10px', width: '30%' })), h("div", { class: "s-offer-modal-skeleton-items" }, [...Array(3)].map(() => h("div", { class: "s-offer-modal-skeleton-item" }, h("salla-skeleton", { height: '9rem' }), h("div", { class: "s-offer-modal-skeleton-item-title" }, h("salla-skeleton", { height: '15px', width: '100%' })), h("div", { class: "s-offer-modal-skeleton-item-subtitle" }, h("salla-skeleton", { height: '9px', width: '50%' }), h("div", { innerHTML: Cart2 }))))), h("div", { class: "s-offer-modal-skeleton-footer" }, h("salla-skeleton", { height: '15px', width: '50%' }), h("salla-skeleton", { height: '15px', width: '30%' })))), !this.hasError && this.offer !== null
      ? [h("span", { slot: 'icon', class: "s-offer-modal-header-icon", innerHTML: SpecialDiscountIcon }), this.getOfferContent(), h("div", { class: "s-offer-modal-footer", slot: "footer" }, this.offer.formatted_date ?
          h("p", { class: "s-offer-modal-expiry" }, salla.lang.get('pages.products.offer_expires_in'), " ", this.offer.formatted_date)
          : '', h("label", { class: "s-offer-modal-remember-label" }, h("input", { type: "checkbox", onChange: e => this.rememberMe(e), class: "s-offer-modal-remember-input" }), "\u00A0 ", salla.lang.get('common.elements.remember_my_choice'))),
      ] :
      h("salla-placeholder", { class: "s-loyalty-placeholder", alignment: "center" }, !!this.errorMessage ? h("span", { slot: "description" }, this.errorMessage) : ''));
  }
  get host() { return this; }
  static get style() { return sallaOfferModalCss; }
}, [0, "salla-offer-modal", {
    "offer": [32],
    "offer_name": [32],
    "offer_message": [32],
    "hasError": [32],
    "errorMessage": [32],
    "productID": [32],
    "offer_type": [32],
    "translationLoaded": [32],
    "addToCartLabel": [32],
    "open": [64],
    "showOffer": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-offer-modal", "salla-button", "salla-loading", "salla-modal", "salla-placeholder", "salla-skeleton", "salla-slider"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-offer-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaOfferModal$1);
      }
      break;
    case "salla-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "salla-loading":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "salla-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "salla-placeholder":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "salla-skeleton":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "salla-slider":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const SallaOfferModal = SallaOfferModal$1;
const defineCustomElement = defineCustomElement$1;

export { SallaOfferModal, defineCustomElement };

//# sourceMappingURL=salla-offer-modal.js.map