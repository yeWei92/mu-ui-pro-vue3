<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <polygon points="4 6 20 6 12 16" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconCaretDown' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
