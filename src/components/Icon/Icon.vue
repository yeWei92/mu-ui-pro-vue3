<template>
  <component :is="iconComponent" v-if="iconComponent" :size="size" :color="color" :class="$attrs.class" />
  <i v-else class="mu-icon" :class="$attrs.class" :style="iconStyle" />
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuIcon' });
  import { computed, shallowRef, watchEffect } from 'vue';
  import type { Component } from 'vue';
  import type { IconProps } from './types';
  import iconMap from './map';

  const props = withDefaults(defineProps<IconProps>(), {
    size: '1em'
  });

  const iconComponent = shallowRef<Component | null>(null);

  watchEffect(() => {
    iconComponent.value = iconMap[props.name] || null;
  });

  const iconStyle = computed(() => ({
    width: toUnit(props.size),
    height: toUnit(props.size),
    color: props.color,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  }));

  function toUnit(val: string | number): string {
    return typeof val === 'number' ? `${val}px` : val;
  }
</script>

<style scoped lang="scss">
  @use './style.scss';
</style>
