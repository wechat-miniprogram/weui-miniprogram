# Loading加载
加载数据时的 loading 效果

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-loading": "weui-miniprogram/loading/loading"
  }
}
```


## 属性列表
| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ------ | ---- |
| extClass | string |  | 组件类名 |
| show | boolean | true | loading 是否展示 |
| animated | boolean | false | loading 显示/消失 动画 |
| duration | number | 350 | 过渡动画时间 |
| type | string | dot-gray | loading 类型，可选值有 dot-white、dot-gray、circle |
| tips | string | 加载中 | 当 type 为 circle时生效，loading辅助文字 |
