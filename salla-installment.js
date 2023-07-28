/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const sallaInstallmentCss = "salla-installment:empty{display:none}#tabbyPromoWrapper{background:white;border-radius:0.375rem;-webkit-transition:-webkit-box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);margin-bottom:20px}.salla-y #tabbyPromoWrapper{border:1px solid var(--color-grey-dark);border-radius:12px}#tabbyPromoWrapper:hover{-webkit-box-shadow:0 0 #0000, 0 0 #0000, 5px 10px 30px #2B2D340D;box-shadow:0 0 #0000, 0 0 #0000, 5px 10px 30px #2B2D340D}#tabbyPromoWrapper #tabbyPromo *{font-family:var(--font-main)}#tabbyPromoWrapper #tabbyPromo>div>div{max-width:none;-webkit-box-shadow:none;box-shadow:none;border:none}#tabbyPromoWrapper #tabbyPromo .tabby-promo-snippet{max-width:100%;min-height:100px;padding:18px 20px;border:none !important}#tabbyPromoWrapper #tabbyPromo .tabby-promo-snippet__text,#tabbyPromoWrapper #tabbyPromo .tabby-promo-snippet__link{font-size:var(--font-sm);color:var(--color-text) !important}#tabbyPromoWrapper #tabbyPromo .tabby-promo-snippet__link{font-weight:bold}.tabby-promo-wrapper #tabby-promo{font-family:var(--font-main) !important}.tabby-promo-wrapper #tabby-promo .tabby-promo__feature-title{font-size:var(--font-md)}.tabby-promo-wrapper #tabby-promo .tabby-promo__feature-desc{font-size:var(--font-sm);line-height:20px}.tamara-product-widget{margin-bottom:20px}.tamara-product-widget,.spotii-wrapper{min-height:100px;position:relative;color:var(--color-text);font-size:var(--font-sm);line-height:1.25;padding:18px 20px 18px 100px !important;background:white;border-radius:0.375rem;-webkit-transition:-webkit-box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)}.salla-y .tamara-product-widget,.salla-y .spotii-wrapper{border-radius:12px;border:1px solid var(--color-grey-dark)}.tamara-product-widget:hover,.spotii-wrapper:hover{-webkit-box-shadow:0 0 #0000, 0 0 #0000, 5px 10px 30px #2B2D340D;box-shadow:0 0 #0000, 0 0 #0000, 5px 10px 30px #2B2D340D}.tamara-product-widget .spotii-logo,.spotii-wrapper .spotii-logo{float:left;margin:0 0 0 -75px}.ltr .tamara-product-widget,.ltr .spotii-wrapper{text-align:left;padding:18px 100px 18px 20px !important}.ltr .tamara-product-widget .spotii-logo,.ltr .spotii-wrapper .spotii-logo{float:right;margin:0 -75px 0 0}.ltr .tamara-product-widget .spotii-product-widget,.ltr .spotii-wrapper .spotii-product-widget{text-align:left !important}.spotii-wrapper{margin-bottom:20px}.spotii-wrapper .spotii-promo{font-size:var(--font-md)}.spotii-wrapper .spotii-product-widget{font-size:var(--font-sm) !important;margin-top:10px}.tamara-product-widget .tamara-logo{position:absolute;left:20px;top:18px;margin:0 !important}.ltr .tamara-product-widget .tamara-logo{right:20px;left:auto}.tamara-product-widget span{font-family:var(--font-main);font-size:var(--font-sm);color:var(--color-text)}.tamara-product-widget span:last-child{display:block;position:relative;margin-top:8px}.tamara-popup__wrap{overflow:auto !important}";

