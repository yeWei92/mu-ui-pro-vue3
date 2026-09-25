import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getTheme, setTheme, toggleTheme, initTheme, onThemeChange } from '../theme';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    clear: vi.fn(() => {
      store = {};
    })
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('Theme Utils', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  it('应该能够设置和获取主题', () => {
    setTheme('dark');
    expect(getTheme()).toBe('dark');

    setTheme('light');
    expect(getTheme()).toBe('light');
  });

  it('切换主题应该在 light 和 dark 之间切换', () => {
    setTheme('light');
    toggleTheme();
    expect(getTheme()).toBe('dark');

    toggleTheme();
    expect(getTheme()).toBe('light');
  });

  it('初始化时应该使用保存的主题', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    initTheme();
    expect(getTheme()).toBe('dark');
  });

  it('没有保存的主题时应该默认使用 light', () => {
    localStorageMock.getItem.mockReturnValue(null);
    initTheme();
    expect(getTheme()).toBe('light');
  });

  it('启用自动切换时应该使用系统主题', () => {
    localStorageMock.getItem.mockReturnValue(null);
    const matchMediaMock = vi.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }));
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: matchMediaMock
    });

    initTheme({ autoSwitch: true });
    expect(getTheme()).toBe('dark');
  });

  it('应该能够监听主题变化', () => {
    const callback = vi.fn();
    const unsubscribe = onThemeChange(callback);

    setTheme('dark');
    expect(callback).toHaveBeenCalledWith('dark');

    unsubscribe();
    setTheme('light');
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
