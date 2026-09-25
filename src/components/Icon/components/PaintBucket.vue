<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M19.6 12.6L4.2 18.2c-.8.3-1.7-.6-1.4-1.4L8.4 4.4c.3-.8 1.6-.8 1.9 0L12 9l4.8-4.8c.8-.8 2-.8 2.8 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconPaintBucket' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
