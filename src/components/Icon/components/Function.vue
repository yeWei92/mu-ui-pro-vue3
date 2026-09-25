<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M7 4h10M7 20h10M7 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <circle cx="16" cy="12" r="1" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconFunction' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
