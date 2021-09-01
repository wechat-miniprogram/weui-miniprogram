# Gallery画廊
用于多张图片展示，类似原生的wx.previewImage的展示。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-gallery": "weui-miniprogram/gallery/gallery"
  }
}
```



## 属性列表
| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ------ | ---- |
| extClass | string |  | 组件类名 |
| show | boolean | true| 组件展示/隐藏 |
| imgUrls | array | [] | 需要展示的图片集 |
| current | number | 0 | 当前展示的图片index |
| showDelete | boolean | true | 是否显删除按钮 |
| hideOnClick | boolean | true | 点击图片是否隐藏该组件 |

## 自定义事件
| 事件名称 | 说明 | 回调参数 |
| ---- | ---- | ------ |
| change | 当前图片滑动切换之后触发 | e.detail = { current } 当前图片的位置 |
| delete | 当前图片被删除后触发（delete 属性需要设为 true） | e.detail = { url, index } 被删除图片的 url 和 index |
| hide | 组件被隐藏时候触发（hideOnClick 属性需要设为 true） | -- |