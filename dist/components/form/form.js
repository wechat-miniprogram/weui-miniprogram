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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fform%2Fform!./src/components/form/form.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fform%2Fform!./src/components/form/form.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fform%2Fform!./src/components/form/form.ts ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./form.ts */ "./src/components/form/form.ts")

/***/ }),

/***/ "./src/components/form/form-validator.ts":
/*!***********************************************!*\
  !*** ./src/components/form/form-validator.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./src/components/form/validator.ts");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./src/components/utils/object.ts");


const toString = Object.prototype.toString;

const validateSingleRule = (rule, value, param = null, models = null) => {
  let message = '';
  const ruleKeys = Object.keys(rule);

  for (let i = 0, l = ruleKeys.length; i < l; ++i) {
    const ruleKey = ruleKeys[i];
    if (ruleKey === 'name' || ruleKey === 'message') continue;
    const validateMethod = typeof rule.validator !== 'undefined' ? rule.validator : _validator__WEBPACK_IMPORTED_MODULE_0__["default"][ruleKey];

    if (typeof validateMethod === 'function') {
      message = validateMethod(rule, value, param, models);

      if (message) {
        return message;
      }
    }
  }

  return message;
};

class FormValidator {
  constructor(models, rules) {
    this.models = models;
    this.rules = rules;
    this.errors = {};
  }

  validate(cb) {
    return new Promise(resolve => {
      let failCount = 0;
      const errors = this.errors;
      const models = this.models;
      let errorChanged = false;
      Object.keys(this.rules).forEach(fieldName => {
        const oldError = errors[fieldName];

        this._innerValidateField(fieldName, models[fieldName], (valid, newError) => {
          if (!valid) failCount++;

          if (Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["diff"])(oldError, newError)) {
            errors[fieldName] = newError;
            errorChanged = true;
          }
        });
      });
      const keys = Object.keys(errors);
      keys.forEach(key => {
        if (!errors[key]) delete errors[key];
      }); // 先支持同步的接口吧

      resolve({
        isValid: !failCount,
        errors: failCount ? errors : undefined
      });
      cb && cb(!failCount, failCount ? errors : undefined);
    });
  }

  validateField(name, value, cb) {
    return new Promise(resolve => {
      this._innerValidateField(name, value, (valid, error) => {
        const errObj = {};
        errObj[name] = error;
        resolve({
          valid,
          error: valid ? undefined : error
        });
        cb && cb(valid, valid ? undefined : errObj);
        const oldError = this.errors[name];
        const errorChanged = Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["diff"])(oldError, error);

        if (errorChanged) {
          if (!error) delete this.errors[name];
          this.errors[name] = error;
        }
      });
    });
  }

  _innerValidateField(name, value, cb) {
    const rules = this.rules[name];

    if (!rules) {
      console.warn(`[form-validator] rule name ${name} not exists.`);
      cb(true);
      return;
    } // 处理参数


    if (typeof value === 'function') {
      cb = value;
      value = undefined;
    }

    let isFail = false;
    const models = this.models;

    if (toString.call(rules) === '[object Array]') {
      rules.forEach(rule => {
        rule.name = name; // 字段名称

        const resMessage = validateSingleRule(rule, value || models[name], rule.param, models); // 失败了直接中止

        if (resMessage && !isFail) {
          isFail = true; // errors[name] = {message: resMessage}

          const error = resMessage ? {
            message: resMessage,
            rule
          } : undefined;
          cb(false, error);
        }
      }); // 成功的回调

      if (!isFail) {
        cb(!isFail);
      }
    } else {
      const rule = rules;
      rule.name = name;
      const resMessage = validateSingleRule(rule, value || models[name], rule.param, models);
      const error = resMessage ? {
        message: resMessage,
        rule
      } : undefined;

      if (resMessage) {
        isFail = true;
      }

      cb(!isFail, error);
    }
  }

  static addMethod(ruleName, method) {
    _validator__WEBPACK_IMPORTED_MODULE_0__["default"][ruleName] = method;
  }

  setModel(newModel) {
    this.models = newModel;
  }

  setRules(newRules) {
    this.rules = newRules;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormValidator);

/***/ }),

/***/ "./src/components/form/form.ts":
/*!*************************************!*\
  !*** ./src/components/form/form.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-validator */ "./src/components/form/form-validator.ts");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./src/components/utils/object.ts");



function linked(target) {
  if (target.data.prop) {
    this.data.formItems[target.data.prop] = target;
  }

  if (target.setInForm) {
    target.setInForm();
  }

  if (!this.data.firstItem) {
    this.data.firstItem = target;
  }
}

