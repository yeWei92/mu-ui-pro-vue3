<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconScissors' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
