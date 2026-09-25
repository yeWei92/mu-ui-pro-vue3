<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M21.3 8.7L8.7 21.3c-1 1-2.8 1-3.8 0l-2.2-2.2c-1-1-1-2.8 0-3.8L15.3 2.7c1-1 2.8-1 3.8 0l2.2 2.2c1 1 1 2.8 0 3.8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <line x1="12" y1="12" x2="14" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconRuler' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
