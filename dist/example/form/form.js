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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Fform%2Fform!./src/example/form/form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Fform%2Fform!./src/example/form/form.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=example%2Fform%2Fform!./src/example/form/form.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./form.js */ "./src/example/form/form.js")

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

/***/ "./src/example/form/form.js":
/*!**********************************!*\
  !*** ./src/example/form/form.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_CustomPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/CustomPage */ "./src/base/CustomPage.js");

Object(_base_CustomPage__WEBPACK_IMPORTED_MODULE_0__["default"])({
  data: {
    showTopTips: false,
    radioItems: [{
      name: 'cell standard',
      value: '0',
      checked: true
    }, {
      name: 'cell standard',
      value: '1'
    }],
    checkboxItems: [{
      name: 'standard is dealt for u.',
      value: '0',
      checked: true
    }, {
      name: 'standard is dealicient for u.',
      value: '1'
    }],
    items: [{
      name: 'USA',
      value: '美国'
    }, {
      name: 'CHN',
      value: '中国',
      checked: 'true'
    }, {
      name: 'BRA',
      value: '巴西'
    }, {
      name: 'JPN',
      value: '日本'
    }, {
      name: 'ENG',
      value: '英国'
    }, {
      name: 'TUR',
      value: '法国'
    }],
    date: "2016-09-01",
    time: "12:01",
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    countries: ["中国", "美国", "英国"],
    countryIndex: 0,
    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,
    isAgree: false,
    formData: {},
    rules: [{
      name: 'radio',
      rules: {
        required: false,
        message: '单选列表是必选项'
      }
    }, {
      name: 'checkbox',
      rules: {
        required: true,
        message: '多选列表是必选项'
      }
    }, {
      name: 'name',
      rules: {
        required: true,
        message: '请输入姓名'
      }
    }, {
      name: 'qq',
      rules: {
        required: true,
        message: 'qq必填'
      }
    }, {
      name: 'mobile',
      rules: [{
        required: true,
        message: 'mobile必填'
      }, {
        mobile: true,
        message: 'mobile格式不对'
      }]
    }, {
      name: 'vcode',
      rules: {
        required: true,
        message: '验证码必填'
      }
    }, {
      name: 'idcard',
      rules: {
        validator: function (rule, value, param, modeels) {
          if (!value || value.length !== 18) {
            return 'idcard格式不正确';
          }
        }
      }
    }]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;

    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems,
      [`formData.radio`]: e.detail.value
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.checkboxItems,
        values = e.detail.value;

    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems,
      [`formData.checkbox`]: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
      [`formData.date`]: e.detail.value
    });
  },

  formInputChange(e) {
    const {
      field
    } = e.currentTarget.dataset;
    this.setData({
      [`formData.${field}`]: e.detail.value
    });
  },

  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    });
  },
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryCodeIndex: e.detail.value
    });
  },
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({
      countryIndex: e.detail.value
    });
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);
    this.setData({
      accountIndex: e.detail.value
    });
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },

  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      console.log('valid', valid, errors);

      if (!valid) {
        const firstError = Object.keys(errors);

        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          });
        }
      } else {
        wx.showToast({
          title: '校验通过'
        });
      }
    }); // this.selectComponent('#form').validateField('mobile', (valid, errors) => {
    //     console.log('valid', valid, errors)
    // })
  }

});

/***/ })

/******/ })