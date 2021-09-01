# Cell
Cell是列表或者是表单的一项，常用于设置页的展示，或者用在表单中，作为表单的每一个要填写的项，Cell必须要放在[Cells](./cells.md)组件的下面。

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

## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| icon | string |  | 否 | Cell的最左侧的icon，是本地图片的路径，icon和名为icon的slot互斥 |
| title | string |  | 否 | Cell最左侧的标题，一般用在[Form](./form.md)表单组件里面，icon和title二选一，title和名为title的slot互斥 |
| hover | boolean | false | 否 | 是否有hover效果 |
| link | boolean | false | 否 | 右侧是有跳转的箭头，`v1.0`后的版本，`link: true` 会自带 hover 效果 |
| value | string |  | 是 | Cell的值，和默认的slot互斥 |
| show-error | boolean | false | 否 | 用在[Form](./form.md)表单组件里面，在表单校验出错的时候是否把Cell标为warn状态 |
| prop | string |  | 否 | 用在[Form](./form.md)表单组件里面，需要校验的表单的字段名 |
| footer | string |  | 否 | Cell右侧区域的内容，和名为footer的slot互斥 |
| inline | boolean |  | 否 | 用在[Form](./form.md)表单组件里面，表示表单项是左右显示还是上下显示 |

## Slot
| 名称 | 描述 |
| ---- | ---- |
| icon | 左侧图标slot |
| title | 标题slot |
| 默认 | 内容slot |
| footer | 右侧区域slot |

