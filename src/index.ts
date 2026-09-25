import type { App } from 'vue';
import { initTheme } from './utils/theme';

/** 主题样式入口：引入 CSS 变量定义（浅色 / 深色主题），组件样式依赖 --mu-* 变量 */
import './styles/index.scss';

// 导入组件
import Button from './components/Button';
import Cell from './components/Cell';
import Scrollbar from './components/Scrollbar';
import Icon from './components/Icon';

// 组件列表
const components = [Button, Cell, Scrollbar, Icon];

// 安装函数
const install = (app: App): void => {
  // 初始化主题
  initTheme();

  // 注册组件
  components.forEach((component) => {
    app.component(component.name as string, component);
  });
};

// 按需导出
export { Button, Cell, Scrollbar, Icon };

// 主题相关导出
export { getTheme, setTheme, toggleTheme, initTheme, type ThemeType } from './utils/theme';

// 图标组件按需导出（500 个独立组件）
export * from './components/Icon/components';

// 默认导出
export default {
  install
};
