<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M10 20c-4 0-7-2.5-7-6s2.5-6 6-6c3 0 5 2 5 4s-2 4-4 3c-1 0-1.5-.5-1.5-1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M18 12c0 4-3.5 6-5.5 6M16 8c1.5 0 3.5 1 3.5 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconAmpersands' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
