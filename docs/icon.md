# Icon
图标

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-icon": "weui-miniprogram/icon/icon"
  }
}
```

## 示例代码
```html
<!--WXML示例代码-->
<mp-icon type="field" icon="add" color="black" size="{{25}}"></mp-icon>
<mp-icon icon="add" color="black" size="{{25}}"></mp-icon>
```

## 效果展示
![](./img/icon.png#width:300px)

## 属性列表
| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ------ | ---- |
| extClass | string |  | 组件类名 |
| type | string | outline| Icon类型，可选值 outline（描边），field（填充） |
| icon | string |  | Icon名字 |
| size | number | 20 | Icon的大小，单位 px |
| color | string | black | Icon的颜色，默认黑色 |

## Icon 列表
![](./img/iconList1.jpg#width:1366px)
![](./img/iconList2.jpg#width:1366px)
