<script setup>
// 使页面编译为完整 SFC，避免静态节点混排问题
</script>

# Cell 单元格

列表项组件，常用于表单展示、设置页面、信息列表等场景。

## 基础用法

<div class="component-preview component-preview--column">
  <mu-cell title="用户名" value="张三" />
  <mu-cell title="手机号" value="138****8888" />
  <mu-cell title="邮箱" value="example@mu-ui.com" />
</div>

```vue
<mu-cell title="用户名" value="张三" />
<mu-cell title="手机号" value="138****8888" />
<mu-cell title="邮箱" value="example@mu-ui.com" />
```

## 带描述

<div class="component-preview component-preview--column">
  <mu-cell title="标题" label="这是一段描述文字" value="值" />
</div>

```vue
<mu-cell title="标题" label="这是一段描述文字" value="值" />
```

## 带图标

<div class="component-preview component-preview--column">
  <mu-cell title="设置" icon="⚙️" value="点击进入" is-link />
  <mu-cell title="消息" icon="💬" value="3 条未读" is-link />
</div>

```vue
<mu-cell title="设置" icon="⚙️" value="点击进入" is-link />
<mu-cell title="消息" icon="💬" value="3 条未读" is-link />
```

## 可点击（is-link）

`is-link` 为 `true` 时在右侧显示箭头，表示该项可点击跳转。

<div class="component-preview component-preview--column">
  <mu-cell title="个人信息" value="修改资料" is-link />
  <mu-cell title="账号安全" value="已保护" is-link />
  <mu-cell title="关于" is-link />
</div>

```vue
<mu-cell title="个人信息" value="修改资料" is-link />
<mu-cell title="账号安全" value="已保护" is-link />
<mu-cell title="关于" is-link />
```

## 必填标记

<div class="component-preview component-preview--column">
  <mu-cell title="用户名称" value="张三" required />
  <mu-cell title="手机号码" required />
</div>

```vue
<mu-cell title="用户名称" value="张三" required />
<mu-cell title="手机号码" required />
```

## Props

| 属性       | 说明               | 类型      | 默认值  |
| ---------- | ------------------ | --------- | ------- |
| `title`    | 左侧标题           | `string`  | —       |
| `label`    | 标题下方的描述信息 | `string`  | —       |
| `value`    | 右侧显示的值       | `string`  | —       |
| `icon`     | 左侧图标           | `string`  | —       |
| `is-link`  | 是否显示右侧箭头   | `boolean` | `false` |
| `required` | 是否显示必填标记   | `boolean` | `false` |

## Events

| 事件    | 说明           | 回调类型                      |
| ------- | -------------- | ----------------------------- |
| `click` | 点击整行时触发 | `(event: MouseEvent) => void` |
