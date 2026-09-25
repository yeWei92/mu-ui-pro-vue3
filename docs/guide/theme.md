# 主题定制

MU-UI Pro 基于 CSS 变量实现主题系统，支持浅色和深色双模式。

## 切换主题

```ts
import { setTheme, toggleTheme, getTheme, onThemeChange } from 'mu-ui-pro-vue3';

// 设置为深色主题
setTheme('dark');

// 设置为浅色主题
setTheme('light');

// 在浅色/深色之间切换
toggleTheme();

// 获取当前主题
const current = getTheme(); // 'light' | 'dark'

// 监听主题变化
const unsubscribe = onThemeChange((theme) => {
  console.log('主题已切换为：', theme);
});
```

## 自动跟随系统

```ts
import { initTheme } from 'mu-ui-pro-vue3';

// 开启自动切换：没有手动保存过的主题时，跟随系统
initTheme({ autoSwitch: true });
```

## CSS 变量

组件库暴露了 `--mu-*` 命名空间的 CSS 变量，可在项目中覆盖：

```css
:root {
  --mu-color-primary: #your-brand-color;
  --mu-color-success: #67c23a;
  --mu-color-warning: #e6a23c;
  --mu-color-danger: #f56c6c;
  --mu-bg-color: #ffffff;
  --mu-text-color-primary: #303133;
  /* ...更多变量见 src/styles/variables.scss */
}
```
