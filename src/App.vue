<template>
  <div class="playground">
    <header class="playground__header">
      <h1>MU-UI Pro Vue3</h1>
      <button class="theme-toggle" @click="toggleTheme()">
        {{ getTheme() === 'light' ? '🌙 深色' : '☀️ 浅色' }}
      </button>
    </header>

    <section class="playground__section">
      <h2>Button 按钮</h2>

      <h3>类型</h3>
      <div class="demo-row">
        <Button type="default" @click="log('默认按钮')">默认按钮</Button>
        <Button type="primary" @click="log('主要按钮')">主要按钮</Button>
        <Button type="success" @click="log('成功按钮')">成功按钮</Button>
        <Button type="warning" @click="log('警告按钮')">警告按钮</Button>
        <Button type="danger" @click="log('危险按钮')">危险按钮</Button>
        <Button type="info" @click="log('信息按钮')">信息按钮</Button>
      </div>

      <h3>尺寸</h3>
      <div class="demo-row">
        <Button size="large">大号按钮</Button>
        <Button size="medium">中等按钮</Button>
        <Button size="small">小号按钮</Button>
      </div>

      <h3>状态</h3>
      <div class="demo-row">
        <Button plain>朴素按钮</Button>
        <Button round>圆角按钮</Button>
        <Button circle>圆</Button>
        <Button disabled>禁用按钮</Button>
        <Button loading>加载中</Button>
      </div>
    </section>

    <section class="playground__section">
      <h2>Cell 单元格</h2>
      <div class="cell-group">
        <Cell title="用户名" value="张三" />
        <Cell title="手机号" value="138****8888" is-link />
        <Cell title="邮箱" value="example@mu-ui.com" />
        <Cell title="必填项" value="已填写" required />
        <Cell title="带图标" icon="📱" value="iPhone" is-link />
        <Cell title="带描述" label="这是一段描述文字" value="值" is-link />
        <Cell title="点击事件" value="点击试试" is-link @click="log('Cell 被点击')" />
      </div>
    </section>

    <section class="playground__section">
      <h2>事件日志</h2>
      <div class="log-panel">
        <p v-if="logs.length === 0" class="log-empty">暂无日志，点击上方组件试试</p>
        <div v-for="(msg, i) in logs" :key="i" class="log-item">{{ msg }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { getTheme, toggleTheme } from './utils/theme';

  const logs = ref<string[]>([]);

  const log = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    logs.value.unshift(`[${time}] ${msg}`);
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family:
      'Inter',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      sans-serif;
    background: var(--mu-bg-color-page);
    color: var(--mu-text-color-primary);
    transition:
      background 0.3s,
      color 0.3s;
  }

  .playground {
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 16px;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--mu-border-color);

      h1 {
        font-size: 24px;
        font-weight: 600;
      }
    }

    &__section {
      margin-bottom: 40px;

      h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--mu-border-color-lighter);
      }

      h3 {
        font-size: 14px;
        font-weight: 500;
        color: var(--mu-text-color-secondary);
        margin: 16px 0 8px;
      }
    }
  }

  .theme-toggle {
    padding: 6px 16px;
    border: 1px solid var(--mu-border-color);
    border-radius: 6px;
    background: var(--mu-bg-color);
    color: var(--mu-text-color-primary);
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;

    &:hover {
      border-color: var(--mu-color-primary);
      color: var(--mu-color-primary);
    }
  }

  .demo-row {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .cell-group {
    border: 1px solid var(--mu-border-color-lighter);
    border-radius: 8px;
    overflow: hidden;
  }

  .log-panel {
    background: var(--mu-bg-color);
    border: 1px solid var(--mu-border-color-lighter);
    border-radius: 8px;
    padding: 12px 16px;
    max-height: 200px;
    overflow-y: auto;
  }

  .log-empty {
    color: var(--mu-text-color-placeholder);
    font-size: 14px;
    text-align: center;
    padding: 16px 0;
  }

  .log-item {
    font-size: 13px;
    color: var(--mu-text-color-regular);
    padding: 4px 0;
    border-bottom: 1px solid var(--mu-border-color-lighter);

    &:last-child {
      border-bottom: none;
    }
  }
</style>
