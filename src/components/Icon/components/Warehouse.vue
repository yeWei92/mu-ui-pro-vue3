<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 2.3 6.7l8-4.5a2 2 0 0 1 1.4-.4 2 2 0 0 1 1.4.4l8 4.5a2 2 0 0 1 .9 1.65z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M6 18h12M6 14h12M9 10h2v8H9zm4 0h2v8h-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconWarehouse' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
