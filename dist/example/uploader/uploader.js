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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Fuploader%2Fuploader!./src/example/uploader/uploader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Fuploader%2Fuploader!./src/example/uploader/uploader.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Fuploader%2Fuploader!./src/example/uploader/uploader.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./uploader.js */ "./src/example/uploader/uploader.js")

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

/***/ "./src/example/uploader/uploader.js":
/*!******************************************!*\
  !*** ./src/example/uploader/uploader.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    files: [{
      url: 'http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0'
    }]
  },

  onLoad() {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    });
  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    });
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id,
      // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表

    });
  },

  selectFile(files) {
    console.log('files', files); // 返回false可以阻止某次文件上传
  },

  uplaodFile(files) {
    console.log('upload files', files); // 文件上传的函数，返回一个promise

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('some error');
      }, 1000);
    });
  },

  uploadError(e) {
    console.log('upload error', e.detail);
  },

  uploadSuccess(e) {
    console.log('upload success', e.detail);
  }

});

/***/ })

/******/ })