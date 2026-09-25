<template>
  <button
    class="mu-button"
    :class="[
      `mu-button--${type}`,
      `mu-button--${size}`,
      {
        'mu-button--plain': plain,
        'mu-button--round': round,
        'mu-button--circle': circle
      }
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    :aria-busy="loading"
    @click="emit('click', $event)"
  >
    <span v-if="loading" class="mu-button__loading" aria-hidden="true"></span>
    <mu-icon v-if="icon && !loading" :name="icon" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuButton' });
  import type { ButtonProps, ButtonEmits } from './types';
  import MuIcon from '../Icon';

  withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
    size: 'medium',
    nativeType: 'button',
    disabled: false,
    loading: false,
    plain: false,
    round: false,
    circle: false
  });

  const emit = defineEmits<ButtonEmits>();
</script>

<style scoped lang="scss">
  @use './style.scss';
</style>
