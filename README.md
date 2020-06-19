## WeUI 组件库简介

[![](https://img.shields.io/npm/v/weui-miniprogram.svg?style=flat-square)](https://www.npmjs.com/package/weui-miniprogram)
[![](https://img.shields.io/npm/dw/weui-miniprogram?style=flat-square)](https://www.npmjs.com/package/weui-miniprogram)
[![](https://img.shields.io/travis/wechat-miniprogram/weui-miniprogram.svg?style=flat-square)](https://github.com/wechat-miniprogram/weui-miniprogram)
[![](https://img.shields.io/github/license/wechat-miniprogram/weui-miniprogram.svg?style=flat-square)](https://github.com/wechat-miniprogram/weui-miniprogram)
[![](https://img.shields.io/codecov/c/github/wechat-miniprogram/weui-miniprogram.svg?style=flat-square)](https://github.com/wechat-miniprogram/weui-miniprogram)

这是一套基于样式库[weui-wxss](https://github.com/Tencent/weui-wxss/)开发的小程序扩展组件库，同微信原生视觉体验一致的扩展组件库，由微信官方设计团队和小程序团队为微信小程序量身设计，令用户的使用感知更加统一。

## 如何使用

详细使用参考[文档](https://developers.weixin.qq.com/miniprogram/dev/extended/weui)

## 开发

1. 初始化

```
npm run init
```

2. 执行命令：

```
npm run dev
```

默认会在包根目录下生成 `miniprogram_dev` 目录，src 中的源代码会被构建并生成到 `miniprogram_dev/components` 目录下。如果需要监听文件变化动态构建，则可以执行命令：

```
npm run watch
```

3. 生成的 `miniprogram_dev` 目录是一个小程序项目目录，以此目录作为小程序项目目录在开发者工具中打开即可查看自定义组件被使用的效果。

## 其他命令

-   清空 `miniprogram_dist` 目录：

```
npm run clean
```

-   清空 `miniprogram_dev` 目录：

```
npm run clean-dev
```

## 适配 DarkMode

在根结点（或组件的外层结点）增加属性 `data-weui-theme="dark"`，即把 WeUI 组件切换到 DarkMode 的表现，如:

```html
<view data-weui-theme="dark">
    ...
</view>
```
