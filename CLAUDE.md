# CLAUDE.md

此文件为 Claude Code（claude.ai/code）在本仓库中工作提供指导。

## 语言要求

**所有回复、注释和文档均使用中文。**

## 项目概述

MU-UI Pro Vue3 — 基于 Vue 3 的 PC 端 UI 组件库，以 `mu-ui-pro-vue3` 发布到 npm。构建产物为 UMD + ES 模块格式，包含完整的 TypeScript 类型声明。Vue 作为外部 peer dependency。

## 常用命令

```bash
npm run dev           # 启动 Vite 开发服务器
npm run build         # 类型检查 + 构建库（仅 vite build）
npm run build:lib     # 完整构建：vite build + 生成 .d.ts 类型声明
npm run build:dts     # 仅生成类型声明（vue-tsc）
npm run type-check    # 运行 vue-tsc 类型检查（不输出文件）
npm run test:unit     # 运行 vitest 测试套件
npm run pub           # 构建库并发布到 npm
npm run docs:dev      # 启动 VitePress 文档开发服务器
npm run docs:build    # 构建文档静态站点
npm run docs:preview  # 预览构建后的文档站点
```

## 架构

### 组件目录结构

每个组件遵循以下目录布局：

```
src/components/组件名/
  组件名.vue              # SFC — template、script setup、scoped style
  index.ts               # 桶文件：重新导出 .vue 默认导出 + 类型命名导出
  types.ts               # Props 接口、Emits 接口、类型别名
  style.scss             # 组件样式（通过 scoped <style> 引入）
  __tests__/
    组件名.spec.ts       # Vitest + @vue/test-utils 测试
```

### 库入口 (`src/index.ts`)

- 定义 `install(app: App)` 函数，调用 `initTheme()` 后通过 `app.component()` 全局注册所有组件。
- 默认导出：`{ install }` — 支持 `app.use(MuUIPro)` 全局注册。
- 命名导出：每个组件 + 主题工具函数（`getTheme`、`setTheme`、`toggleTheme`、`initTheme`、`onThemeChange`、`ThemeType`）。

### 主题系统

- **CSS 变量** 定义在 `src/styles/variables.scss` — 浅色主题位于 `:root` / `[data-theme='light']`，深色主题位于 `[data-theme='dark']`。组件 SCSS 通过 `--mu-*` 自定义属性引用。
- **运行时主题 API** 位于 `src/utils/theme.ts` — 将主题选择持久化到 `localStorage`（键名：`mu-ui-theme`），设置 `<html>` 的 `data-theme` 属性，派发 `theme-change` 自定义事件。支持基于 `prefers-color-scheme` 的可选自动切换。
- `initTheme()` 在 `app.use()` 时调用。

### 构建配置

- **vite.config.ts**：通过 `build.lib` 构建库模式 — 入口为 `src/index.ts`，全局名 `MuUIPro`，输出 `mu-ui-pro-vue3.{es,umd}.js`。Vue 作为外部依赖。使用 `vite-plugin-dts` 打包 `.d.ts` 声明，`vite-plugin-lib-inject-css` 注入组件 CSS。
- **tsconfig.dts.json**：继承 `tsconfig.app.json`，通过 `vue-tsc` 输出仅声明文件到 `dist/`。根目录为 `src/`。
- **路径别名**：`@` → `src/`（在 vite.config.ts 和 tsconfig.app.json 中均配置）。

### 测试

- **Vitest** + `jsdom` 环境，启用全局 API。
- **Setup 文件** 位于 `src/__tests__/setup.ts`（导入 `@testing-library/jest-dom`）。
- 测试使用 `@vue/test-utils`（`mount`），配合 vitest 全局的 `describe`/`it`/`expect`。
- 覆盖率使用 v8 provider。

### 文档系统 (`docs/`)

