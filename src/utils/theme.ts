// 主题类型定义
export type ThemeType = 'light' | 'dark';

// 主题配置接口
export interface ThemeConfig {
  theme: ThemeType;
  autoSwitch: boolean; // 是否根据系统自动切换
}

// 本地存储键名
const THEME_STORAGE_KEY = 'mu-ui-theme';

// 获取保存的主题
const getSavedTheme = (): ThemeType | null => {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return saved as ThemeType | null;
};

// 保存主题到本地存储
const saveTheme = (theme: ThemeType): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

// 检测系统主题偏好
const getSystemTheme = (): ThemeType => {
  if (typeof window === 'undefined') return 'light';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

// 当前主题
let currentTheme: ThemeType = 'light';

// 获取当前主题
export const getTheme = (): ThemeType => {
  return currentTheme;
};

// 设置主题
export const setTheme = (theme: ThemeType): void => {
  currentTheme = theme;

  // 更新 DOM 属性
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // 保存到本地存储
  saveTheme(theme);

  // 触发自定义事件
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
  }
};

// 切换主题
export const toggleTheme = (): void => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};

// 初始化主题
export const initTheme = (config?: { autoSwitch?: boolean }): void => {
  const autoSwitch = config?.autoSwitch ?? false;

  // 优先使用保存的主题
  const savedTheme = getSavedTheme();
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (autoSwitch) {
    // 如果启用自动切换，使用系统主题
    currentTheme = getSystemTheme();
  }

  // 应用主题
  setTheme(currentTheme);

  // 监听系统主题变化（如果启用自动切换）
  if (autoSwitch && typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!getSavedTheme()) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
};

// 监听主题变化
export const onThemeChange = (callback: (theme: ThemeType) => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent;
    callback(customEvent.detail.theme);
  };

  window.addEventListener('theme-change', handler);

  // 返回取消监听的函数
  return () => {
    window.removeEventListener('theme-change', handler);
  };
};
