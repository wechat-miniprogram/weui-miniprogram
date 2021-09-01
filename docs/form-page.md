# FormPage
表单页面，规定了标准表单的顶部的标题和底部的按钮提示等区域的规范

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-form-page": "weui-miniprogram/form-page/form-page",
    "mp-form": "weui-miniprogram/form/form"
  }
}
```

## 示例代码
```html
<!--WXML示例代码-->
<mp-form-page title="表单结构" subtitle="展示表单页面的信息结构样式, 分别由头部区域/控件区域/提示区域/操作区域和底部信息区域组成。">
    <mp-form id="form" rules="{{rules}}" models="{{formData}}">
    </mp-form>
    <checkbox-group slot="tips" bindchange="bindAgreeChange">
        <label class="weui-agree" for="weuiAgree">
            <view class="weui-agree__text">
                <checkbox class="weui-agree__checkbox" id="weuiAgree" value="agree" checked="{{isAgree}}" />
                <view class="weui-agree__checkbox-icon">
                    <icon class="weui-agree__checkbox-icon-check" type="success_no_circle" size="9" wx:if="{{isAgree}}"></icon>
                </view>
                阅读并同意<navigator url="" class="weui-agree__link">《相关条款》</navigator>
            </view>
        </label>
    </checkbox-group>
    <view slot="button">
        <button class="weui-btn" type="primary" bindtap="submitForm">确定</button>
    </view>
</mp-form-page>
```

## 效果展示
![](./img/form-page.png#width:300px)

## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| title | string |  | 否 | 标题 |
| subtitle | boolean |  | 否 | 副标题 |

## Slot
| 名称 | 描述 |
| ---- | ---- |
| title | 标题区域slot和title属性互斥 |
| tips | 底部确认按钮前面的提示区域 |
| button | 底部提交按钮区域 |
| suffixtips | 提交按钮下面的提示区域 |
| footer | 页脚的内容区域 |