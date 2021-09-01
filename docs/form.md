# Form
Form表单组件，结合Cell、Checkbox-group、Checkbox组件等做表单校验。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-form": "weui-miniprogram/form/form"
  }
}
```

## 示例代码

{% preview('mp_weui',"form/form.json", "form/form.wxml","form/form.js", "page=form/form.html") %}

## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| rules | object\<array\> |  | 否 | 表单校验的规则列表，格式下面详细介绍 |
| models | object |  | 否 | 需要校验的表单的数据 |
| bindsuccess | eventhandler |  | 否 | 校验成功触发的事件，detail是{trigger}，trigger的值是change或validate，表示是输入改成触发的校验还是主动调用的validate接口 |
| bindfail | eventhandler |  | 否 | 校验失败触发的事件，detail是{trigger, errors}，trigger的值是change或validate，表示是输入改成触发的校验还是主动调用的validate接口。errors是错误的字段列表。 |

rules是表单校验的规则列表，列表每一项表示一个字段的校验规则，注意，必须要在Cell或Checkbox-group组件声明prop属性，表单校验规则才生效，表单校验规则的定义如下：

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| name | string |  | 是 | 校验的字段名 |
| rules | array/object |  | 是 | 校验的规则，如果有多项，则是数组 |
| rules.message | string |  | 否 | 校验失败时候提示的文字 |
| rules.validator | function |  | 否 | 自定义校验函数，接受rule, value, param, models四个参数，其中rule格式为{name: '字段名', message: '失败信息'}, value是字段值，param是校验参数，models是form组件的models属性。函数返回错误提示，表示校验失败，错误提示会通过回调返回给开发者 |
| rules.\[rule\] | string |  | 否 | rule是变量，表示内置的校验规则名称，比如required，则校验规则对象为{name: "fieldName", rules: {required: true}}，下面会详细介绍所有的内置规则 |

## 内置校验规则
| 规则名 | 参数 | 说明 |
| ---- | ---- | ---- |
| required |  | 是否必填 |
| minlength | number | 最小长度 |
| maxlength | number | 最大长度 |
| rangelength | [number, number] | 长度范围，参数为[最小长度， 最大长度] |
| bytelength | number | 字节长度 |
| range | [number, number] | 数字的大小范围 |
| min | number | 最小值限制 |
| max | number | 最大值限制 |
| mobile |  | 手机号码校验 |
| email |  | 电子邮件校验 |
| url |  | URL链接地址校验 |
| equalTo | string | 相等校验，参数是另外一个字段名 |

## 接口
### validate
validate接口接受类型为function的callback，callback有isValid和errors两个参数，isValid表示是否校验通过，errors在校验失败的时候的值为失败的字段列表。

### validateField
validateField接口接受2个参数，
第一个是字段名，第二个是类型为function的callback，callback有isValid和errors两个参数，isValid表示是否校验通过，errors在校验失败的时候的值为失败的字段列表。

## Slot
| 名称 | 描述 |
| ---- | ---- |
| 默认 | 内容slot |