<script setup lang="ts">
  import { ref, getCurrentInstance } from 'vue';

  defineProps<{
    lang: string;
  }>();

  const collapsed = ref(true);

  function toggle() {
    collapsed.value = !collapsed.value;
  }

  function copyCode() {
    const root = getCurrentInstance()?.proxy?.$el as HTMLElement;
    const copyBtn = root?.querySelector('.copy') as HTMLElement | null;
    copyBtn?.click();
  }
</script>

<template>
  <div class="collapse-code" :class="{ 'collapse-code--collapsed': collapsed }">
    <div class="collapse-code__header">
      <span class="collapse-code__lang">{{ lang }}</span>
      <div class="collapse-code__actions">
        <button class="collapse-code__copy" type="button" title="复制代码" @click="copyCode">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
        <button class="collapse-code__toggle" type="button" @click="toggle">
          <span class="collapse-code__toggle-text">{{ collapsed ? '展开' : '收起' }}</span>
          <i class="collapse-code__arrow" :class="collapsed ? 'collapse-code__arrow--down' : 'collapse-code__arrow--up'"></i>
        </button>
      </div>
    </div>
    <div class="collapse-code__body">
      <slot></slot>
    </div>
    <div class="collapse-code__footer" @click="toggle">
      <div class="collapse-code__footer-inner">
        <i class="collapse-code__arrow collapse-code__arrow--up"></i>
        隐藏代码
      </div>
    </div>
  </div>
</template>

<style>
  .collapse-code {
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-code-block-bg);
  }

  /* 头部 */
  .collapse-code__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px 0 16px;
    height: 36px;
    border-radius: 8px 8px 0 0;
    background: var(--vp-code-block-bg);
  }
  .collapse-code--collapsed .collapse-code__header {
    border-radius: 8px;
  }

  .collapse-code__lang {
    font-size: 12px;
    font-weight: 600;
    color: var(--vp-c-text-3);
    text-transform: uppercase;
  }

  .collapse-code__actions {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .collapse-code__copy,
  .collapse-code__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 28px;
    padding: 0 6px;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: var(--vp-c-text-3);
    font-size: 12px;
    cursor: pointer;
    transition: color 0.2s;
  }
  .collapse-code__copy:hover,
  .collapse-code__toggle:hover {
    color: var(--vp-c-brand-1);
  }

  /* CSS 三角箭头 */
  .collapse-code__arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    transition: transform 0.3s;
  }
  .collapse-code__arrow--down {
    border-top: 5px solid currentColor;
  }
  .collapse-code__arrow--up {
    border-bottom: 5px solid currentColor;
  }

  /* 折叠/展开 */
  .collapse-code--collapsed .collapse-code__body,
  .collapse-code--collapsed .collapse-code__footer {
    display: none;
  }
  .collapse-code--collapsed .collapse-code__arrow--down {
    transform: rotate(-90deg);
  }

  /* 内容区 */
  .collapse-code__body {
    overflow: hidden;
    border-radius: 0 0 8px 8px;
  }
  .collapse-code__body .vp-code {
    margin: 0;
    border-radius: 0;
  }
  /* 隐藏原始 copy/lang（我们用自己提供的） */
  .collapse-code__body .copy,
  .collapse-code__body .lang {
    display: none;
  }

  /* 底部悬浮栏 */
  .collapse-code__footer {
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background: linear-gradient(transparent, var(--vp-code-block-bg) 40%);
    border-radius: 0 0 8px 8px;
    cursor: pointer;
    color: var(--vp-c-text-2);
    font-size: 12px;
    transition: color 0.2s;
  }
  .collapse-code__footer:hover {
    color: var(--vp-c-brand-1);
  }
  .collapse-code__footer-inner {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
</style>
