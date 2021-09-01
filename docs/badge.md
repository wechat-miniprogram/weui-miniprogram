# Badge徽章
出现在按钮、图标附近的数字或者状态标记。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-badge": "weui-miniprogram/badge/badge"
  }
}
```

## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| extClass | string |  | 否 | 组件类名 |
| content | string |  | 否 | 内容区域 |

## 提示
不设置 content 属性时，默认展示小圆点 