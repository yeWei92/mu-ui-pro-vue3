<template>
  <div class="mu-cell" @click="handleClick">
    <div class="mu-cell__left">
      <span v-if="icon" class="mu-cell__icon">{{ icon }}</span>
      <div class="mu-cell__content">
        <div class="mu-cell__title" :class="{ 'mu-cell__title--required': required }">
          {{ title }}
        </div>
        <div v-if="label" class="mu-cell__label">{{ label }}</div>
      </div>
    </div>
    <div class="mu-cell__right">
      <span v-if="value" class="mu-cell__value">{{ value }}</span>
      <span v-if="isLink" class="mu-cell__arrow">&gt;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuCell' });
  import type { CellProps, CellEmits } from './types';

  withDefaults(defineProps<CellProps>(), {
    isLink: false,
    required: false
  });

  const emit = defineEmits<CellEmits>();

  const handleClick = (event: MouseEvent) => {
    emit('click', event);
  };
</script>

<style scoped lang="scss">
  @use './style.scss';
</style>
