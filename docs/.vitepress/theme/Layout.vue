<script setup lang="ts">
  import DefaultTheme from 'vitepress/theme';
</script>

<template>
  <div class="mu">
    <mu-scrollbar height="100vh">
      <DefaultTheme.Layout />
    </mu-scrollbar>
  </div>
</template>

<style scoped>
  /* ===== 导航栏：全站统一毛玻璃样式 ===== */
  .mu :deep(.VPNav) {
    background: color-mix(in srgb, var(--vp-nav-bg-color, #fff) 50%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 1px 0 var(--vp-c-gutter);
  }

  /* 去掉导航栏内部子元素的实色背景 */
  .mu :deep(.VPNavBar .content-body.content-body) {
    background-color: transparent;
  }
  .mu :deep(.VPNavBar.VPNavBar) {
    background-color: transparent;
  }
  .mu :deep(.VPNavBar .divider) {
    display: none;
  }

  /* 首页（无侧边栏）导航栏内容对齐 */
  .mu :deep(.VPNavBar:not(.has-sidebar) .container) {
    max-width: none;
    padding: 0 32px;
  }
  .mu :deep(.VPNavBar:not(.has-sidebar) .title) {
    padding-left: 0;
  }

  /* ===== 全宽平铺：VPDoc 不限宽不居中 ===== */
  .mu :deep(.VPDoc .container) {
    max-width: none;
    justify-content: flex-start;
  }
  .mu :deep(.VPDoc .content),
  .mu :deep(.VPDoc .content-container) {
    max-width: none;
  }

  /* 禁用 VitePress 内部滚动，交给外层 Scrollbar 统一管理 */
  .mu :deep(.VPContent),
  .mu :deep(.VPSidebar) {
    overflow: visible !important;
  }

  /* ===== 1440px+ 侧边栏页面布局 ===== */
  @media (min-width: 1440px) {
    .mu :deep(.VPSidebar) {
      padding-left: 32px;
      width: var(--vp-sidebar-width);
    }
    .mu :deep(.VPNavBar.has-sidebar .title) {
      padding-left: 32px;
      width: var(--vp-sidebar-width);
    }
    .mu :deep(.VPNavBar.has-sidebar .content) {
      padding-right: 32px;
      padding-left: var(--vp-sidebar-width);
    }
    .mu :deep(.VPContent.has-sidebar) {
      padding-right: 0;
      padding-left: var(--vp-sidebar-width);
    }
  }
</style>
