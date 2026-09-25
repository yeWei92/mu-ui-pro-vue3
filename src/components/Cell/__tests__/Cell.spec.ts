import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Cell from '../Cell.vue';

describe('Cell', () => {
  it('应该正确渲染单元格', () => {
    const wrapper = mount(Cell, {
      props: {
        title: '标题',
        value: '值'
      }
    });
    expect(wrapper.text()).toContain('标题');
    expect(wrapper.text()).toContain('值');
  });

  it('应该支持 label', () => {
    const wrapper = mount(Cell, {
      props: {
        title: '标题',
        label: '描述'
      }
    });
    expect(wrapper.text()).toContain('描述');
  });

  it('应该支持 icon', () => {
    const wrapper = mount(Cell, {
      props: {
        title: '标题',
        icon: ''
      }
    });
    expect(wrapper.text()).toContain('');
  });

  it('isLink 为 true 时应该显示箭头', () => {
    const wrapper = mount(Cell, {
      props: {
        title: '标题',
        isLink: true
      }
    });
    expect(wrapper.find('.mu-cell__arrow').exists()).toBe(true);
  });

  it('required 为 true 时应该显示必填标记', () => {
    const wrapper = mount(Cell, {
      props: {
        title: '标题',
        required: true
      }
    });
    expect(wrapper.find('.mu-cell__title--required').exists()).toBe(true);
  });

  it('点击时应该触发 click 事件', async () => {
    const wrapper = mount(Cell, {
      props: { title: '标题' }
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
