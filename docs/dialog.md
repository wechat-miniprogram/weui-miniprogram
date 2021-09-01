# Dialog
Dialog弹窗组件。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-dialog": "weui-miniprogram/dialog/dialog"
  }
}
```


## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| title | string |  | 否 | 弹窗的标题 |
| buttons | array\<object\> | [] | 否 | 底部的按钮组，建议最多提供两个按钮 |
| mask | boolean |  | 是 | 是否显示蒙层 |
| mask-closable | boolean |  | 是 | 点击蒙层是否可以关闭 |
| show | boolean | false | 否 | 是否显示弹窗 |
| bindclose | eventhandler |  | 否 | 弹窗关闭的时候触发的事件 |
| bindbuttontap | eventhandler |  | 否 | buttons按钮组点击时触发的事件，detail为{index, item}，item是按钮的配置项 |

buttons提供按钮组配置，每一项表示一个按钮，每一项的属性为
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| extClass | string |  | 否 | 按钮的额外的class，可用于修改组件内部的样式 |
| text | string |  | 否 | 按钮的文本 |

## Slot
弹窗组件只有一个默认slot用于显示弹窗的内容
