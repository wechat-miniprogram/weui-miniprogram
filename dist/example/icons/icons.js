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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Ficons%2Ficons!./src/example/icons/icons.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Ficons%2Ficons!./src/example/icons/icons.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Ficons%2Ficons!./src/example/icons/icons.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./icons.js */ "./src/example/icons/icons.js")

/***/ }),

/***/ "./src/base/CustomPage.js":
/*!********************************!*\
  !*** ./src/base/CustomPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _behaviors_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./behaviors/theme */ "./src/base/behaviors/theme.js");
/* harmony import */ var _behaviors_theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_behaviors_theme__WEBPACK_IMPORTED_MODULE_0__);


const CustomPage = function (options) {
  return Page(Object.assign({}, options, {
    behaviors: [_behaviors_theme__WEBPACK_IMPORTED_MODULE_0___default.a].concat(options.behaviors || []),

    onLoad(query) {
      const app = getApp();
      this.themeChanged(app.globalData.theme);
      app.watchThemeChange && app.watchThemeChange(this.themeChanged);
      options.onLoad && options.onLoad.call(this, query);
    },

    onUnload() {
      const app = getApp();
      app.unWatchThemeChange && app.unWatchThemeChange(this.themeChanged);
      options.onUnload && options.onUnload.call(this);
    }

  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomPage);

/***/ }),

/***/ "./src/base/behaviors/theme.js":
/*!*************************************!*\
  !*** ./src/base/behaviors/theme.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Behavior({
  data: {
    theme: 'light'
  },
  methods: {
    themeChanged(theme) {
      this.setData({
        theme
      });
    }

  }
});

/***/ }),

/***/ "./src/example/icons/icons.js":
/*!************************************!*\
  !*** ./src/example/icons/icons.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

const colorLight = 'rgba(0, 0, 0, .9)';
const colorDark = 'rgba(255, 255, 255, .8)';
Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    iconList: [{
      icon: 'add-friends',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'add',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'add2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'album',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'arrow',
      color: colorLight,
      size: 12,
      name: ''
    }, {
      icon: 'at',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'back',
      color: colorLight,
      size: 12,
      name: ''
    }, {
      icon: 'back2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'bellring-off',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'bellring-on',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'camera',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'cellphone',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'clip',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'close',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'close2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'comment',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'contacts',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'copy',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'delete-on',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'delete',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'discover',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'display',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'done',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'done2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'download',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'email',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'error',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'eyes-off',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'eyes-on',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'folder',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'group-detail',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'help',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'home',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'imac',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'info',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'keyboard',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'like',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'link',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'location',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'lock',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'max-window',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'me',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'mike',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'mike2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'mobile-contacts',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'more',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'more2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'mosaic',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'music-off',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'music',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'note',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'pad',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'pause',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'pencil',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'photo-wall',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'play',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'play2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'previous',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'previous2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'qr-code',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'refresh',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'report-problem',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'search',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'sending',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'setting',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'share',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'shop',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'star',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'sticker',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'tag',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'text',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'time',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'transfer-text',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'transfer2',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'translate',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'tv',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'video-call',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'voice',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'volume-down',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'volume-off',
      color: colorLight,
      size: 25,
      name: ''
    }, {
      icon: 'volume-up',
      color: colorLight,
      size: 25,
      name: ''
    }]
  },

  onLoad() {
    this.setIconColor(this.data.theme);
    const app = getApp();
    app.watchThemeChange && app.watchThemeChange(this.setIconColor);
  },

  setIconColor(theme) {
    const color = theme === 'dark' ? colorDark : colorLight;
    this.setData({
      iconList: this.data.iconList.map(icon => {
        icon.color = color;
        return icon;
      })
    });
  }

});

/***/ })

/******/ })