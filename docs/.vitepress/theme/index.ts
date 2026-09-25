import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
// 文档站引入组件库，支持在 Markdown 中直接使用组件
import MuUIPro from '../../../src/index';
import '../../../src/styles/index.scss';
import './style.css';
import HomePage from './HomePage.vue';
import Layout from './Layout.vue';
import CollapseCode from './CollapseCode.vue';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(MuUIPro);
    app.component('HomePage', HomePage);
    app.component('CollapseCode', CollapseCode);
  }
} satisfies Theme;
