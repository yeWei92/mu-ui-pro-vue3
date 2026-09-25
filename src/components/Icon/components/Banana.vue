<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 353 200" width="1em" height="1em" :style="{ color, width: size, height: size }">
    <path fill="currentColor" d="M284 28L270 26L265 33L262 53L257 63L238 82L212 98L188 104L165 103L140 96L98 76L82 72L74 80L78 103L83 113L97 128L121 142L140 149L177 156L193 156L221 150L259 129L278 107L284 90L284 80L277 51L284 37Z" />
  </svg>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIconBanana' });
  withDefaults(defineProps<{ size?: string | number; color?: string }>(), { size: '1em' });
</script>
