# Searchbar
搜索组件Searchbar提供搜索的功能，并展示搜索的结果。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-searchbar": "weui-miniprogram/searchbar/searchbar"
  }
}
```



## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| focus | boolean | false | 否 | 是否在组件开始创建的时候focus搜索输入框 |
| placeholder | string | 搜索 | 否 | 搜索输入框的placeholder |
| value | string |  | 否 | 搜索输入框的默认值 |
| search | function |  | 是 | 输入过程不断调用此函数得到新的搜索结果，参数是输入框的值value，返回Promise实例 |
| throttle | number | 500 | 否 | 调用search函数的间隔，单位ms |
| cancelText | string | 取消 | 否 | 取消按钮的文本 |
| cancel | boolean | true | 否 | 是否显示取消按钮 |
| bindfocus | eventhandle |  | 否 | 在输入框focus的时候触发事件 |
| bindblur | eventhandle |  | 否 | 在输入框blur的时候触发事件 |
| bindclear | eventhandle |  | 否 | 在clear按钮点击的时候触发事件 |
| bindinput | eventhandle |  | 否 | 在输入框输入过程中触发事件 |
| bindselectresult | eventhandle |  | 否 | 在选择搜索结果的时候触发事件 |
