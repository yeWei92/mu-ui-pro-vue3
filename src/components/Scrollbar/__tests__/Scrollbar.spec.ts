import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Scrollbar from '../Scrollbar.vue';

describe('Scrollbar', () => {
  it('渲染正常', () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: '<div style="height:200px">内容</div>'
      }
    });
    expect(wrapper.find('.mu-scrollbar').exists()).toBe(true);
    expect(wrapper.find('.mu-scrollbar__wrap').exists()).toBe(true);
  });

  it('支持 height 属性', () => {
    const wrapper = mount(Scrollbar, {
      props: { height: 300 }
    });
    const container = wrapper.find('.mu-scrollbar');
    expect(container.attributes('style')).toContain('height: 300px');
  });

  it('支持 maxHeight 属性', () => {
    const wrapper = mount(Scrollbar, {
      props: { maxHeight: '400px' }
    });
    const container = wrapper.find('.mu-scrollbar');
    expect(container.attributes('style')).toContain('max-height: 400px');
  });

  it('支持 native 模式', () => {
    const wrapper = mount(Scrollbar, {
      props: { native: true }
    });
    expect(wrapper.find('.mu-scrollbar__track').exists()).toBe(false);
  });

  it('支持 always 模式', () => {
    const wrapper = mount(Scrollbar, {
      props: { always: true },
      slots: {
        default: '<div style="height:200px">内容</div>'
      }
    });
    expect(wrapper.find('.mu-scrollbar--always').exists()).toBe(true);
  });

  it('渲染插槽内容', () => {
    const wrapper = mount(Scrollbar, {
      slots: {
        default: '<div class="test-content">测试内容</div>'
      }
    });
    expect(wrapper.find('.test-content').exists()).toBe(true);
    expect(wrapper.find('.test-content').text()).toBe('测试内容');
  });
});