- **VitePress** 驱动。文档站**全宽平铺**：VitePress 在 1440px+ 宽屏下，**三处**同时根据 `--vp-layout-max-width` 计算居中偏移——`VPNavBar`（导航栏 title/content）、`VPSidebar`（侧边栏）、`VPContent`（内容区）。全宽方案需**同步覆写三处**为固定偏移量，缺一不可。详见 `docs/.vitepress/theme/style.css`。
- `docs/.vitepress/config.ts` — 导航、侧边栏、`docFooter` 配置。
- `docs/.vitepress/theme/` — 自定义主题：注册 `MuUIPro`（Markdown 中可直接用组件）、`HomePage.vue` 首页组件、`style.css` 全局样式覆盖。
- `docs/index.md` — 自定义首页（`layout: page` + `<HomePage />`）。
- `docs/guide/` — 使用指南（普通 VitePress 布局）。
- `docs/components/` — 组件文档（普通 VitePress 布局 + 组件交互预览）。

- **VitePress** 驱动的组件文档站点，Markdown 中直接编写 Vue SFC，示例即渲染。
- `docs/.vitepress/config.ts` — 导航、侧边栏配置。
- `docs/.vitepress/theme/index.ts` — 自定义主题入口，注册 MuUIPro 使文档页中可直接使用组件。
- `docs/index.md` — 首页（Hero + Features 布局）。
- `docs/guide/` — 使用指南（快速开始、主题定制）。
- `docs/components/` — 组件文档页，每页包含：交互预览 → 代码示例 → Props/Events/Slots API 表格。

## 添加新组件

1. 创建 `src/components/新组件名/`，包含 `新组件名.vue`、`index.ts`、`types.ts`、`style.scss`。
2. 在 `index.ts` 中通过 `export type { 新组件Props, ... } from './types'` 导出类型。
3. 在 `src/index.ts` 中导入并注册 — 加入 `components` 数组和命名导出。
4. 在 `__tests__/新组件名.spec.ts` 中添加测试。
5. 在 `docs/components/` 创建对应的 `.md` 文档页，并在 `docs/.vitepress/config.ts` 侧边栏中注册。

## 代码规范

- **类型定义必须带 JSDoc 注释**：`types.ts` 中 `Props` 接口的每个字段、`Emits` 接口的每个事件签名，都必须有 `/** ... */` 中文注释说明其含义。参考 `src/components/Scrollbar/types.ts`。
- **禁止使用 `any`**：类型定义和函数签名中不得出现 `any`，应使用联合类型、类型收窄或函数重载替代。
- **禁止无意义的二次封装/别名**（强制，不允许）：对函数、组件、hooks、变量等**所有类型**，都不允许写仅做转发/改名的"中转"封装或别名——如 `const foo = (x) => bar(x)`（函数转发）、`const a = b`（变量别名）、`const useFoo = () => useBar()`（hooks 转发）这类无附加逻辑的包装。应直接使用被封装/被引用的目标；确需封装时必须有新增价值（统一错误处理、默认参数、类型收窄、语义命名等）。
- **类型导入带 `type`**：接口 / 类型导入必须带 `type` 关键字——纯类型用整行 `import type { ... }`，与枚举 / 常量等运行时导出同处一行时用内联 `type`（`import { type XxxVo, XxxEnum } from '...'`）。
- **类型不做纯换名**：禁止 `type A = B`、`interface A extends B {}` 这类纯别名，直接用原类型；只取部分字段用 `Pick<T, 'a' | 'b'>`。
- **导入先核实来源**：新增 / 修改导入前先确认目标文件是否存在、是否导出该成员、别名配置是否覆盖，不推测路径或导出名。
- **移除冗余声明**：删除未使用的导入、ref、参数、变量，以及只被赋值而未消费的中间量。
- **注释用 `/** */` 中文**：代码注释统一用 `/** ... */`，不用 `//` 行注释，不写「原先…/已改为…」等演进式描述。
- **组件样式色值走 CSS 变量**：`style.scss` 中的颜色、边框、背景一律引用 `--mu-*` 变量（定义于 `src/styles/variables.scss`），禁止硬编码 `#xxx` / `rgba(...)`；缺色值先注册变量。
- **优化必须保持行为等价**：修 bug / 重构 / 补规范不得夹带功能调整（渲染条件、默认值、接口参数、事件时机等保持原样）；发现任务范围外的问题先报告触发场景与建议，不混入当前修改。
- **交付前自检并报告优化项**：改完对照本文件与全局 `~/.claude/CLAUDE.md` 逐项核对；回复里按文件列出顺带优化项及原因，没有则明确写「无」。
