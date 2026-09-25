<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4zM2 22l3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M16.5 2.5l-5 5L18 14l5-5-6.5-6.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <polyline points="11 7 13 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconPlugZap' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
