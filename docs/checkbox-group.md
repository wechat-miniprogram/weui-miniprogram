# Checkbox-group和Checkbox
Checkbox-group是由一组单选或者多选Checkbox组件组成，效果如下图所示。

![](./img/checkbox-group.png#width:300px)

## 引入组件
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-checkbox-group": "weui-miniprogram/checkbox-group/checkbox-group",
    "mp-checkbox": "weui-miniprogram/checkbox/checkbox",
    "mp-cells": "weui-miniprogram/cells/cells"
  }
}
```

## 示例代码
```html
<!--WXML示例代码-->
<mp-cells title="单选列表项">
    <mp-checkbox-group prop="radio" multi="{{false}}" bindchange="radioChange">
        <mp-checkbox wx:for="{{radioItems}}" wx:key="value" label="{{item.name}}" value="{{item.value}}" checked="{{item.checked}}"></mp-checkbox>
    </mp-checkbox-group>
</mp-cells>
<mp-cells title="复选列表项">
    <mp-checkbox-group prop="checkbox" multi="{{true}}" bindchange="checkboxChange">
        <mp-checkbox wx:for="{{checkboxItems}}" wx:key="value" label="{{item.name}}" value="{{item.value}}" checked="{{item.checked}}"></mp-checkbox>
    </mp-checkbox-group>
</mp-cells>
```

```js
// page.js示例代码
Page({
    data: {
        radioItems: [
            {name: 'cell standard', value: '0', checked: true},
            {name: 'cell standard', value: '1'}
        ],
        checkboxItems: [
            {name: 'standard is dealt for u.', value: '0', checked: true},
            {name: 'standard is dealicient for u.', value: '1'}
        ],
    },
    radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems,
            [`formData.radio`]: e.detail.value
        });
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value);

        var checkboxItems = this.data.checkboxItems, values = e.detail.value;
        for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
            checkboxItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if(checkboxItems[i].value == values[j]){
                    checkboxItems[i].checked = true;
                    break;
                }
            }
        }

        this.setData({
            checkboxItems: checkboxItems,
            [`formData.checkbox`]: e.detail.value
        });
    },
});
```

## checkbox-group组件属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| multi | boolean | true | 否 | 单选还是多选 |
| prop | string | | 否 | [Form](./form.md)表单组件校验的字段名 |
| bindchange | eventhandler | | 否 | Checkbox-group发生改变时候触发的事件，detail为{value}，单选的value为checkbox的值，多选的value为选中的checkbox的值组成的数组 |

## checkbox-group的Slot
| 名称 | 描述 |
| ---- | ---- |
| 默认 | 内容slot |

## checkbox组件属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| multi | boolean | true | 否 | 单选还是多选 |
| checked | boolean | | 否 | 是否选中 |
| value | string | | 否 | checkbox的值 |
| bindchange | eventhandler | | 否 | Checkbox发生改变时候触发的事件，detail为{value}，value为checkbox的值 |
