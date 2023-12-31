/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const SallaConditionalFields = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  hideAllOptions(optionId) {
    this.host.querySelectorAll(`[data-show-when^="options[${optionId}"]`).forEach((field) => {
      field.classList.add('hidden');
      this.hideAllOptions(field.dataset.optionId);
      this.disableInputs(field);
    });
  }
  disableInputs(field) {
    field.querySelectorAll('[name]').forEach((input) => {
      var _a;
      input.setAttribute('disabled', '');
      input.removeAttribute('required');
      if (((_a = input === null || input === void 0 ? void 0 : input.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'select') {
        input.value = '';
      }
      if (['checkbox'].includes(input.getAttribute('type')) && input.hasOwnProperty('checked')) {
        // @ts-ignore
        input.checked = false;
      }
    });
  }
  changeHandler(event) {
    var _a;
    salla.event.emit('salla-onditional-fields::change', event);
    salla.log('Received the change event: ', event);
    if (!event.target || !['SELECT'].includes(event.target.tagName) && !['checkbox'].includes(event.target.getAttribute('type'))) {
      salla.log('Ignore the change because is not support input: ' + (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.tagName) || 'N/A'));
      return;
    }
    // to extract the option id from the input name, the supported names are name[*] and name[*][]
    let optionId = event.target.name.replace('[]', '');
    let isMultiple = event.target.getAttribute('type') === 'checkbox';
    salla.log('Trying to find all the element with condition:', `[data-show-when^="${optionId}"]`);
    this.host.querySelectorAll(`[data-show-when^="${optionId}"]`)
      .forEach((field) => {
      let isEqual = !(field === null || field === void 0 ? void 0 : field.dataset.showWhen.includes('!='));
      let value = field === null || field === void 0 ? void 0 : field.dataset.showWhen.replace(/(.*)(=|!=)(.*)/gm, '$3').trim();
      // let isSelected = isMultiple ? event.target?.checked : value === event.target.value;
      let isSelected;
      if (isMultiple) {
        // @ts-ignore
        let selectedValues = Array.from(this.host.querySelectorAll(`input[name="${event.target.name}"]:checked`), e => e === null || e === void 0 ? void 0 : e.value);
        isSelected = selectedValues.includes(value.toString());
      }
      else {
        isSelected = value === event.target.value;
      }
      salla.log('The input is ', (isMultiple ? 'Multiple' : 'Single'), ' value:', isSelected);
      let showTheInput = (isEqual && isSelected) || (!isEqual && !isSelected);
      if (showTheInput) {
        field.classList.remove('hidden');
        field.querySelectorAll('[name]').forEach((input) => {
          input.removeAttribute('disabled');
          // Return required attribute to the input if the option is required
          const closestProductOption = input.closest('.s-product-options-option');
          if (closestProductOption.dataset.optionRequired === 'true') {
            input.setAttribute('required', '');
          }
          // Handle multiple checkboxes with same name and required attribute 
          if (input.getAttribute('type') === 'checkbox') {
            const checkboxes = Array.from(document.querySelectorAll(`input[type="checkbox"][name="${input.getAttribute('name')}"]`));
            const isAnyChecked = checkboxes.some((checkbox) => checkbox.checked);
            if (isAnyChecked) {
              checkboxes.forEach((checkbox) => {
                checkbox.removeAttribute('required');
              });
            }
          }
          //To handle focus on hidden input error
          if (!['checkbox'].includes(input.getAttribute('type')) && field.getElementsByClassName('required').length) {
            input.setAttribute('required', '');
          }
        });
      }
      else {
        this.hideAllOptions(field.dataset.optionId);
        field.classList.add('hidden');
        this.disableInputs(field);
      }
    });
  }
  componentDidRender() {
    this.host.querySelectorAll(`[data-show-when]`).forEach((field) => {
      var _a;
      // @ts-ignore
      let optionName = (_a = field === null || field === void 0 ? void 0 : field.dataset) === null || _a === void 0 ? void 0 : _a.showWhen.replace(/(.*)(=|!=)(.*)/gm, '$1').trim();
      if (!optionName) {
        return;
      }
      this.changeHandler({
        target: this.host.querySelector('[name^="' + optionName + '"]')
      });
    });
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get host() { return this; }
}, [4, "salla-conditional-fields", undefined, [[0, "change", "changeHandler"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-conditional-fields"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-conditional-fields":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaConditionalFields);
      }
      break;
  } });
}

export { SallaConditionalFields as S, defineCustomElement as d };

//# sourceMappingURL=salla-conditional-fields2.js.map