<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M18 4c-3 0-5 1-6 3-1-2-3-3-6-3C2 4 0 8 0 12s2 8 6 8c2 0 4-1 5-2v4h2v-4c1 1 3 2 5 2 4 0 6-4 6-8s-2-8-6-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconRat' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
