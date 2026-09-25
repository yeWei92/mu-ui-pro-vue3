import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button', () => {
  it('应该正确渲染按钮', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '测试按钮'
      }
    });
    expect(wrapper.text()).toContain('测试按钮');
  });

  it('应该支持不同的类型', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info', 'default'] as const;
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type },
        slots: { default: '按钮' }
      });
      expect(wrapper.classes()).toContain(`mu-button--${type}`);
    });
  });

  it('应该支持不同的尺寸', () => {
    const sizes = ['large', 'medium', 'small'] as const;
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size },
        slots: { default: '按钮' }
      });
      expect(wrapper.classes()).toContain(`mu-button--${size}`);
    });
  });

  it('禁用状态下不应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: '按钮' }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('加载状态下不应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: '按钮' }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('正常状态下应该触发点击事件', async () => {
    const wrapper = mount(Button, {
      slots: { default: '按钮' }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('应该支持 plain 样式', () => {
    const wrapper = mount(Button, {
      props: { plain: true },
      slots: { default: '按钮' }
    });
    expect(wrapper.classes()).toContain('mu-button--plain');
  });

  it('plain 应该支持全部彩色类型', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'] as const;
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type, plain: true },
        slots: { default: '按钮' }
      });
      expect(wrapper.classes()).toContain('mu-button--plain');
      expect(wrapper.classes()).toContain(`mu-button--${type}`);
    });
  });

  it('应该支持 round 样式', () => {
    const wrapper = mount(Button, {
      props: { round: true },
      slots: { default: '按钮' }
    });
    expect(wrapper.classes()).toContain('mu-button--round');
  });

  it('应该支持 circle 样式', () => {
    const wrapper = mount(Button, {
      props: { circle: true },
      slots: { default: '按钮' }
    });
    expect(wrapper.classes()).toContain('mu-button--circle');
  });

  it('circle 应该与尺寸类共存', () => {
    const sizes = ['large', 'medium', 'small'] as const;
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { circle: true, size },
        slots: { default: '按钮' }
      });
      expect(wrapper.classes()).toContain('mu-button--circle');
      expect(wrapper.classes()).toContain(`mu-button--${size}`);
    });
  });

  it('应该根据 icon 名称渲染图标', () => {
    const wrapper = mount(Button, {
      props: { icon: 'search' },
      slots: { default: '搜索' }
    });
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('icon 名称不存在时应该回退为占位元素', () => {
    const wrapper = mount(Button, {
      props: { icon: 'not-exist-icon' },
      slots: { default: '按钮' }
    });
    expect(wrapper.find('svg').exists()).toBe(false);
    expect(wrapper.find('.mu-icon').exists()).toBe(true);
  });

  it('加载状态下应该渲染加载指示器并隐藏图标', () => {
    const wrapper = mount(Button, {
      props: { icon: 'search', loading: true },
      slots: { default: '搜索' }
    });
    expect(wrapper.find('.mu-button__loading').exists()).toBe(true);
    expect(wrapper.find('svg').exists()).toBe(false);
  });

  it('加载状态下应该标记 aria-busy 并禁用按钮', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: '按钮' }
    });
    expect(wrapper.attributes('aria-busy')).toBe('true');
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('原生 type 默认为 button', () => {
    const wrapper = mount(Button, {
      slots: { default: '按钮' }
    });
    expect(wrapper.attributes('type')).toBe('button');
  });

  it('应该支持 nativeType', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
      slots: { default: '提交' }
    });
    expect(wrapper.attributes('type')).toBe('submit');
  });
});
