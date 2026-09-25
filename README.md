# MU-UI Pro Vue3

一个基于 Vue 3 的 PC 端组件库。

## 特性

- 基于 Vue 3 + TypeScript 开发
- 支持按需引入
- 提供完整的类型定义
- 简洁的 API 设计

## 安装

`ash npm install mu-ui-pro-vue3 `

## 使用

### 全局注册

`javascript import { createApp } from 'vue' import MuUIPro from 'mu-ui-pro-vue3' import 'mu-ui-pro-vue3/dist/style.css'

const app = createApp(App) app.use(MuUIPro) `

### 按需引入

`javascript import { Button, Cell } from 'mu-ui-pro-vue3' import 'mu-ui-pro-vue3/dist/style.css' `

## 组件列表

- Button 按钮
- Cell 单元格

## 开发

`ash

# 安装依赖

npm install

# 开发模式

npm run dev

# 构建库

npm run build:lib `

## License

MIT
