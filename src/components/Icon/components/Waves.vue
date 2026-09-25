<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M2 6c.6.5 1.2 1 2 1.5C5.2 8.1 6 8 7 7c1.5-1.5 3-1 4.5.5 1 1 2 1.5 3 .5 1-1 2-1.5 3-.5s2 1 3 .5c1-.5 1.5-1 2.5-1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M2 12c.6.5 1.2 1 2 1.5C5.2 14.1 6 14 7 13c1.5-1.5 3-1 4.5.5 1 1 2 1.5 3 .5 1-1 2-1.5 3-.5s2 1 3 .5c1-.5 1.5-1 2.5-1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M2 18c.6.5 1.2 1 2 1.5C5.2 20.1 6 20 7 19c1.5-1.5 3-1 4.5.5 1 1 2 1.5 3 .5 1-1 2-1.5 3-.5s2 1 3 .5c1-.5 1.5-1 2.5-1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconWaves' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
