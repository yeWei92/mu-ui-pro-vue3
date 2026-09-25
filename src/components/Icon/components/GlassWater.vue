<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M8 2h8l2 18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L8 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconGlassWater' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
