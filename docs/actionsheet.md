# ActionSheet
底部弹起的操作按钮组件

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-actionSheet": "weui-miniprogram/actionsheet/actionsheet"
  }
}
```

## 示例代码
```html
<!--WXML示例代码-->
<mp-actionSheet bindactiontap="btnClick" show="{{showActionsheet}}" actions="{{groups}}" title="这是一个标题，可以为一行或者两行。">
</mp-actionSheet>
```

```js
Page({
    data: {
        showActionsheet: false,
        groups: [
            { text: '示例菜单', value: 1 },
            { text: '示例菜单', value: 2 },
            { text: '负向菜单', type: 'warn', value: 3 }
        ]
    },
    close: function () {
        this.setData({
            showActionsheet: false
        })
    },
    btnClick(e) {
        console.log(e)
        this.close()
    }
})
```
## 效果展示
![](./img/actionsheet.png#width:300px)

## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| title | string |  | 否 | 标题 |
| show-cancel | boolean | true | 否 | 是否显示取消按钮 |
| cancel-text | string |  | 否 | 取消按钮的文本 |
| mask-class | string |  | 否 | 背景蒙层的class |
| ext-class | string |  | 否 | ActionSheet额外的class |
| mask-closable | boolean | true | 否 | 点击背景蒙层是否可以关闭ActionSheet |
| mask | boolean | true | 否 | 是否显示背景蒙层 |
| show | boolean | false | 否 | 是否显示ActionSheet |
| actions | Array | false | 是 | ActionSheet的按钮项的配置，每一项是包含text、value、type的Object，type的取值为warn和default，表示两种样式 |
| bindclose | eventhandler |  | 否 | 点击背后的mask关闭掉ActionSheet触发的事件 |
| bindactiontap | eventhandler |  | 否 | 点击ActionSheet的按钮项触发的事件，detail为{ value, index } |

## Slot
| 名称 | 描述 |
| ---- | ---- |
| title | 标题区域slot |