function unlinked(target) {
  if (target.data.prop) {
    delete this.data.formItems[target.data.prop];
  }
}

Component({
  properties: {
    models: {
      type: Object,
      value: {},
      observer: '_modelChange'
    },
    rules: {
      // 格式是[{name, rules: {}}]
      type: Array,
      value: [],
      observer: '_rulesChange'
    },
    extClass: {
      type: String,
      value: ''
    }
  },
  data: {
    errors: {},
    formItems: {},
    firstItem: null
  },
  relations: {
    '../cell/cell': {
      type: 'descendant',
      linked,
      unlinked
    },
    '../checkbox-group/checkbox-group': {
      type: 'descendant',
      linked,
      unlinked
    }
  },

  attached() {
    this.initRules();
    this.formValidator = new _form_validator__WEBPACK_IMPORTED_MODULE_0__["default"](this.data.models, this.data.newRules);
  },

  methods: {
    initRules(rules) {
      const newRules = {};
      (rules || this.data.rules).forEach(rule => {
        if (rule.name && rule.rules) {
          newRules[rule.name] = rule.rules || [];
        }
      });
      this.setData({
        newRules
      });
      return newRules;
    },

    _modelChange(newVal, oldVal) {
      if (!this.formValidator) {
        return newVal;
      } // 这个必须在前面


      this.formValidator.setModel(newVal);
      const diffObj = Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["diffObject"])(oldVal, newVal);

      if (diffObj) {
        let isValid = true;
        const errors = [];
        const errorMap = {};
        Object.keys(diffObj).forEach(k => {
          this.formValidator.validateField(k, diffObj[k], function (isValided, error) {
            if (error && error[k]) {
              errors.push(error[k]);
              errorMap[k] = error[k];
            }

            isValid = isValided;
          });
        });

        this._showErrors(diffObj, errorMap);

        this.triggerEvent(isValid ? 'success' : 'fail', isValid ? {
          trigger: 'change'
        } : {
          errors,
          trigger: 'change'
        });
      }

      return newVal;
    },

    _rulesChange(newVal) {
      const newRules = this.initRules(newVal);

      if (this.formValidator) {
        this.formValidator.setRules(newRules);
      }

      return newVal;
    },

    _showAllErrors(errors) {
      Object.keys(this.data.newRules).forEach(k => {
        this._showError(k, errors && errors[k]);
      });
    },

    _showErrors(objs, errors) {
      Object.keys(objs).forEach(k => {
        this._showError(k, errors && errors[k]);
      });
    },

    _showError(prop, error) {
      const formItem = this.data.formItems[prop];

      if (formItem && formItem.data.showError) {
        formItem.setError(error);
      }
    },

    validate(cb) {
      return this.formValidator.validate((isValid, errors) => {
        this._showAllErrors(errors);

        const handleError = this.handleErrors(errors);
        this.triggerEvent(isValid ? 'success' : 'fail', isValid ? {
          trigger: 'validate'
        } : {
          errors: handleError,
          trigger: 'validate'
        });
        cb && cb(isValid, handleError);
      });
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validateField(name, value, cb = (v, error = null) => {}) {
      return this.formValidator.validateField(name, value, (isValid, errors) => {
        this._showError(name, errors);

        const handleError = this.handleErrors(errors);
        this.triggerEvent(isValid ? 'success' : 'fail', isValid ? {
          trigger: 'validate'
        } : {
          errors: handleError,
          trigger: 'validate'
        });
        cb && cb(isValid, handleError);
      });
    },

    handleErrors(errors) {
      if (errors) {
        const newErrors = [];
        this.data.rules.forEach(rule => {
          if (errors[rule.name]) {
            errors[rule.name].name = rule.name;
            newErrors.push(errors[rule.name]);
          }
        });
        return newErrors;
      }

      return errors;
    },

    addMethod(ruleName, method) {
      return this.formValidator.addMethod(ruleName, method);
    }

  }
});
/* harmony default export */ __webpack_exports__["default"] = (_form_validator__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/form/validator.ts":
/*!******************************************!*\
  !*** ./src/components/form/validator.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/string */ "./src/components/utils/string.ts");

const defaultMessage = {
  required: '%s必填',
  minlength: '长度最少为%s',
  maxlength: '长度最大为%s',
  rangelength: '长度在%s和%s之间',
  bytelength: '最多只能输入%s个字',
  min: '值最小为%s',
  max: '值最大为%s',
  range: '值的范围为%s和%s之间',
  mobile: '请输入正确的手机号',
  email: '请输入正确的电子邮件',
  url: '请输入正确的URL地址',
  equalTo: '值和字段%s不相等'
};

