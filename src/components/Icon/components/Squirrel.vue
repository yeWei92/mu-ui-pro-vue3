<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M15 2c-3 0-5 2-5 5v3H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v4a5 5 0 0 0 5 5h2v-2h-2a3 3 0 0 1-3-3v-4h4v4h2v-8c3 0 5-2 5-5s-2-5-5-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="9" cy="13" r="1" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconSquirrel' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
