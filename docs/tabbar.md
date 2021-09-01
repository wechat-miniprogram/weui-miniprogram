# Tabbar
Tabbar组件，也可以用来作为小程序的[自定义Tabbar](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)使用

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-tabbar": "weui-miniprogram/tabbar/tabbar"
  }
}
```


## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| list | array\<object\> |  | 否 | Tabbar的项的数组，按照规范，至少要有2个Tabbar项 |
| current | number | 0 | 否 | 当前选中的Tabbar项的下标 |
| bindchange | eventhandler |  | 否 | Tabbar项发生改变的时候触发此事件，detail为{index, item}，index是Tabbar下标，item是对应的Tabbar项的配置 |

list属性是对象数组，每一项表示一个Tabbar项，其字段含义为
| 字段名 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| text | string |  | 是 | Tabbar项的标题 |
| iconPath | string |  | 否 | Tabbar项的icon图片路径，建议使用绝对路径，相对路径要相对于组件所在目录的。 |
| selectedIconPath | string |  | 否 | Tabbar项选中时的icon，建议使用绝对路径，相对路径要相对于组件所在目录的。 |
| badge | string |  | 否 | 是否显示Tabbar的右上角的Badge |
