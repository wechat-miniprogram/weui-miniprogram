# Slideview
左滑删除组件，基础库 2.4.4 开始支持。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-slideview": "weui-miniprogram/slideview/slideview"
  }
}
```


## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| disable | boolean | false | 否 | 是否禁用slideview |
| buttons | array\<object\> | [] | 是 | 左滑的按钮组，建议最多3个按钮 |
| icon | boolean | false | 否 | 按钮是否是icon |
| show | boolean |  | 否 | 是否显示slideview，可以控制隐藏显示 |
| duration | boolean | 350 | 否 | slideview显示隐藏的动画的时长 |
| throttle | number | 40 | 否 | 手指移动距离超过该值的时候，触发slideview的显示隐藏 |
| bindbuttontap | eventhandler |  | 否 | buttons按钮组点击时触发的事件，detail为{index, data}，data是按钮的配置项传入的data参数 |
| bindhide | eventhandler |  | 否 | 隐藏时触发的事件 |
| bindshow | eventhandler |  | 否 | 显示时触发的事件 |

buttons提供按钮组配置，每一项表示一个按钮，每一项的属性为
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| extClass | string |  | 否 | 按钮的额外的class，可用于修改组件内部的样式 |
| type | string | default | 否 | 按钮的类型，取值default和warn，warn是红色按钮 |
| text | string |  | 否 | 按钮的文本 |
| src | string |  | 否 | 如果icon为true，此属性有效 |
| data | any |  | 否 | 触发bindbuttontap回传的数据 |
