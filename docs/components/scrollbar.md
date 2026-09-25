<script setup>
// 使页面编译为完整 SFC，避免静态节点混排问题
</script>

# Scrollbar 滚动条

自定义滚动条组件，隐藏原生滚动条，提供统一的自定义样式。

## 基础用法

<div class="component-preview">
  <mu-scrollbar height="200px" style="width: 100%">
    <div v-for="i in 20" :key="i" style="padding: 8px 16px; border-bottom: 1px solid var(--vp-c-divider)">
      内容行 {{ i }}
    </div>
  </mu-scrollbar>
</div>

```vue
<mu-scrollbar height="200px">
  <div v-for="i in 20" :key="i">内容行 {{ i }}</div>
</mu-scrollbar>
```

## 横向滚动

<div class="component-preview">
  <mu-scrollbar style="width: 100%">
    <div style="display: flex; gap: 12px; padding: 8px 0; width: max-content">
      <span v-for="i in 15" :key="i" style="flex-shrink: 0; padding: 12px 20px; background: var(--vp-c-bg-soft); border-radius: 8px; white-space: nowrap">
        卡片 {{ i }}
      </span>
    </div>
  </mu-scrollbar>
</div>

```vue
<mu-scrollbar>
  <div style="display: flex; gap: 12px; width: max-content">
    <span v-for="i in 15" :key="i">卡片 {{ i }}</span>
  </div>
</mu-scrollbar>
```

## 始终显示滚动条

<div class="component-preview">
  <mu-scrollbar height="160px" always style="width: 100%">
    <div v-for="i in 12" :key="i" style="padding: 8px 16px; border-bottom: 1px solid var(--vp-c-divider)">
      内容行 {{ i }}
    </div>
  </mu-scrollbar>
</div>

```vue
<mu-scrollbar height="160px" always>
  <div v-for="i in 12" :key="i">内容行 {{ i }}</div>
</mu-scrollbar>
```

## 原生模式

`native` 为 `true` 时使用浏览器原生滚动条，不渲染自定义轨道和滑块。

```vue
<mu-scrollbar height="160px" native>
  <div v-for="i in 12" :key="i">内容行 {{ i }}</div>
</mu-scrollbar>
```

## Props

| 属性           | 说明                   | 类型               | 默认值  |
| -------------- | ---------------------- | ------------------ | ------- |
| `height`       | 容器高度               | `string \| number` | —       |
| `maxHeight`    | 容器最大高度           | `string \| number` | —       |
| `width`        | 容器宽度               | `string \| number` | —       |
| `maxWidth`     | 容器最大宽度           | `string \| number` | —       |
| `always`       | 是否始终显示滚动条     | `boolean`          | `false` |
| `native`       | 是否使用原生滚动条     | `boolean`          | `false` |
| `thumbPadding` | 滑块距轨道边缘的内边距 | `number`           | `2`     |

## Events

| 事件     | 说明       | 回调类型                 |
| -------- | ---------- | ------------------------ |
| `scroll` | 滚动时触发 | `(event: Event) => void` |

## Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 滚动内容 |

## 方法

通过 `ref` 调用组件暴露的方法：

| 方法       | 说明               | 签名                                                       |
| ---------- | ------------------ | ---------------------------------------------------------- |
| `scrollTo` | 滚动到指定位置     | `(options: ScrollToOptions \| number, y?: number) => void` |
| `update`   | 手动更新滚动条状态 | `() => void`                                               |
