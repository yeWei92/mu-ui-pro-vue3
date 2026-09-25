# 快速开始

## 安装

```bash
npm install mu-ui-pro-vue3
```

## 使用

### 全局注册

```ts
import { createApp } from 'vue';
import MuUIPro from 'mu-ui-pro-vue3';
import 'mu-ui-pro-vue3/dist/style.css';

const app = createApp(App);
app.use(MuUIPro);
```

### 按需引入

```vue
<script setup lang="ts">
  import { Button, Cell } from 'mu-ui-pro-vue3';
  import 'mu-ui-pro-vue3/dist/style.css';
</script>

<template>
  <mu-button type="primary">按钮</mu-button>
  <mu-cell title="标题" value="内容" />
</template>
```

## 前置依赖

| 依赖    | 版本                      |
| ------- | ------------------------- |
| Vue     | `^3.5.31`                 |
| Node.js | `^20.19.0` 或 `>=22.12.0` |

## TypeScript

组件库提供完整的 `.d.ts` 类型声明，导入即享 IDE 智能提示，无需额外配置。
