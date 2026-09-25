<script setup>
// 使页面编译为完整 SFC，避免静态节点混排问题
</script>

# Button 按钮

常用的操作按钮。

## 基础用法

<div class="component-preview">
  <mu-button>默认按钮</mu-button>
  <mu-button type="primary">主要按钮</mu-button>
  <mu-button type="success">成功按钮</mu-button>
  <mu-button type="warning">警告按钮</mu-button>
  <mu-button type="danger">危险按钮</mu-button>
  <mu-button type="info">信息按钮</mu-button>
</div>

```vue
<mu-button>默认按钮</mu-button>
<mu-button type="primary">主要按钮</mu-button>
<mu-button type="success">成功按钮</mu-button>
<mu-button type="warning">警告按钮</mu-button>
<mu-button type="danger">危险按钮</mu-button>
<mu-button type="info">信息按钮</mu-button>
```

## 尺寸

提供 `large`、`medium`、`small` 三种尺寸。

<div class="component-preview">
  <mu-button size="large">大号按钮</mu-button>
  <mu-button size="medium">中等按钮</mu-button>
  <mu-button size="small">小号按钮</mu-button>
</div>

```vue
<mu-button size="large">大号按钮</mu-button>
<mu-button size="medium">中等按钮</mu-button>
<mu-button size="small">小号按钮</mu-button>
```

## 扁平按钮

`plain` 与所有彩色类型均可组合，为透明底 + 类型色描边，悬停时填充实色。

<div class="component-preview">
  <mu-button type="primary" plain>主要按钮</mu-button>
  <mu-button type="success" plain>成功按钮</mu-button>
  <mu-button type="warning" plain>警告按钮</mu-button>
  <mu-button type="danger" plain>危险按钮</mu-button>
  <mu-button type="info" plain>信息按钮</mu-button>
</div>

```vue
<mu-button type="primary" plain>主要按钮</mu-button>
<mu-button type="success" plain>成功按钮</mu-button>
<mu-button type="warning" plain>警告按钮</mu-button>
<mu-button type="danger" plain>危险按钮</mu-button>
<mu-button type="info" plain>信息按钮</mu-button>
```

## 图标按钮

通过 `icon` 指定图标名称，取值与 [Icon 图标](./icon) 组件的 `name` 一致；图标与文字并存时自动留出间距。

<div class="component-preview">
  <mu-button type="primary" icon="search">搜索</mu-button>
  <mu-button icon="plus">新增</mu-button>
  <mu-button type="danger" plain icon="delete">删除</mu-button>
</div>

```vue
<mu-button type="primary" icon="search">搜索</mu-button>
<mu-button icon="plus">新增</mu-button>
<mu-button type="danger" plain icon="delete">删除</mu-button>
```

## 圆角 / 圆形

`circle` 会随 `size` 联动尺寸，常与 `icon` 搭配用作纯图标按钮。

<div class="component-preview">
  <mu-button round>圆角按钮</mu-button>
  <mu-button type="primary" circle icon="search" />
  <mu-button type="success" circle>A</mu-button>
  <mu-button type="danger" circle size="large" icon="delete" />
  <mu-button type="info" circle size="small" icon="plus" />
</div>

```vue
<mu-button round>圆角按钮</mu-button>
<mu-button type="primary" circle icon="search" />
<mu-button type="success" circle>A</mu-button>
<mu-button type="danger" circle size="large" icon="delete" />
<mu-button type="info" circle size="small" icon="plus" />
```

## 禁用状态

<div class="component-preview">
  <mu-button disabled>禁用按钮</mu-button>
  <mu-button type="primary" disabled>禁用按钮</mu-button>
</div>

```vue
<mu-button disabled>禁用按钮</mu-button>
<mu-button type="primary" disabled>禁用按钮</mu-button>
```

## 加载状态

加载中会禁用按钮并显示旋转指示器；此时 `icon` 由指示器替代，原有文字内容保留。

<div class="component-preview">
  <mu-button type="primary" loading>加载中</mu-button>
  <mu-button loading>加载中</mu-button>
  <mu-button type="success" loading icon="refresh">刷新中</mu-button>
</div>

```vue
<mu-button type="primary" loading>加载中</mu-button>
<mu-button loading>加载中</mu-button>
<mu-button type="success" loading icon="refresh">刷新中</mu-button>
```

## Props

| 属性         | 说明                                    | 类型                                                                     | 默认值      |
| ------------ | --------------------------------------- | ------------------------------------------------------------------------ | ----------- |
| `type`       | 按钮类型                                | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | `'default'` |
| `size`       | 按钮尺寸                                | `'large' \| 'medium' \| 'small'`                                         | `'medium'`  |
| `nativeType` | 原生 `type` 属性                        | `'button' \| 'submit' \| 'reset'`                                        | `'button'`  |
| `disabled`   | 是否禁用                                | `boolean`                                                                | `false`     |
| `loading`    | 是否加载中                              | `boolean`                                                                | `false`     |
| `plain`      | 是否扁平样式                            | `boolean`                                                                | `false`     |
| `round`      | 是否圆角                                | `boolean`                                                                | `false`     |
| `circle`     | 是否圆形                                | `boolean`                                                                | `false`     |
| `icon`       | 图标名称，对应 Icon 组件的 `name`       | `string`                                                                 | —           |

## Events

| 事件    | 说明                              | 回调类型                      |
| ------- | --------------------------------- | ----------------------------- |
| `click` | 点击时触发（禁用/加载中时不触发） | `(event: MouseEvent) => void` |

## Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 按钮内容 |
