import { createApp } from 'vue';
import App from './App.vue';

// 引入组件库（开发时直接引用源码入口）
import MuUIPro from './index';
import './styles/index.scss';

const app = createApp(App);
app.use(MuUIPro);
app.mount('#app');
