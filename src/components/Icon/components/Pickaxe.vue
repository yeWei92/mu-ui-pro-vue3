<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M14.4 4.4L9.5 9.3l5.2 5.2 4.9-4.9c1.2-1.2 1.2-3.1 0-4.2-1.2-1.2-3.1-1.2-4.2 0zM8.1 10.7l-5.4 9c-.4.7 0 1.5.7 1.5h2.2l3.8-6.1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconPickaxe' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
