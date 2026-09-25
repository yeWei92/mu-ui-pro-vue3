<template>
  <div class="home">
    <div class="hero">
      <div class="text">
        <h1 class="name">MU-UI Pro</h1>
        <p class="desc">Vue 3 PC 端组件库</p>
        <p class="tagline">简洁、灵活、类型完备</p>
        <div class="actions">
          <a class="brand" href="/guide/getting-started">快速开始</a>
          <a class="alt" href="/components/button">查看组件</a>
        </div>
      </div>
      <div class="image">
        <img src="/logo.svg" alt="MU-UI Pro" />
      </div>
    </div>

    <div class="features">
      <div class="card" v-for="f in features" :key="f.title">
        <div class="icon" v-html="f.icon"></div>
        <h2 class="title" v-html="f.title"></h2>
        <p class="details" v-html="f.details"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const features = [
    { icon: '🎨', title: '主题定制', details: '支持浅色 / 深色双主题，CSS 变量驱动，轻松适配品牌色' },
    { icon: '📦', title: '按需引入', details: '支持全局注册和单组件导入，Tree-shaking 友好' },
    { icon: '🔧', title: 'TypeScript', details: '完整的类型定义，IDE 智能提示开箱即用' },
    { icon: '⚡', title: '轻量高效', details: '基于 Vue 3 Composition API，零冗余依赖' }
  ];
</script>

<style scoped lang="scss">
  .home {
    max-width: 1152px;
    margin: 0 auto;
    padding: 64px 24px 0;
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    padding: 64px 0;

    .text {
      flex-shrink: 0;
    }

    .name {
      font-size: 56px;
      font-weight: 700;
      line-height: 1.2;
      background: linear-gradient(135deg, #4facfe, #2b7be4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .desc {
      font-size: 32px;
      font-weight: 600;
      color: var(--vp-c-text-1);
      margin-top: 16px;
    }

    .tagline {
      font-size: 18px;
      color: var(--vp-c-text-2);
      margin-top: 8px;
    }

    .actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }

    .brand {
      display: inline-block;
      padding: 10px 24px;
      border-radius: 20px;
      background: #409eff;
      color: #fff;
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      transition: background 0.2s;

      &:hover {
        background: #2b7be4;
      }
    }

    .alt {
      display: inline-block;
      padding: 10px 24px;
      border-radius: 20px;
      border: 1px solid var(--vp-c-divider);
      color: var(--vp-c-text-1);
      font-size: 15px;
      font-weight: 500;
      text-decoration: none;
      transition: border-color 0.2s;

      &:hover {
        border-color: #409eff;
      }
    }

    .image {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 160px;
        height: 160px;
      }
    }
  }

  .features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    max-width: 1152px;
    margin: 64px auto 0;

    .card {
      border: 1px solid var(--vp-c-bg-soft);
      border-radius: 12px;
      background-color: var(--vp-c-bg-soft);
      padding: 24px;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      border-radius: 6px;
      background-color: var(--vp-c-default-soft);
      width: 48px;
      height: 48px;
      font-size: 24px;
    }

    .title {
      line-height: 24px;
      font-size: 16px;
      font-weight: 600;
      color: var(--vp-c-text-1);
    }

    .details {
      padding-top: 8px;
      line-height: 24px;
      font-size: 14px;
      font-weight: 500;
      color: var(--vp-c-text-2);
    }
  }

  @media (max-width: 960px) {
    .features {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;

      .actions {
        justify-content: center;
      }
      .name {
        font-size: 40px;
      }
      .desc {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 640px) {
    .features {
      grid-template-columns: 1fr;
    }
  }
</style>
