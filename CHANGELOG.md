# 更新日志

## 1.5.5

- fix: 修复 cell 丢失边缘线样式
- fix: 修复 checkbox 样式错误
- fix: 修复 navigation-bar background 没生效

## 1.5.4

- feat: half-screen-dialog, dialog, actionsheet, gallery, toptips 添加 rootPortal 参数
- fix: 修复 half-screen-dialog, dialog, actionsheet, gallery, toptips 默认不使用 root-portal

## 1.5.3

- fix: 修复 slideview 拆分 skyline 实现

## 1.5.2

- feat: 升级 `weui-wxss` 至 2.6.17
- feat: slideview 拆分 skyline 实现

## 1.5.1

- feat: 修复 dark-mode 实现

## 1.5.0

- feat: 重构 skyline-patch
- feat: 修改 ext-class 实现

## 1.4.2

- fix: 修复 half-screen-dialog skyline 动画
- fix: 修复 navigation-bar 样式

## 1.4.1

- fix: 修复 half-screen-dialog skyline 动画

## 1.4.0

- feat: 正式支持 skyline

## 1.3.1

- fix: 移除 babel 依赖

## 1.3.0

- feat: skyline 兼容
- feat: 升级 `weui-wxss` 至 2.6.6

## 1.2.10

- fix: half-screen-dialog 恢复滚动

## 1.2.9

- fix: dialog 修复 z-index 层级

## 1.2.8

- fix: searchbar 修复聚焦状态

## 1.2.7

- fix: dialog 修复自动聚焦 outline #216
- fix: half-screen-dialog 修复自动聚焦 outline #216
- fix: actionsheet 修复自动聚焦 outline #216
- fix: gallery 修复自动聚焦 outline #216

## 1.2.6

- feat: dialog 使用 virtualHost
- feat: 升级 `weui-wxss` 至 2.5.15

## 1.2.5

- feat: checkbox 添加 disabled 属性
- fix: tabbar 修复 aria-label 告警 #206
- fix: slideview 修复 disabled 属性 #203
- fix: actionsheet 移除多余 wrap
- fix: dialog 移除多余 wrap

## 1.2.4

- feat: 升级 `weui-wxss` 至 2.5.14
- fix: 修复 fade 动画

## 1.2.3

- fix: 修复 half-screen-dialog button 样式向前兼容

## 1.2.2

- feat: tabbar 添加 reactive 选项
- fix: 修复 actionsheet 底部 safearea 高度不正确
- fix: 修复 gallery 底部 safearea 高度不正确
## 1.2.1

- fix: 修复 checkbox 无法操作

## 1.2.0

- feat: 升级 `weui-wxss` 至 2.5.0
- feat: 无障碍适配
- fix: 修复 slideview 隐藏按钮后无动画
- fix: 修复 checkbox-group wx:if 判断不正确
## 1.1.1

- fix: 修复找不到 wxs
- fix: 修复找不到 weui-wxss

## 1.1.0

- feat: 升级 `weui-wxss` 至 2.4.4
- fix: 防止 `mp-half-screen-dialog` 滚动穿透
- chore: 构建系统迁移至 mpflow

## 1.0.8

- fix: 修复 #153
- fix: 修复 `mp-searchbar` 点击取消时错误 focus
- fix: 修复 `mp-half-screen-dialog` 按钮在部分机型按钮排列出错

## 1.0.7

- fix: 修复 `mp-icon` 在 type 改变时报错

## 1.0.6

- feat: `mp-grids` 支持动态修改 grids
- feat: `mp-searchbar` 点击取消按钮时触发 `cancel` 事件
- fix: 修复 `mp-half-screen-dialog` 中的 desc 属性判断
- fix: 修复 `mp-searchbar` 节流搜索没有获取最新数据
- fix: 修复 `form-validator` 中 bytelength 报错

## 1.0.5

- updata: 升级 weui-wxss
- update：使用 `hover-class` 代替 `:active`

## 1.0.4

- fix: 修复 rangelength 校验
- feat: 支持自适应 tabbar

## 1.0.3

- fix: `required` 判断 (#93)
- fix: dialog 未居中 (#94)

## 1.0.2

- fix: Toptips 不展示的bug
- fix: Form 校验失效的bug

## 1.0.1

- 补充 package.json repository

## 1.0.0

- 更新`weui-wxss`到`2.3.0`版本，支持 DarkMode
- Demo 支持 DarkMode