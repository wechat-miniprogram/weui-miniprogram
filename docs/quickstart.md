# 快速上手

## 使用之前

扩展组件库基于小程序自定义组件构建，在使用扩展组件库之前，建议先阅读熟悉小程序[自定义组件](../../framework/custom-component/index.md)。

## 引入组件

1. 通过 [useExtendedLib 扩展库](../../reference/configuration/app.md#useExtendedLib) 的方式引入，这种方式引入的组件将不会计入代码包大小。
2. 可以通过[npm](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)方式下载构建，npm包名为`weui-miniprogram`


## 如何使用

首先要在 app.wxss 里面引入 weui.wxss，如果是通过 npm 引入，需要先构建 npm（“工具”菜单 --> “构建 npm”）

**通过 [useExtendedLib 扩展库](../../reference/configuration/app.md#useExtendedLib) 的方式引入，可省略 import 步骤**

```css
@import 'weui-miniprogram/weui-wxss/dist/style/weui.wxss';
```

然后可以在页面中引入 dialog 弹窗组件
1. 首先在页面的 json 文件加入 usingComponents 配置字段
```
{
  "usingComponents": {
    "mp-dialog": "weui-miniprogram/dialog/dialog"
  }
}
```

2. 然后可以在对应页面的 wxml 中直接使用该组件

```html
<mp-dialog title="test" show="{{true}}" bindbuttontap="tapDialogButton" buttons="{{[{text: '取消'}, {text: '确认'}]}}">
    <view>test content</view>
</mp-dialog>
```

完整的组件的使用文档请参考具体的组件的文档。

## 修改组件内部样式
每个组件可以设置`ext-class`这个属性，该属性提供设置在组件WXML顶部元素的class，组件的[addGlobalClass](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)的options都设置为true，所以可以在页面设置wxss样式来覆盖组件的内部样式。需要注意的是，如果要覆盖组件内部样式，必须wxss的样式选择器的优先级比组件内部样式优先级高。
`addGlobalClass`在基础库2.2.3开始支持。

## 适配 DarkMode

在根结点（或组件的外层结点）增加属性 `data-weui-theme="dark"`，即可把 WeUI 组件切换到 DarkMode 的表现，如:

```html
<view data-weui-theme="dark">
    ...
</view>
```

也可以参考库中提供的 [Demo](https://github.com/wechat-miniprogram/weui-miniprogram/tree/master/tools/demo)。