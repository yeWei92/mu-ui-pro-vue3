<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" :style="{ color, width: size, height: size }">
    <path d="M16 16l-4-4-4 4M12 12v9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <path d="M20.39 8.39l-7.68-4.43a2 2 0 0 0-2.06 0L3.61 8.39a2 2 0 0 0-.95 1.73v6.32a2 2 0 0 0 .95 1.73l7.68 4.43c.62.36 1.38-.14 1.38-.81V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconPackageOpen' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
