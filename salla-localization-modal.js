/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './salla-button2.js';
import { d as defineCustomElement$5 } from './salla-loading2.js';
import { d as defineCustomElement$4 } from './salla-modal2.js';
import { d as defineCustomElement$3 } from './salla-placeholder2.js';
import { d as defineCustomElement$2 } from './salla-skeleton2.js';

const sallaLocalizationModalCss = ".s-localization-modal-select{background-image:url(\"data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")}.iti__flag{width:20px}.iti__flag.iti__be{width:18px}.iti__flag.iti__ch{width:15px}.iti__flag.iti__mc{width:19px}.iti__flag.iti__ne{width:18px}.iti__flag.iti__np{width:13px}.iti__flag.iti__va{width:15px}@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){.iti__flag{background-size:5652px 15px}}.iti__flag.iti__ac{height:10px;background-position:0px 0px}.iti__flag.iti__ad{height:14px;background-position:-22px 0px}.iti__flag.iti__ae{height:10px;background-position:-44px 0px}.iti__flag.iti__af{height:14px;background-position:-66px 0px}.iti__flag.iti__ag{height:14px;background-position:-88px 0px}.iti__flag.iti__ai{height:10px;background-position:-110px 0px}.iti__flag.iti__al{height:15px;background-position:-132px 0px}.iti__flag.iti__am{height:10px;background-position:-154px 0px}.iti__flag.iti__ao{height:14px;background-position:-176px 0px}.iti__flag.iti__aq{height:14px;background-position:-198px 0px}.iti__flag.iti__ar{height:13px;background-position:-220px 0px}.iti__flag.iti__as{height:10px;background-position:-242px 0px}.iti__flag.iti__at{height:14px;background-position:-264px 0px}.iti__flag.iti__au{height:10px;background-position:-286px 0px}.iti__flag.iti__aw{height:14px;background-position:-308px 0px}.iti__flag.iti__ax{height:13px;background-position:-330px 0px}.iti__flag.iti__az{height:10px;background-position:-352px 0px}.iti__flag.iti__ba{height:10px;background-position:-374px 0px}.iti__flag.iti__bb{height:14px;background-position:-396px 0px}.iti__flag.iti__bd{height:12px;background-position:-418px 0px}.iti__flag.iti__be{height:15px;background-position:-440px 0px}.iti__flag.iti__bf{height:14px;background-position:-460px 0px}.iti__flag.iti__bg{height:12px;background-position:-482px 0px}.iti__flag.iti__bh{height:12px;background-position:-504px 0px}.iti__flag.iti__bi{height:12px;background-position:-526px 0px}.iti__flag.iti__bj{height:14px;background-position:-548px 0px}.iti__flag.iti__bl{height:14px;background-position:-570px 0px}.iti__flag.iti__bm{height:10px;background-position:-592px 0px}.iti__flag.iti__bn{height:10px;background-position:-614px 0px}.iti__flag.iti__bo{height:14px;background-position:-636px 0px}.iti__flag.iti__bq{height:14px;background-position:-658px 0px}.iti__flag.iti__br{height:14px;background-position:-680px 0px}.iti__flag.iti__bs{height:10px;background-position:-702px 0px}.iti__flag.iti__bt{height:14px;background-position:-724px 0px}.iti__flag.iti__bv{height:15px;background-position:-746px 0px}.iti__flag.iti__bw{height:14px;background-position:-768px 0px}.iti__flag.iti__by{height:10px;background-position:-790px 0px}.iti__flag.iti__bz{height:14px;background-position:-812px 0px}.iti__flag.iti__ca{height:10px;background-position:-834px 0px}.iti__flag.iti__cc{height:10px;background-position:-856px 0px}.iti__flag.iti__cd{height:15px;background-position:-878px 0px}.iti__flag.iti__cf{height:14px;background-position:-900px 0px}.iti__flag.iti__cg{height:14px;background-position:-922px 0px}.iti__flag.iti__ch{height:15px;background-position:-944px 0px}.iti__flag.iti__ci{height:14px;background-position:-961px 0px}.iti__flag.iti__ck{height:10px;background-position:-983px 0px}.iti__flag.iti__cl{height:14px;background-position:-1005px 0px}.iti__flag.iti__cm{height:14px;background-position:-1027px 0px}.iti__flag.iti__cn{height:14px;background-position:-1049px 0px}.iti__flag.iti__co{height:14px;background-position:-1071px 0px}.iti__flag.iti__cp{height:14px;background-position:-1093px 0px}.iti__flag.iti__cr{height:12px;background-position:-1115px 0px}.iti__flag.iti__cu{height:10px;background-position:-1137px 0px}.iti__flag.iti__cv{height:12px;background-position:-1159px 0px}.iti__flag.iti__cw{height:14px;background-position:-1181px 0px}.iti__flag.iti__cx{height:10px;background-position:-1203px 0px}.iti__flag.iti__cy{height:14px;background-position:-1225px 0px}.iti__flag.iti__cz{height:14px;background-position:-1247px 0px}.iti__flag.iti__de{height:12px;background-position:-1269px 0px}.iti__flag.iti__dg{height:10px;background-position:-1291px 0px}.iti__flag.iti__dj{height:14px;background-position:-1313px 0px}.iti__flag.iti__dk{height:15px;background-position:-1335px 0px}.iti__flag.iti__dm{height:10px;background-position:-1357px 0px}.iti__flag.iti__do{height:14px;background-position:-1379px 0px}.iti__flag.iti__dz{height:14px;background-position:-1401px 0px}.iti__flag.iti__ea{height:14px;background-position:-1423px 0px}.iti__flag.iti__ec{height:14px;background-position:-1445px 0px}.iti__flag.iti__ee{height:13px;background-position:-1467px 0px}.iti__flag.iti__eg{height:14px;background-position:-1489px 0px}.iti__flag.iti__eh{height:10px;background-position:-1511px 0px}.iti__flag.iti__er{height:10px;background-position:-1533px 0px}.iti__flag.iti__es{height:14px;background-position:-1555px 0px}.iti__flag.iti__et{height:10px;background-position:-1577px 0px}.iti__flag.iti__eu{height:14px;background-position:-1599px 0px}.iti__flag.iti__fi{height:12px;background-position:-1621px 0px}.iti__flag.iti__fj{height:10px;background-position:-1643px 0px}.iti__flag.iti__fk{height:10px;background-position:-1665px 0px}.iti__flag.iti__fm{height:11px;background-position:-1687px 0px}.iti__flag.iti__fo{height:15px;background-position:-1709px 0px}.iti__flag.iti__fr{height:14px;background-position:-1731px 0px}.iti__flag.iti__ga{height:15px;background-position:-1753px 0px}.iti__flag.iti__gb{height:10px;background-position:-1775px 0px}.iti__flag.iti__gd{height:12px;background-position:-1797px 0px}.iti__flag.iti__ge{height:14px;background-position:-1819px 0px}.iti__flag.iti__gf{height:14px;background-position:-1841px 0px}.iti__flag.iti__gg{height:14px;background-position:-1863px 0px}.iti__flag.iti__gh{height:14px;background-position:-1885px 0px}.iti__flag.iti__gi{height:10px;background-position:-1907px 0px}.iti__flag.iti__gl{height:14px;background-position:-1929px 0px}.iti__flag.iti__gm{height:14px;background-position:-1951px 0px}.iti__flag.iti__gn{height:14px;background-position:-1973px 0px}.iti__flag.iti__gp{height:14px;background-position:-1995px 0px}.iti__flag.iti__gq{height:14px;background-position:-2017px 0px}.iti__flag.iti__gr{height:14px;background-position:-2039px 0px}.iti__flag.iti__gs{height:10px;background-position:-2061px 0px}.iti__flag.iti__gt{height:13px;background-position:-2083px 0px}.iti__flag.iti__gu{height:11px;background-position:-2105px 0px}.iti__flag.iti__gw{height:10px;background-position:-2127px 0px}.iti__flag.iti__gy{height:12px;background-position:-2149px 0px}.iti__flag.iti__hk{height:14px;background-position:-2171px 0px}.iti__flag.iti__hm{height:10px;background-position:-2193px 0px}.iti__flag.iti__hn{height:10px;background-position:-2215px 0px}.iti__flag.iti__hr{height:10px;background-position:-2237px 0px}.iti__flag.iti__ht{height:12px;background-position:-2259px 0px}.iti__flag.iti__hu{height:10px;background-position:-2281px 0px}.iti__flag.iti__ic{height:14px;background-position:-2303px 0px}.iti__flag.iti__id{height:14px;background-position:-2325px 0px}.iti__flag.iti__ie{height:10px;background-position:-2347px 0px}.iti__flag.iti__il{height:15px;background-position:-2369px 0px}.iti__flag.iti__im{height:10px;background-position:-2391px 0px}.iti__flag.iti__in{height:14px;background-position:-2413px 0px}.iti__flag.iti__io{height:10px;background-position:-2435px 0px}.iti__flag.iti__iq{height:14px;background-position:-2457px 0px}.iti__flag.iti__ir{height:12px;background-position:-2479px 0px}.iti__flag.iti__is{height:15px;background-position:-2501px 0px}.iti__flag.iti__it{height:14px;background-position:-2523px 0px}.iti__flag.iti__je{height:12px;background-position:-2545px 0px}.iti__flag.iti__jm{height:10px;background-position:-2567px 0px}.iti__flag.iti__jo{height:10px;background-position:-2589px 0px}.iti__flag.iti__jp{height:14px;background-position:-2611px 0px}.iti__flag.iti__ke{height:14px;background-position:-2633px 0px}.iti__flag.iti__kg{height:12px;background-position:-2655px 0px}.iti__flag.iti__kh{height:13px;background-position:-2677px 0px}.iti__flag.iti__ki{height:10px;background-position:-2699px 0px}.iti__flag.iti__km{height:12px;background-position:-2721px 0px}.iti__flag.iti__kn{height:14px;background-position:-2743px 0px}.iti__flag.iti__kp{height:10px;background-position:-2765px 0px}.iti__flag.iti__kr{height:14px;background-position:-2787px 0px}.iti__flag.iti__kw{height:10px;background-position:-2809px 0px}.iti__flag.iti__ky{height:10px;background-position:-2831px 0px}.iti__flag.iti__kz{height:10px;background-position:-2853px 0px}.iti__flag.iti__la{height:14px;background-position:-2875px 0px}.iti__flag.iti__lb{height:14px;background-position:-2897px 0px}.iti__flag.iti__lc{height:10px;background-position:-2919px 0px}.iti__flag.iti__li{height:12px;background-position:-2941px 0px}.iti__flag.iti__lk{height:10px;background-position:-2963px 0px}.iti__flag.iti__lr{height:11px;background-position:-2985px 0px}.iti__flag.iti__ls{height:14px;background-position:-3007px 0px}.iti__flag.iti__lt{height:12px;background-position:-3029px 0px}.iti__flag.iti__lu{height:12px;background-position:-3051px 0px}.iti__flag.iti__lv{height:10px;background-position:-3073px 0px}.iti__flag.iti__ly{height:10px;background-position:-3095px 0px}.iti__flag.iti__ma{height:14px;background-position:-3117px 0px}.iti__flag.iti__mc{height:15px;background-position:-3139px 0px}.iti__flag.iti__md{height:10px;background-position:-3160px 0px}.iti__flag.iti__me{height:10px;background-position:-3182px 0px}.iti__flag.iti__mf{height:14px;background-position:-3204px 0px}.iti__flag.iti__mg{height:14px;background-position:-3226px 0px}.iti__flag.iti__mh{height:11px;background-position:-3248px 0px}.iti__flag.iti__mk{height:10px;background-position:-3270px 0px}.iti__flag.iti__ml{height:14px;background-position:-3292px 0px}.iti__flag.iti__mm{height:14px;background-position:-3314px 0px}.iti__flag.iti__mn{height:10px;background-position:-3336px 0px}.iti__flag.iti__mo{height:14px;background-position:-3358px 0px}.iti__flag.iti__mp{height:10px;background-position:-3380px 0px}.iti__flag.iti__mq{height:14px;background-position:-3402px 0px}.iti__flag.iti__mr{height:14px;background-position:-3424px 0px}.iti__flag.iti__ms{height:10px;background-position:-3446px 0px}.iti__flag.iti__mt{height:14px;background-position:-3468px 0px}.iti__flag.iti__mu{height:14px;background-position:-3490px 0px}.iti__flag.iti__mv{height:14px;background-position:-3512px 0px}.iti__flag.iti__mw{height:14px;background-position:-3534px 0px}.iti__flag.iti__mx{height:12px;background-position:-3556px 0px}.iti__flag.iti__my{height:10px;background-position:-3578px 0px}.iti__flag.iti__mz{height:14px;background-position:-3600px 0px}.iti__flag.iti__na{height:14px;background-position:-3622px 0px}.iti__flag.iti__nc{height:10px;background-position:-3644px 0px}.iti__flag.iti__ne{height:15px;background-position:-3666px 0px}.iti__flag.iti__nf{height:10px;background-position:-3686px 0px}.iti__flag.iti__ng{height:10px;background-position:-3708px 0px}.iti__flag.iti__ni{height:12px;background-position:-3730px 0px}.iti__flag.iti__nl{height:14px;background-position:-3752px 0px}.iti__flag.iti__no{height:15px;background-position:-3774px 0px}.iti__flag.iti__np{height:15px;background-position:-3796px 0px}.iti__flag.iti__nr{height:10px;background-position:-3811px 0px}.iti__flag.iti__nu{height:10px;background-position:-3833px 0px}.iti__flag.iti__nz{height:10px;background-position:-3855px 0px}.iti__flag.iti__om{height:10px;background-position:-3877px 0px}.iti__flag.iti__pa{height:14px;background-position:-3899px 0px}.iti__flag.iti__pe{height:14px;background-position:-3921px 0px}.iti__flag.iti__pf{height:14px;background-position:-3943px 0px}.iti__flag.iti__pg{height:15px;background-position:-3965px 0px}.iti__flag.iti__ph{height:10px;background-position:-3987px 0px}.iti__flag.iti__pk{height:14px;background-position:-4009px 0px}.iti__flag.iti__pl{height:13px;background-position:-4031px 0px}.iti__flag.iti__pm{height:14px;background-position:-4053px 0px}.iti__flag.iti__pn{height:10px;background-position:-4075px 0px}.iti__flag.iti__pr{height:14px;background-position:-4097px 0px}.iti__flag.iti__ps{height:10px;background-position:-4119px 0px}.iti__flag.iti__pt{height:14px;background-position:-4141px 0px}.iti__flag.iti__pw{height:13px;background-position:-4163px 0px}.iti__flag.iti__py{height:11px;background-position:-4185px 0px}.iti__flag.iti__qa{height:8px;background-position:-4207px 0px}.iti__flag.iti__re{height:14px;background-position:-4229px 0px}.iti__flag.iti__ro{height:14px;background-position:-4251px 0px}.iti__flag.iti__rs{height:14px;background-position:-4273px 0px}.iti__flag.iti__ru{height:14px;background-position:-4295px 0px}.iti__flag.iti__rw{height:14px;background-position:-4317px 0px}.iti__flag.iti__sa{height:14px;background-position:-4339px 0px}.iti__flag.iti__sb{height:10px;background-position:-4361px 0px}.iti__flag.iti__sc{height:10px;background-position:-4383px 0px}.iti__flag.iti__sd{height:10px;background-position:-4405px 0px}.iti__flag.iti__se{height:13px;background-position:-4427px 0px}.iti__flag.iti__sg{height:14px;background-position:-4449px 0px}.iti__flag.iti__sh{height:10px;background-position:-4471px 0px}.iti__flag.iti__si{height:10px;background-position:-4493px 0px}.iti__flag.iti__sj{height:15px;background-position:-4515px 0px}.iti__flag.iti__sk{height:14px;background-position:-4537px 0px}.iti__flag.iti__sl{height:14px;background-position:-4559px 0px}.iti__flag.iti__sm{height:15px;background-position:-4581px 0px}.iti__flag.iti__sn{height:14px;background-position:-4603px 0px}.iti__flag.iti__so{height:14px;background-position:-4625px 0px}.iti__flag.iti__sr{height:14px;background-position:-4647px 0px}.iti__flag.iti__ss{height:10px;background-position:-4669px 0px}.iti__flag.iti__st{height:10px;background-position:-4691px 0px}.iti__flag.iti__sv{height:12px;background-position:-4713px 0px}.iti__flag.iti__sx{height:14px;background-position:-4735px 0px}.iti__flag.iti__sy{height:14px;background-position:-4757px 0px}.iti__flag.iti__sz{height:14px;background-position:-4779px 0px}.iti__flag.iti__ta{height:10px;background-position:-4801px 0px}.iti__flag.iti__tc{height:10px;background-position:-4823px 0px}.iti__flag.iti__td{height:14px;background-position:-4845px 0px}.iti__flag.iti__tf{height:14px;background-position:-4867px 0px}.iti__flag.iti__tg{height:13px;background-position:-4889px 0px}.iti__flag.iti__th{height:14px;background-position:-4911px 0px}.iti__flag.iti__tj{height:10px;background-position:-4933px 0px}.iti__flag.iti__tk{height:10px;background-position:-4955px 0px}.iti__flag.iti__tl{height:10px;background-position:-4977px 0px}.iti__flag.iti__tm{height:14px;background-position:-4999px 0px}.iti__flag.iti__tn{height:14px;background-position:-5021px 0px}.iti__flag.iti__to{height:10px;background-position:-5043px 0px}.iti__flag.iti__tr{height:14px;background-position:-5065px 0px}.iti__flag.iti__tt{height:12px;background-position:-5087px 0px}.iti__flag.iti__tv{height:10px;background-position:-5109px 0px}.iti__flag.iti__tw{height:14px;background-position:-5131px 0px}.iti__flag.iti__tz{height:14px;background-position:-5153px 0px}.iti__flag.iti__ua{height:14px;background-position:-5175px 0px}.iti__flag.iti__ug{height:14px;background-position:-5197px 0px}.iti__flag.iti__um{height:11px;background-position:-5219px 0px}.iti__flag.iti__un{height:14px;background-position:-5241px 0px}.iti__flag.iti__us{height:11px;background-position:-5263px 0px}.iti__flag.iti__uy{height:14px;background-position:-5285px 0px}.iti__flag.iti__uz{height:10px;background-position:-5307px 0px}.iti__flag.iti__va{height:15px;background-position:-5329px 0px}.iti__flag.iti__vc{height:14px;background-position:-5346px 0px}.iti__flag.iti__ve{height:14px;background-position:-5368px 0px}.iti__flag.iti__vg{height:10px;background-position:-5390px 0px}.iti__flag.iti__vi{height:14px;background-position:-5412px 0px}.iti__flag.iti__vn{height:14px;background-position:-5434px 0px}.iti__flag.iti__vu{height:12px;background-position:-5456px 0px}.iti__flag.iti__wf{height:14px;background-position:-5478px 0px}.iti__flag.iti__ws{height:10px;background-position:-5500px 0px}.iti__flag.iti__xk{height:15px;background-position:-5522px 0px}.iti__flag.iti__ye{height:14px;background-position:-5544px 0px}.iti__flag.iti__yt{height:14px;background-position:-5566px 0px}.iti__flag.iti__za{height:14px;background-position:-5588px 0px}.iti__flag.iti__zm{height:14px;background-position:-5610px 0px}.iti__flag.iti__zw{height:10px;background-position:-5632px 0px}.iti__flag{height:15px;-webkit-box-shadow:0px 0px 1px 0px #888;box-shadow:0px 0px 1px 0px #888;background-image:url(\"https://cdn.salla.network/images/flags.png\");background-repeat:no-repeat;background-color:#f5f7f9;background-position:20px 0}@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){.iti__flag{background-image:url(\"https://cdn.salla.network/images/flags@2x.png\")}}.iti__flag.iti__np{background-color:transparent}";

const SallaLocalizationModal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    var _a, _b;
    this.translationLoaded = false;
    this.languages = [];
    this.currencies = [];
    this.hasError = false;
    this.errorMessage = undefined;
    this.language = salla.config.get('user.language_code');
    this.currency = salla.config.get('user.currency_code');
    salla.event.on('localization::open', () => this.open());
    salla.lang.onLoaded(() => {
      this.translationLoaded = true;
    });
    /**
     * letting developer to insert his own slot like:
     * <salla-localization>
     *   <div slot="language">...{name}....</div>
     *   <div slot="currency">...{name}....</div>
     * </salla-localization>
     * Because scoped templates not supported in stencil );
     * we made a workaround to pass language & currency attributes, then replace names in rendering
     */
    this.languageSlot = ((_a = this.host.querySelector('[slot="language"]')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '<label class="s-localization-modal-label" for="lang-{code}"><span>{name}</span><div class="s-localization-modal-flag flag iti__flag iti__{country_code}"></div></label>';
    this.currencySlot = ((_b = this.host.querySelector('[slot="currency"]')) === null || _b === void 0 ? void 0 : _b.innerHTML) || '<label class="s-localization-modal-label" for="currency-{code}"><span>{name}</span><small class="s-localization-modal-currency">{code}</small></label>';
  }
  /**
   * open the component
   */
  async open() {
    this.modal.open();
    return await salla.api.withoutNotifier(() => this.getLanguages())
      .then(() => this.getCurrencies())
      .then(() => {
      if (this.languages.length < 2 && this.currencies.length < 2) {
        this.modal.close();
      }
    })
      .catch(e => {
      var _a, _b, _c, _d;
      console.log(e);
      this.hasError = true;
      this.errorMessage = ((_c = (_b = (_a = e.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error) === null || _c === void 0 ? void 0 : _c.message) || ((_d = e.response) === null || _d === void 0 ? void 0 : _d.data);
    })
      .finally(() => this.modal.stopLoading());
  }
  /**
   * Hide the component
   */
  async close() {
    return this.modal.close();
  }
  async getLanguages() {
    this.language = this.language || salla.config.get('user.language_code');
    return this.languages.length > 1 ? null : await salla.config.languages().then(data => this.languages = data);
  }
  async getCurrencies() {
    this.currency = this.currency || salla.config.get('user.currency_code');
    return this.currencies.length > 1 ? null : await salla.config.currencies().then(data => this.currencies = Object.values(data || {}));
  }
  onChangeCurrency(event) {
    this.currency = event.target.value;
  }
  onChangeLanguage(event) {
    this.language = event.target.value;
  }
  /**
   * Change currency and language to the selected ones.
   */
  async submit() {
    let url;
    this.btn.load()
      .then(() => {
      if (!this.currency) {
        salla.log('There is no currency!');
        return;
      }
      if (this.currency === salla.config.get('user.currency_code', 'SAR')) {
        return;
      }
      url = window.location.href;
      return salla.currency.api.change(this.currency);
    })
      .then(() => {
      if (this.language !== salla.config.get('user.language_code', 'ar')) {
        url = salla.helpers.addParamToUrl('lang', this.language);
      }
    })
      .then(() => this.btn.stop())
      .then(() => this.close())
      .then(() => {
      if (url) {
        window.location.href = url.replace(`/${salla.config.get('user.language_code')}/`, `/${this.language}/`);
      }
    });
  }
  render() {
    return (h("salla-modal", { isLoading: true, class: "s-hidden", ref: modal => this.modal = modal, width: "xs" }, h("div", { slot: 'loading' }, h("div", { class: "s-localization-modal-skeleton" }, h("salla-skeleton", { width: '25%', height: '15px' }), h("div", { class: "s-localization-modal-skeleton-content" }, [...Array(4)].map(() => h("div", { class: "s-localization-modal-skeleton-item" }, h("div", { class: "s-localization-modal-skeleton-item-flex" }, h("salla-skeleton", { type: 'circle', height: '16px', width: '16px' }), h("salla-skeleton", { height: '10px', width: '100px' })), h("salla-skeleton", { height: '15px', width: '20px' })))), h("salla-skeleton", { width: '25%', height: '15px' }), h("div", { class: "s-localization-modal-skeleton-content" }, [...Array(4)].map(() => h("div", { class: "s-localization-modal-skeleton-item" }, h("div", { class: "s-localization-modal-skeleton-item-flex" }, h("salla-skeleton", { type: 'circle', height: '16px', width: '16px' }), h("salla-skeleton", { height: '10px', width: '100px' })), h("salla-skeleton", { height: '15px', width: '20px' })))), h("salla-skeleton", { height: '40px', width: '100%' }))), !!this.hasError ?
      h("salla-placeholder", { alignment: "center" }, h("span", { slot: "description" }, this.errorMessage)) :
      h("div", { class: "s-localization-modal-inner" }, this.languages.length > 1 ?
        h("div", { class: "s-localization-modal-section" }, h("label", { class: "s-localization-modal-title" }, salla.lang.get('common.titles.language')), h("div", { class: "s-localization-modal-section-inner" }, this.languages.length < 6 || this.currencies.length == 1 ?
          this.languages.map(lang => h("div", { class: "s-localization-modal-item" }, h("input", { class: "s-localization-modal-input", type: "radio", checked: this.language == lang.iso_code, onChange: () => this.language = lang.iso_code, name: "language", id: 'lang-' + lang.code.toLowerCase(), value: lang.code }), h("div", { class: "s-localization-modal-label-slot", id: "language-slot", innerHTML: this.languageSlot
              .replace(/\{name\}/g, lang.name)
              .replace(/\{code\}/g, lang.code)
              .replace(/\{country_code\}/g, lang.country_code) }))) :
          h("select", { class: "s-localization-modal-select", name: "language", onChange: e => this.onChangeLanguage(e) }, this.languages.map(lang => h("option", { value: lang.code, selected: this.language == lang.code }, lang.name)))))
        : '', this.currencies.length > 1 ?
        h("div", { class: "s-localization-modal-section" }, h("label", { class: "s-localization-modal-title" }, salla.lang.get('common.titles.currency')), h("div", { class: "s-localization-modal-section-inner" }, this.currencies.length < 6 || this.languages.length == 1 ?
          this.currencies.map(currency => h("div", { class: "s-localization-modal-item" }, h("input", { class: "s-localization-modal-input", type: "radio", name: "currency", checked: this.currency == currency.code, onChange: () => this.currency = currency.code, id: 'currency-' + currency.code, value: currency.code }), h("div", { class: "s-localization-modal-label-slot", id: "currency-slot", innerHTML: this.currencySlot
              .replace(/\{name\}/g, currency.name)
              .replace(/\{code\}/g, currency.code)
              .replace(/\{country_code\}/g, currency.country_code) }))) :
          h("select", { class: "s-localization-modal-select", name: "currency", onChange: e => this.onChangeCurrency(e) }, this.currencies.map(currency => h("option", { value: currency.code, selected: this.currency == currency.code }, currency.name)))))
        : '', h("salla-button", { width: "wide", ref: btn => this.btn = btn, onClick: () => this.submit() }, salla.lang.get('common.elements.ok')))));
  }
  /**
   * to reduce dom levels we will move slot data into the parent dom
   */
  componentDidRender() {
    this.host.querySelectorAll('#currency-slot').forEach(el => el.replaceWith(el.firstChild));
    this.host.querySelectorAll('#language-slot').forEach(el => el.replaceWith(el.firstChild));
  }
  get host() { return this; }
  static get style() { return sallaLocalizationModalCss; }
}, [0, "salla-localization-modal", {
    "language": [1537],
    "currency": [1537],
    "translationLoaded": [32],
    "languages": [32],
    "currencies": [32],
    "hasError": [32],
    "errorMessage": [32],
    "open": [64],
    "close": [64],
    "submit": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-localization-modal", "salla-button", "salla-loading", "salla-modal", "salla-placeholder", "salla-skeleton"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-localization-modal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaLocalizationModal$1);
      }
      break;
    case "salla-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "salla-loading":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "salla-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "salla-placeholder":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "salla-skeleton":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const SallaLocalizationModal = SallaLocalizationModal$1;
const defineCustomElement = defineCustomElement$1;

export { SallaLocalizationModal, defineCustomElement };

//# sourceMappingURL=salla-localization-modal.js.map