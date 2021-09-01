# 其他组件

出于性能考虑，`weui-miniprogram` 并没有对所有 WeUI 组件进行封装（如：flex布局组件），可以直接使用 WeUI 中定义的组件结构（参考 [Demo](https://github.com/wechat-miniprogram/weui-miniprogram/tree/master/tools/demo)）。

## 示例代码

在引入 weui.wxss 后，可以直接使用 weui-wxss 中定义的 class 自定义样式，以 flex 组件为例：

```html
<view class="page__hd">
    <view class="page__title">Flex</view>
    <view class="page__desc">Flex布局</view>
</view>
<view class="page__bd page__bd_spacing">
    <view class="weui-flex">
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
    </view>
    <view class="weui-flex">
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
    </view>
    <view class="weui-flex">
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
    </view>
    <view class="weui-flex">
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
    </view>
    <view class="weui-flex">
        <view><view class="placeholder">weui</view></view>
        <view class="weui-flex__item"><view class="placeholder">weui</view></view>
        <view><view class="placeholder">weui</view></view>
    </view>
</view>
```

渲染到页面上会得到以下结果：

![flex布局](./img/flex.png#width:396px)

其他组件可以参考库中提供的 [Demo](https://github.com/wechat-miniprogram/weui-miniprogram/tree/master/tools/demo)