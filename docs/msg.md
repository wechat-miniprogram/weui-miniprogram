# Msg
Msg组件提供操作确认页或操作成功或失败的标准的确认页的样式。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-msg": "weui-miniprogram/msg/msg"
  }
}
```



## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| type | string |  | 否 | 顶部图标的样式，和[icon](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html)组件的type属性用法一样 |
| size | number | 64 | 否 | type不为空的时候有效，和[icon](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html)组件的size属性用法一样 |
| icon | string | | 否 | type为空的时候，icon的值是顶部图标的路径 |
| title | string |  | 否 | 标题 |
| desc | string | | 否 | 描述内容，和desc的slot显示在相同的位置 |

## Slot
| 名称 | 描述 |
| ---- | ---- |
| desc | 描述内容slot |
| extend | desc下面的说明区域的slot |
| handle | 操作按钮区域slot |
| footer | 底部slot |
