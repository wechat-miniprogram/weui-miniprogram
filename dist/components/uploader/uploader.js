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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fuploader%2Fuploader!./src/components/uploader/uploader.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fuploader%2Fuploader!./src/components/uploader/uploader.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@mpflow/webpack-plugin/lib/loaders/page-loader.js?appContext=src&outputPath=components%2Fuploader%2Fuploader!./src/components/uploader/uploader.ts ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./uploader.ts */ "./src/components/uploader/uploader.ts")

/***/ }),

/***/ "./src/components/uploader/uploader.ts":
/*!*********************************************!*\
  !*** ./src/components/uploader/uploader.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    title: {
      type: String,
      value: '图片上传'
    },
    sizeType: {
      type: Array,
      value: ['original', 'compressed']
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera']
    },
    maxSize: {
      type: Number,
      value: 5 * 1024 * 1024
    },
    maxCount: {
      // 最多上传多少个文件
      type: Number,
      value: 1
    },
    files: {
      // 当前的图片列表, {url, error, loading}
      type: Array,
      value: [],

      observer(newVal) {
        this.setData({
          currentFiles: newVal
        });
      }

    },
    select: {
      // 过滤某个文件
      type: null,
      value: () => {}
    },
    upload: {
      // 返回Promise的一个文件上传的函数
      type: null,
      value: null
    },
    tips: {
      type: String,
      value: ''
    },
    extClass: {
      type: String,
      value: ''
    },
    showDelete: {
      // 是否显示delete按钮
      type: Boolean,
      value: true
    }
  },
  data: {
    currentFiles: [],
    showPreview: false,
    previewImageUrls: []
  },

  ready() {},

  methods: {
    previewImage(e) {
      const {
        index
      } = e.currentTarget.dataset;
      const previewImageUrls = [];
      this.data.files.forEach(item => {
        previewImageUrls.push(item.url);
      });
      this.setData({
        previewImageUrls,
        previewCurrent: index,
        showPreview: true
      });
    },

    chooseImage() {
      if (this.uploading) return;
      wx.chooseImage({
        count: this.data.maxCount - this.data.files.length,
        sizeType: this.data.sizeType,
        sourceType: this.data.sourceType,
        success: res => {
          // console.log('chooseImage resp', res)
          // 首先检查文件大小
          let invalidIndex = -1; // @ts-ignore

          res.tempFiles.forEach((item, index) => {
            if (item.size > this.data.maxSize) {
              invalidIndex = index;
            }
          });

          if (typeof this.data.select === 'function') {
            const ret = this.data.select(res);

            if (ret === false) {
              return;
            }
          }

          if (invalidIndex >= 0) {
            this.triggerEvent('fail', {
              type: 1,
              errMsg: `chooseImage:fail size exceed ${this.data.maxSize}`,
              total: res.tempFilePaths.length,
              index: invalidIndex
            }, {});
            return;
          } // 获取文件内容


          const mgr = wx.getFileSystemManager();
          const contents = res.tempFilePaths.map(item => {
            // @ts-ignore
            const fileContent = mgr.readFileSync(item);
            return fileContent;
          });
          const obj = {
            tempFilePaths: res.tempFilePaths,
            tempFiles: res.tempFiles,
            contents
          }; // 触发选中的事件，开发者根据内容来上传文件，上传了把上传的结果反馈到files属性里面

          this.triggerEvent('select', obj, {});
          const files = res.tempFilePaths.map((item, i) => ({
            loading: true,
            // @ts-ignore
            url: `data:image/jpg;base64,${wx.arrayBufferToBase64(contents[i])}`
          }));
          if (!files || !files.length) return;

          if (typeof this.data.upload === 'function') {
            const len = this.data.files.length;
            const newFiles = this.data.files.concat(files);
            this.setData({
              files: newFiles,
              currentFiles: newFiles
            });
            this.loading = true;
            this.data.upload(obj).then(json => {
              this.loading = false;

              if (json.urls) {
                const oldFiles = this.data.files;
                json.urls.forEach((url, index) => {
                  oldFiles[len + index].url = url;
                  oldFiles[len + index].loading = false;
                });
                this.setData({
                  files: oldFiles,
                  currentFiles: newFiles
                });
                this.triggerEvent('success', json, {});
              } else {
                this.triggerEvent('fail', {
                  type: 3,
                  errMsg: 'upload file fail, urls not found'
                }, {});
              }
            }).catch(err => {
              this.loading = false;
              const oldFiles = this.data.files;
              res.tempFilePaths.forEach((item, index) => {
                oldFiles[len + index].error = true;
                oldFiles[len + index].loading = false;
              });
              this.setData({
                files: oldFiles,
                currentFiles: newFiles
              });
              this.triggerEvent('fail', {
                type: 3,
                errMsg: 'upload file fail',
                error: err
              }, {});
            });
          }
        },
        fail: fail => {
          if (fail.errMsg.indexOf('chooseImage:fail cancel') >= 0) {
            this.triggerEvent('cancel', {}, {});
            return;
          }

          fail.type = 2;
          this.triggerEvent('fail', fail, {});
        }
      });
    },

    deletePic(e) {
      const index = e.detail.index;
      const files = this.data.files;
      const file = files.splice(index, 1);
      this.setData({
        files,
        currentFiles: files
      });
      this.triggerEvent('delete', {
        index,
        item: file[0]
      });
    }

  }
});

/***/ })

/******/ })