# Toptips
Toptips顶部错误提示组件，常用于表单校验或提交请求到后台成功或失败的错误提示，如下图所示。

![](./img/toptips.png#width:300px)

## 引入组件
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-toptips": "weui-miniprogram/toptips/toptips"
  }
}
```

## 示例代码
```html
<!--WXML示例代码-->
<mp-toptips msg="{{error}}" type="error" show="{{error}}"></mp-toptips>
```

```js
// page.js示例代码
Page({
    data: {
        error: ''
    },
    onShow() {
        this.setData({
            error: '这是一个错误提示'
        })
    }
});
```

## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| type | string |  | 否 | 提示类型，可以为info、error、success，表示三种提示颜色 |
| show | boolean | false | 否 | 是否显示Toptips |
| msg | string |  | 是 | 提示内容 |
| delay | number | 2000 | 否 | 提示内容显示后隐藏的ms值 |
| bindhide | eventhandler |  | 否 | 顶部提示隐藏的时候触发的事件 |
