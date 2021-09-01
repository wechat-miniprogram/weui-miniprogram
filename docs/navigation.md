# Navigation
Navigation是小程序的顶部导航组件，当页面配置`navigationStyle`设置为`custom`的时候可以使用此组件替代原生导航栏。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-navigation-bar": "weui-miniprogram/navigation-bar/navigation-bar"
  }
}
```



## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| title | string |  | 否 | 导航标题，如果不提供，则名为center的slot有效 |
| back | boolean | true | 否 | 是否显示返回按钮，默认点击按钮会执行navigateBack，如果为false，则名为left的slot有效 |
| delta | number | 1 | 否 | 当back为true的时候有效，表示navigateBack的delta参数 |
| background | string | #f8f8f8 | 否 | 导航背景色 |
| color | string |  | 否 | 导航颜色 |
| loading | boolean |  | 否 | 是否显示标题左侧的loading |
| show | boolean |  | 否 | 显示隐藏导航，隐藏的时候navigation的高度占位还在 |
| animated | boolean |  | 否 | 显示隐藏导航的时候是有opacity过渡动画 |
| bindback | eventhandler |  | 否 | 在back为true时，点击back按钮触发此事件，detail包含delta |

## Slot
| 名称 | 描述 |
| ---- | ---- |
| left | 左侧slot，在back按钮位置显示，当back为false的时候有效 |
| center | 标题slot，在标题位置显示，当title为空的时候有效 |
| right | 在导航的右侧显示 |
