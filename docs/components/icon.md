<script setup lang="ts">
import { ref, computed } from 'vue'
import iconMap from '../../src/components/Icon/map'

const allIcons = Object.keys(iconMap)

// 自动生成中文名：连字符转空格，首字母大写
function zhName(name: string) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

const search = ref('')
const copied = ref('')

const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return allIcons
  return allIcons.filter(name => {
    if (name.toLowerCase().includes(q)) return true
    return zhName(name).toLowerCase().includes(q)
  })
})

async function copyIcon(name: string) {
  await navigator.clipboard.writeText(`<mu-icon name="${name}" />`)
  copied.value = name
  setTimeout(() => { copied.value = '' }, 1500)
}
</script>

# Icon 图标

提供 500 个 SVG 图标，支持英文名搜索，点击复制代码。

## 预览

<div class="icon-search-bar">
  <mu-icon name="search" size="16px" color="var(--vp-c-text-3)" />
  <input v-model="search" placeholder="搜索图标…" class="icon-search-input" />
  <span v-if="search" class="icon-search-count">{{ filtered.length }} / {{ allIcons.length }}</span>
</div>

<div class="icon-grid">
  <div v-for="name in filtered" :key="name" class="icon-item" @click="copyIcon(name)">
    <mu-icon :name="name" size="20px" />
    <span class="icon-name">{{ name }}</span>
    <span class="icon-zh">{{ zhName(name) }}</span>
    <span v-if="copied === name" class="icon-copied">已复制</span>
  </div>
  <div v-if="filtered.length === 0" class="icon-empty">无匹配图标</div>
</div>

```vue
<mu-icon name="search" size="24px" />
<mu-icon name="check-circle" size="24px" color="#67c23a" />
<mu-icon name="error" size="24px" color="#f56c6c" />
```

## Props

| 属性    | 说明     | 类型               | 默认值 |
| ------- | -------- | ------------------ | ------ |
| `name`  | 图标名称 | `string`           | —      |
| `size`  | 图标大小 | `string \| number` | `1em`  |
| `color` | 图标颜色 | `string`           | —      |

<style>
.icon-search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0 8px;
  background: var(--vp-c-bg-soft);
}
.icon-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: var(--vp-c-text-1);
}
.icon-search-input::placeholder { color: var(--vp-c-text-3); }
.icon-search-count {
  font-size: 12px;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
  gap: 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 12px;
  margin: 0 0 16px;
  max-height: 520px;
  overflow: auto;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 4px;
  border-radius: 6px;
  cursor: pointer;
  transition: background .15s;
  position: relative;
}
.icon-item:hover { background: var(--vp-c-bg-soft); }
.icon-zh {
  font-size: 10px;
  color: var(--vp-c-text-3);
}
.icon-name {
  font-size: 10px;
  color: var(--vp-c-text-2);
  text-align: center;
  word-break: break-all;
  line-height: 1.2;
  font-family: monospace;
}
.icon-copied {
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1px 8px;
  border-radius: 4px;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 11px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  animation: icon-fade .3s ease;
}
.icon-empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  color: var(--vp-c-text-3);
  font-size: 14px;
}
@keyframes icon-fade {
  from { opacity: 0; transform: translateX(-50%) translateY(4px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
</style>
