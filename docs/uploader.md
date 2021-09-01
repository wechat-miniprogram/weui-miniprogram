# Uploader
图片上传Uploader组件。

## 代码引入
在 page.json 中引入组件
```json
{
  "usingComponents": {
    "mp-uploader": "weui-miniprogram/uploader/uploader"
  }
}
```


## 属性列表
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| ext-class | string |  | 否 | 添加在组件内部结构的class，可用于修改组件内部的样式 |
| title | string | 图片上传 | 否 | 组件标题 |
| tips | string | | 否 | 组件的提示 |
| delete | boolean | | 是 | 是否显示删除按钮 |
| size-type | array |  | 是 | 和chooseImage的sizeType参数一样 |
| source-type | array |  | 是 | 和chooseImage的sourceType参数一样 |
| max-size | number | 5 * 1024 * 1024 | 是 | 图片上传的最大文件限制，默认是5M |
| max-count | number | 1 | 否 | 图片上传的个数限制 |
| files | array\<object\> |  | 否 | 当前的图片列表 |
| select | function |  | 否 | 选择图片时的过滤函数，返回true表示图片有效 |
| upload | function |  | 否 | 图片上传的函数，返回Promise，Promise的callback里面必须resolve({urls})表示成功，否则表示失败 |
| bindselect | eventhandler |  | 否 | 图片选择触发的事件，detail为{tempFilePaths, tempFiles, contents},其中tempFiles和tempFilePaths是chooseImage返回的字段，contents表示所选的图片的二进制Buffer列表 |
| bindcancel | eventhandler |  | 否 | 取消图片选择的事件，detail为{} |
| bindsuccess | eventhandler |  | 否 | 图片上传成功的事件，detail为{urls}，urls为upload函数上传成功返回的urls参数 |
| bindfail | eventhandler |  | 否 | 图片上传失败的事件，detail为{type, errMsg}，type为1表示图片超过大小限制，type为2表示选择图片失败，type为3表示图片上传失败。 |
| binddelete | eventhandler |  | 否 | 删除图片触发的事件，detail为{index, item}，index表示删除的图片的下标，item为图片对象。 |

files表示当前的图片列表，每一项的定义为
| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| url | string |  | 是 | 图片链接 |
| loading | boolean |  | 否 | 图片上传中 |
| error | boolean |  | 否 | 图片上传失败 |
