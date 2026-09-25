<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <polyline points="15 14 20 9 15 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M4 20v-7a4 4 0 0 1 4-4h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconCornerUpRight' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
