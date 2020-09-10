var globalThis = this;
module.exports =

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcell%2Fcell!./src/components/cell/cell.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcell%2Fcell!./src/components/cell/cell.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fcell%2Fcell!./src/components/cell/cell.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cell.ts */ "./src/components/cell/cell.ts")

/***/ }),

/***/ "./src/components/cell/cell.ts":
/*!*************************************!*\
  !*** ./src/components/cell/cell.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    hover: {
      type: Boolean,
      value: false
    },
    link: {
      type: Boolean,
      value: false
    },
    extClass: {
      type: String,
      value: ''
    },
    iconClass: {
      type: String,
      value: ''
    },
    bodyClass: {
      type: String,
      value: ''
    },
    icon: {
      type: String,
      value: ''
    },
    title: {
      // 和icon二选一，都是放在cell_hd里面
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    showError: {
      type: Boolean,
      value: false
    },
    prop: {
      // 校验的属性，给父元素form使用
      type: String,
      value: ''
    },
    url: {
      // 在link为true的时候有效，表示navigator的跳转url
      type: String,
      value: ''
    },
    footerClass: {
      type: String,
      value: ''
    },
    footer: {
      type: String,
      value: ''
    },
    inline: {
      // 左右布局样式还是上下布局
      type: Boolean,
      value: true
    },
    hasHeader: {
      type: Boolean,
      value: true
    },
    hasFooter: {
      type: Boolean,
      value: true
    },
    hasBody: {
      type: Boolean,
      value: true
    },
    extHoverClass: {
      // 提供给需要定制 hover-class 的场景，要求 hover 为 false
      type: String,
      value: ''
    }
  },
  relations: {
    '../form/form': {
      type: 'ancestor'
    },
    '../cells/cells': {
      type: 'ancestor'
    }
  },
  data: {
    inForm: false
  },
  methods: {
    setError(error) {
      this.setData({
        error: error || false
      });
    },

    setInForm() {
      this.setData({
        inForm: true
      });
    },

    setOuterClass(className) {
      this.setData({
        outerClass: className
      });
    },

    navigateTo() {
      const data = this.data;

      if (data.url && data.link) {
        wx.navigateTo({
          url: data.url,
          success: res => {
            this.triggerEvent('navigatesuccess', res, {});
          },
          fail: fail => {
            this.triggerEvent('navigateerror', fail, {});
          }
        });
      }
    }

  }
});

/***/ })

/******/ })