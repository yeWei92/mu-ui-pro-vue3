<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M19 5a3 3 0 0 0-3 3c0 1.5-1 2.5-1.5 4S15.5 14 17 14a3 3 0 1 0 2.12-5.12M5 19a3 3 0 0 1 3-3c1.5 0 2.5 1 4 1.5S14 16.5 14 15a3 3 0 1 1 5.12 2.12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconBone' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
