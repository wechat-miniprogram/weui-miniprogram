# Half Screen Dialog
半屏弹窗，辅助完成当前页面任务时；提醒用户并引导用户的下一步操作；用户主动发起的任务时。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-half-screen-dialog": "weui-miniprogram/half-screen-dialog/half-screen-dialog"
  }
}
```

## 示例代码
```html
<!--WXML示例代码-->
<mp-half-screen-dialog 
  bindbuttontap="buttontap"
  show="{{show}}"
  maskClosable="{{false}}" 
  title="测试标题B" 
  subTitle="测试标题B的副标题"
  desc="辅助描述内容，可根据实际需要安排"
  tips="辅助提示内容，可根据实际需要安排"
  buttons="{{buttons}}"
></mp-half-screen-dialog>
<button class="weui-btn" type="primary" bindtap="open">Open</button>
```

```js
// page.js示例代码
Page({
    data: {
        show: false,
        buttons: [
            {
                type: 'default',
                className: '',
                text: '辅助操作',
                value: 0
            },
            {
                type: 'primary',
                className: '',
                text: '主操作',
                value: 1
            }
        ]
    },
    open: function () {
        this.setData({
            show: true
        })
    },
    buttontap(e) {
        console.log(e.detail)
    }
});
```

## 效果展示
![](./img/half-screen-dialog.png#width:300px)

## 属性列表
| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ------ | ---- |
| extClass | string |  | 组件类名 |
| closabled | boolean | true| 是否展示关闭按钮 |
| title | string |  | 组件标题，可通过slot自定义 |
| subTitle | string |  | 组件副标题，可通过slot自定义 |
| desc | string |  | 辅助操作描述内容 |
| tips | string |  | 辅助操作提示内容 |
| maskClosable | boolean | true | 点击遮罩是否关闭该组件 |
| mask | boolean | true | 是否需要遮罩层 |
| show | boolean | true | 是否开启弹窗 |
| buttons | array | [] | 辅助操作按钮列表 |

## 自定义事件
| 事件名称 | 说明 | 回调参数 |
| ---- | ---- | ------ |
| bindbuttontap | 点击辅助操作按钮时触发 | e.detail = { index, item } |
| bindclose | 组件关闭时候触发 |  |

## Slot
| 名称 | 描述 |
| ---- | ---- |
| title | 组件自定义标题栏 |
| desc | 组件自定义操作描述 |
| footer | 操作按钮区域slot |