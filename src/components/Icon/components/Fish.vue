<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M6.5 12c.94-3.46 4.5-6 8.5-7 1.64 1 3 2.8 3 7s-1.36 6-3 7c-4-1-7.56-3.54-8.5-7z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="17" cy="12" r="1" fill="currentColor" />
    <path d="M2 8c1 2 2 4 0 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconFish' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
