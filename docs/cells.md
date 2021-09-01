# Cells
Cells是列表分组，常用于嵌套一组Cell或者[Checkbox](./checkbox.md)，注意，Checkbox-group和Cell组件都必须放在Cells组件下面，Cells效果如下图所示。

![](./img/cells.png#width:300px)

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-cells": "weui-miniprogram/cells/cells",
    "mp-cell": "weui-miniprogram/cell/cell"
  }
}
```

## 示例代码
```html
<!--WXML示例代码-->
<mp-cells ext-class="my-cells" title="带说明的列表项">
    <mp-cell value="标题文字" footer="说明文字"></mp-cell>
    <mp-cell>
        <view>标题文字（使用slot）</view>
        <view slot="footer">说明文字</view>
    </mp-cell>
</mp-cells>
```

```js
// page.js示例代码
Page({
});
```


## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| title | string |  | 否 | Cells的标题 |
| footer | string |  | 否 | Cells底部的文字 |

## Slot
| 名称 | 描述 |
| ---- | ---- |
| 默认 | 内容slot |
