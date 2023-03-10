(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vincentman-ui"] = factory(require("vue"));
	else
		root["vincentman-ui"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Button": function() { return /* reexport */ packages_button; },
  "KeepAlive": function() { return /* reexport */ keep_alive; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=25aff3ad&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"v-button",class:[
    _vm.type ? `v-button--${_vm.type}` : '',
    _vm.buttonSize ? `v-button--${_vm.buttonSize}` : '',
    {
      'is-plain': _vm.plain,
      'is-round': _vm.round,
      'is-circle': _vm.circle,
      'is-disabled': _vm.disabled,
      'is-ripple': _vm.ripple,
    },
  ],attrs:{"disabled":_vm.disabled},on:{"click":_vm.handleClick}},[(_vm.icon)?_c('i',{staticClass:"iconfont",class:_vm.icon}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'VButton',
  props: {
    buttonSize: String,
    type: {
      type: String,
      default: 'default',
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    ripple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
});

;// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/button/src/button.vue?vue&type=style&index=0&id=25aff3ad&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=style&index=0&id=25aff3ad&prod&lang=scss&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/button/src/button.vue



;


/* normalize component */

var component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_button = (component.exports);
;// CONCATENATED MODULE: ./packages/button/index.js

// ??????????????? install ??????????????????????????????
src_button.install = function (Vue) {
  Vue.component(src_button.name, src_button);
};
/* harmony default export */ var packages_button = (src_button);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./packages/keep-alive/index.js


let cacheKey = 'cacheTo';
let $router = { beforeEach: () => {} };
// Vue.observable??????????????????store??????????????????
const state = external_commonjs_vue_commonjs2_vue_root_Vue_default().observable({
  caches: [],
});
const clearCache = () => {
  if (state.caches.length > 0) {
    state.caches = [];
  }
};
const addCache = (name) => state.caches.push(name);

const beforeEach = () => {
  $router.beforeEach((to, from, next) => {
    // 1. ?????????????????????
    //     ????????????
    // 2. ??????????????????
    //     ???`to`??????`from`?????????????????????????????????????????????`to`??????
    //     ??????`from`??????????????????`to`??????
    // 3. ????????????????????????
    //     ???`from`??????`to`????????????????????????????????????`to`??????
    //     ?????????????????????
    // 4. ????????????????????????
    //     ???`to`??????`from`???????????????????????????

    const toName = to.name;
    const toCacheTo = (to.meta || {})[cacheKey];
    const isToPageLikeList = toCacheTo && toCacheTo.length > 0;
    const fromName = from.name;
    const fromCacheTo = (from.meta || {})[cacheKey];
    const isFromPageLikeList = fromCacheTo && fromCacheTo.length > 0;

    if (!isToPageLikeList && !isFromPageLikeList) {
      clearCache();
    } else if (isToPageLikeList && isFromPageLikeList) {
      if (fromCacheTo.indexOf(toName) === -1) {
        clearCache();
      }
      addCache(toName);
    } else if (isToPageLikeList) {
      if (toCacheTo.indexOf(fromName) === -1) {
        clearCache();
        addCache(toName);
      }
    } else if (isFromPageLikeList) {
      if (fromCacheTo.indexOf(toName) === -1) {
        clearCache();
      }
    }
    next();
  });
};
const VsKeepAlive = {
  install(Vue, options = { key: '', router: '' }) {
    const { key = 'cacheTo', router } = options;

    if (key) {
      cacheKey = key;
      $router = router;
      beforeEach();
    }

    const component = {
      name: 'VsKeepAlive',
      functional: true,
      render(h, { children }) {
        return h('keep-alive', { props: { include: state.caches } }, children);
      },
    };

    Vue.component('VsKeepAlive', component);
  },
};
/* harmony default export */ var keep_alive = (VsKeepAlive);

;// CONCATENATED MODULE: ./packages/index.js




// ??????????????????
const components = [packages_button];

// ?????? install ??????????????? Vue ??????????????????????????? use ????????????????????????????????????????????????
const install = function (Vue, options = { key: '', router: {} }) {
  const { key = 'cacheTo', router } = options;
  // ????????????????????????
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
  Vue.use(keep_alive, { key, router });
};

// ?????????????????????????????????
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // ??????????????????????????? install???????????? Vue.use() ????????????
  version: '0.3.4',
  install,
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vincentman-ui.umd.js.map