const isEmpty = function (val) {
  if (val === 0 || val === false) return false;
  return !val;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  required(r, val) {
    if (r.required === false) return '';else if (isEmpty(val)) return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.required, r.name);else return '';
  },

  minlength(r, val) {
    const minlen = r.minlength;
    val = val || '';
    if (val.length < minlen) return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.minlength, minlen);else return '';
  },

  maxlength(r, val) {
    const maxlen = r.maxlength;
    val = val || '';

    if (val.length > maxlen) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.maxlength, maxlen);
    } else {
      return '';
    }
  },

  rangelength(r, val) {
    const range = r.rangelength;
    val = val || '';

    if (val.length > range[1] || val.length < range[0]) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.rangelength, range[0], range[1]);
    } else {
      return '';
    }
  },

  min(r, val) {
    const min = r.min;

    if (val < min) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.min, min);
    } else {
      return '';
    }
  },

  max(r, val) {
    const max = r.max;

    if (val > max) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.max, max);
    } else {
      return '';
    }
  },

  range(r, val) {
    const range = r.range;

    if (val < range[0] || val > range[1]) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.range, range[0], range[1]);
    } else {
      return '';
    }
  },

  mobile(r, val) {
    val = val || '';

    if (r.mobile === false) {
      return '';
    } else if (val.length !== 11) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.mobile);
    } else {
      return '';
    }
  },

  email(r, value) {
    if (r.email === false) return ''; // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
    // eslint-disable-next-line

    if (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value)) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.email);
    } else {
      return '';
    }
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/url
  url(r, value) {
    if (r.url === false) return ''; // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/

    if ( // eslint-disable-next-line no-useless-escape
    !/^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)) {
      return r.message || defaultMessage.url;
    } else {
      return '';
    }
  },

  equalTo(r, value, param, models) {
    const equalTo = r.equalTo;

    if (value !== models[equalTo]) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.equalTo, r.name);
    } else {
      return '';
    }
  },

  bytelength(r, value, param) {
    param = r.param; // eslint-disable-next-line no-control-regex

    const len = value.replace(/[^\x00-\xff]/g, '**').length;

    if (len > param) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_0__["sprintf"])(r.message || defaultMessage.bytelength, param);
    } else {
      return '';
    }
  }

});

/***/ }),

/***/ "./src/components/utils/object.ts":
/*!****************************************!*\
  !*** ./src/components/utils/object.ts ***!
  \****************************************/
/*! exports provided: diff, diffObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffObject", function() { return diffObject; });
const diff = (old, newVal) => {
  if (!old && newVal || old && !newVal) return true;

  for (const k in newVal) {
    if (old[k] !== newVal[k]) return true;
  }

  for (const k in old) {
    if (old[k] !== newVal[k]) return true;
  }

  return false;
};
const diffObject = (old, newVal) => {
  if (!old && newVal) return newVal;
  if (!newVal && old) return old;
  const diffObj = {};
  let isDiff = false;

  for (const k in newVal) {
    if (old[k] !== newVal[k]) {
      isDiff = true;
      diffObj[k] = newVal[k];
    }
  }

  for (const k in old) {
    if (old[k] !== newVal[k]) {
      isDiff = true;
      diffObj[k] = newVal[k];
    }
  }

  return isDiff ? diffObj : null;
};

/***/ }),

/***/ "./src/components/utils/string.ts":
/*!****************************************!*\
  !*** ./src/components/utils/string.ts ***!
  \****************************************/
/*! exports provided: sprintf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sprintf", function() { return sprintf; });
/**
 * 占位替换
 * @method sprintf
 * @method String.prototype.sprintf
 * @example
 * "my name is %s  %s".sprintf("a","b")  =》"my name is a  b"
 */
const sprintf = (...args) => {
  let i;
  let result = args[0] || '';
  let para;
  let reg;
  const length = args.length - 1;

  if (length < 1) {
    return result;
  }

  i = 1;

  while (i < length + 1) {
    result = result.replace(/%s/, '{#' + i + '#}');
    i++;
  }

  result.replace('%s', '');
  i = 1; // eslint-disable-next-line

  while (true) {
    para = args[i];

    if (para === undefined) {
      // 0 也是可能的替换数字
      break;
    }

    reg = new RegExp('{#' + i + '#}', 'g');
    result = result.replace(reg, para);
    i++;
  }

  return result;
};

/***/ })

/******/ })