const SallaInstallment$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.tabbyBorderRemoved = false;
    this.tabbyRemoveBorderTries = 0;
    this.price = undefined;
    this.language = salla.config.get('user.language_code');
    this.currency = salla.config.get('user.currency_code');
    this.tamaraIsActive = undefined;
    this.tabbyIsActive = undefined;
    this.spotiiIsActive = undefined;
    salla.lang.onLoaded(() => {
      const installment = salla.config.get('store.settings.installments');
      if (installment) {
        this.tamaraIsActive = installment.includes('tamara_installment');
        this.tabbyIsActive = installment.includes('tabby_installment');
        this.spotiiIsActive = installment.includes('spotii_pay');
      }
      this.renderInstallments();
    });
    salla.event.on('product::price.updated', ({ data }) => {
      if (!data.price || data.price == this.price) {
        return;
      }
      this.price = data.price;
      this.renderInstallments(true);
    });
  }
  render() {
    return (h(Host, null, this.tamaraIsActive ?
      h("div", { class: "tamara-product-widget", "data-price": this.price, "data-currency": this.currency, "data-lang": this.language, "data-payment-type": "installment" })
      : '', this.tabbyIsActive ?
      h("div", { id: "tabbyPromoWrapper" }, h("div", { id: "tabbyPromo" }))
      : '', this.spotiiIsActive ?
      h("div", { class: "spotii-wrapper" }, h("div", { class: "spotii-promo" }))
      : ''));
  }
  renderInstallments(isUpdating = false) {
    // Tamara
    if (this.tamaraIsActive) {
      if (isUpdating) {
        var oldTamaraScript = document.querySelector('script[src="https://cdn.tamara.co/widget/product-widget.min.js"]');
        if (oldTamaraScript) {
          oldTamaraScript.remove();
        }
      }
      var tamaraScript = document.createElement('script');
      tamaraScript.setAttribute('src', 'https://cdn.tamara.co/widget/product-widget.min.js');
      document.head.appendChild(tamaraScript);
      tamaraScript.onload = () => {
        window.TamaraProductWidget.init({ lang: this.language });
        setTimeout(() => {
          window.TamaraProductWidget.render();
        }, 300);
      };
    }
    // tabby
    if (this.tabbyIsActive) {
      if (isUpdating) {
        // remove #tabbyPromoWrapper and re append it
        var oldTabbyWrapper = this.host.querySelector('#tabbyPromoWrapper');
        if (oldTabbyWrapper) {
          oldTabbyWrapper.remove();
        }
        var tabbyPromoWrapper = document.createElement('div');
        tabbyPromoWrapper.setAttribute('id', 'tabbyPromoWrapper');
        var tabbyPromo = document.createElement('div');
        tabbyPromo.setAttribute('id', 'tabbyPromo');
        tabbyPromoWrapper.appendChild(tabbyPromo);
        this.host.appendChild(tabbyPromoWrapper);
        var oldTabbyScript = document.querySelector('script[src="https://checkout.tabby.ai/tabby-promo.js"]');
        if (oldTabbyScript) {
          oldTabbyScript.remove();
        }
      }
      var tabbyScript = document.createElement('script');
      tabbyScript.setAttribute('src', 'https://checkout.tabby.ai/tabby-promo.js');
      document.head.appendChild(tabbyScript);
      tabbyScript.onload = () => {
        const TabbyPromo = window.TabbyPromo;
        new TabbyPromo({
          selector: '#tabbyPromo',
          currency: this.currency,
          price: this.price,
          lang: this.language,
        });
        document.querySelectorAll('.tabby-promo-snippet__logo').forEach(function (element) {
          element.setAttribute('aria-label', 'Tabby Logo');
        });
      };
      // this is a workaround to remove the default border and add margin
      this.removeTabbyBorder();
    }
    // Spotii
    if (this.spotiiIsActive) {
      if (isUpdating) {
        var oldSpotiiWrapper = this.host.querySelector('.spotii-wrapper');
        if (oldSpotiiWrapper) {
          oldSpotiiWrapper.remove();
        }
        var spotiiPromoWrapper = document.createElement('div');
        spotiiPromoWrapper.classList.add('spotii-wrapper');
        var spotiiPromo = document.createElement('div');
        spotiiPromo.classList.add('spotii-promo');
        spotiiPromoWrapper.appendChild(spotiiPromo);
        this.host.appendChild(spotiiPromoWrapper);
        var oldSpotiiScript = document.querySelector('script[src="' + salla.url.cdn('js/price-widget-ar-salla.js') + '"]');
        if (oldSpotiiScript) {
          oldSpotiiScript.remove();
        }
      }
      let amount = salla.money((Number(this.price) / 3).toFixed(2));
      let isRTL = salla.config.get('theme.is_rtl', true);
      window.spotiiConfig = {
        targetXPath: ['.spotii-wrapper'],
        renderToPath: ['.spotii-promo'],
        numberOfPayment: 3,
        currency: this.currency,
        templateLine: "${textOne} ${number} ${textTwo} " + amount + "${logo} ${info}",
        //todo:: translate these
        textOne: isRTL ? "جزء الدفع على" : "Split it into",
        textTwo: isRTL ? "أقساط متساوية بدون تكاليف اضافية بقيمة" : "payments of",
        textThree: "مع",
        price: this.price,
        // forcedShow: false,
        // merchantID: null,
      };
      var spotiiScript = document.createElement('script');
      spotiiScript.setAttribute('src', salla.url.cdn('js/price-widget-ar-salla.js'));
      document.head.appendChild(spotiiScript);
      // spotiiScript.onload = () => {
      //   // setTimeout()
      // }
    }
  }
  /**
   * this is workaround to remove the default border and add margin
   * we will try to remove tabby border 5 times for 7.5 seconds
   */
  removeTabbyBorder() {
    if (this.tabbyBorderRemoved || this.tabbyRemoveBorderTries > 5) {
      return;
    }
    this.tabbyRemoveBorderTries++;
    setTimeout(() => {
      let promo = document.querySelector('#tabbyPromo>div>div');
      promo = promo ? promo.shadowRoot.querySelector('div[class^="styles__tabby-promo-snippet--"]') : null;
      if (promo) {
        promo.style = 'border: none; margin: 15px 0!important;';
        this.tabbyBorderRemoved = true;
      }
      else {
        this.removeTabbyBorder();
      }
    }, this.tabbyRemoveBorderTries * 500);
  }
  get host() { return this; }
  static get style() { return sallaInstallmentCss; }
}, [0, "salla-installment", {
    "price": [1],
    "language": [1],
    "currency": [1],
    "tamaraIsActive": [32],
    "tabbyIsActive": [32],
    "spotiiIsActive": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-installment"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-installment":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaInstallment$1);
      }
      break;
  } });
}

const SallaInstallment = SallaInstallment$1;
const defineCustomElement = defineCustomElement$1;

export { SallaInstallment, defineCustomElement };

//# sourceMappingURL=salla-installment.js.map