<template>
  <div ref="containerRef" class="mu-scrollbar" :class="{ 'mu-scrollbar--always': always }" :style="containerStyle">
    <div ref="wrapRef" class="mu-scrollbar__wrap" @scroll="handleScroll">
      <slot></slot>
    </div>

    <!-- 纵向滚动条 -->
    <div v-if="!native && showVertical" ref="verticalTrackRef" class="mu-scrollbar__track mu-scrollbar__track--vertical" @mousedown="handleTrackClick($event, 'vertical')">
      <div ref="verticalThumbRef" class="mu-scrollbar__thumb" :style="verticalThumbStyle" @mousedown.stop="handleThumbMouseDown($event, 'vertical')"></div>
    </div>

    <!-- 横向滚动条 -->
    <div v-if="!native && showHorizontal" ref="horizontalTrackRef" class="mu-scrollbar__track mu-scrollbar__track--horizontal" @mousedown="handleTrackClick($event, 'horizontal')">
      <div ref="horizontalThumbRef" class="mu-scrollbar__thumb" :style="horizontalThumbStyle" @mousedown.stop="handleThumbMouseDown($event, 'horizontal')"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({ name: 'MuScrollbar' });
  import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
  import type { ScrollbarProps, ScrollbarEmits } from './types';

  const props = withDefaults(defineProps<ScrollbarProps>(), {
    always: false,
    native: false,
    thumbPadding: 2
  });

  const emit = defineEmits<ScrollbarEmits>();

  const containerRef = ref<HTMLElement>();
  const wrapRef = ref<HTMLElement>();
  const verticalTrackRef = ref<HTMLElement>();
  const verticalThumbRef = ref<HTMLElement>();
  const horizontalTrackRef = ref<HTMLElement>();
  const horizontalThumbRef = ref<HTMLElement>();

  const showVertical = ref(false);
  const showHorizontal = ref(false);
  const verticalThumbHeight = ref(0);
  const verticalThumbTop = ref(0);
  const horizontalThumbWidth = ref(0);
  const horizontalThumbLeft = ref(0);

  // 容器样式
  const containerStyle = computed(() => {
    const style: Record<string, string> = {};
    if (props.height != null) style.height = toPx(props.height);
    if (props.maxHeight != null) style.maxHeight = toPx(props.maxHeight);
    if (props.width != null) style.width = toPx(props.width);
    if (props.maxWidth != null) style.maxWidth = toPx(props.maxWidth);
    return style;
  });

  // 纵向滑块样式
  const verticalThumbStyle = computed(() => ({
    height: verticalThumbHeight.value + 'px',
    transform: `translateY(${verticalThumbTop.value}px)`
  }));

  // 横向滑块样式
  const horizontalThumbStyle = computed(() => ({
    width: horizontalThumbWidth.value + 'px',
    height: '100%',
    transform: `translateX(${horizontalThumbLeft.value}px)`
  }));

  // px 转换
  function toPx(val: string | number): string {
    return typeof val === 'number' ? `${val}px` : val;
  }

  // 更新滚动条尺寸和位置
  function update() {
    const wrap = wrapRef.value;
    if (!wrap) return;

    const wrapHeight = wrap.clientHeight;
    const wrapWidth = wrap.clientWidth;
    const scrollHeight = wrap.scrollHeight;
    const scrollWidth = wrap.scrollWidth;
    const padding = props.thumbPadding;

    // 纵向
    if (scrollHeight > wrapHeight) {
      showVertical.value = true;
      const trackHeight = wrapHeight - padding * 2;
      verticalThumbHeight.value = Math.max((wrapHeight / scrollHeight) * trackHeight, 20);
      verticalThumbTop.value = (wrap.scrollTop / (scrollHeight - wrapHeight)) * (trackHeight - verticalThumbHeight.value);
    } else {
      showVertical.value = false;
    }

    // 横向
    if (scrollWidth > wrapWidth) {
      showHorizontal.value = true;
      const trackWidth = wrapWidth - padding * 2;
      horizontalThumbWidth.value = Math.max((wrapWidth / scrollWidth) * trackWidth, 20);
      horizontalThumbLeft.value = (wrap.scrollLeft / (scrollWidth - wrapWidth)) * (trackWidth - horizontalThumbWidth.value);
    } else {
      showHorizontal.value = false;
    }
  }

  // 滚动事件
  function handleScroll(event: Event) {
    update();
    emit('scroll', event);
  }

  // 当前拖拽的清理函数（组件卸载时兜底移除全局监听器、恢复样式）
  let cleanupDrag: (() => void) | null = null;

  // 滑块拖拽
  function handleThumbMouseDown(e: MouseEvent, direction: 'vertical' | 'horizontal') {
    const wrap = wrapRef.value;
    if (!wrap) return;

    // 若已有拖拽进行中，先清理（防御性，正常不会触发）
    cleanupDrag?.();

    // 拖拽期间临时禁用平滑滚动，保证滑块即时跟随鼠标，避免卡顿/滞后
    const prevScrollBehavior = wrap.style.scrollBehavior;
    wrap.style.scrollBehavior = 'auto';

    const startX = e.clientX;
    const startY = e.clientY;
    const startScrollTop = wrap.scrollTop;
    const startScrollLeft = wrap.scrollLeft;
    const scrollHeight = wrap.scrollHeight;
    const scrollWidth = wrap.scrollWidth;
    const wrapHeight = wrap.clientHeight;
    const wrapWidth = wrap.clientWidth;
    const padding = props.thumbPadding;

    // 拖拽期间这些值不变，提前计算，避免 mousemove 每帧重复读取 DOM
    const trackHeight = wrapHeight - padding * 2;
    const trackWidth = wrapWidth - padding * 2;
    const thumbHeight = Math.max((wrapHeight / scrollHeight) * trackHeight, 20);
    const thumbWidth = Math.max((wrapWidth / scrollWidth) * trackWidth, 20);
    const maxScrollTop = scrollHeight - wrapHeight;
    const maxScrollLeft = scrollWidth - wrapWidth;
    const ratioVertical = maxScrollTop / Math.max(trackHeight - thumbHeight, 1);
    const ratioHorizontal = maxScrollLeft / Math.max(trackWidth - thumbWidth, 1);

    const handleMove = (moveEvent: MouseEvent) => {
      if (direction === 'vertical') {
        const deltaY = moveEvent.clientY - startY;
        wrap.scrollTop = Math.max(0, Math.min(maxScrollTop, startScrollTop + deltaY * ratioVertical));
      } else {
        const deltaX = moveEvent.clientX - startX;
        wrap.scrollLeft = Math.max(0, Math.min(maxScrollLeft, startScrollLeft + deltaX * ratioHorizontal));
      }
    };

    const handleUp = () => {
      wrap.style.scrollBehavior = prevScrollBehavior;
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
      cleanupDrag = null;
    };

    cleanupDrag = handleUp;

    document.body.style.userSelect = 'none';
    document.body.style.cursor = direction === 'vertical' ? 'ns-resize' : 'ew-resize';
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  }

  // 点击轨道跳转
  function handleTrackClick(e: MouseEvent, direction: 'vertical' | 'horizontal') {
    const wrap = wrapRef.value;
    if (!wrap) return;

    if (direction === 'vertical') {
      const track = verticalTrackRef.value;
      const thumb = verticalThumbRef.value;
      if (!track || !thumb) return;

      const rect = track.getBoundingClientRect();
      const thumbHeight = thumb.offsetHeight;
      const offsetY = e.clientY - rect.top - thumbHeight / 2;
      const trackHeight = rect.height - props.thumbPadding * 2;
      const ratio = offsetY / (trackHeight - thumbHeight);
      wrap.scrollTop = ratio * (wrap.scrollHeight - wrap.clientHeight);
    } else {
      const track = horizontalTrackRef.value;
      const thumb = horizontalThumbRef.value;
      if (!track || !thumb) return;

      const rect = track.getBoundingClientRect();
      const thumbWidth = thumb.offsetWidth;
      const offsetX = e.clientX - rect.left - thumbWidth / 2;
      const trackWidth = rect.width - props.thumbPadding * 2;
      const ratio = offsetX / (trackWidth - thumbWidth);
      wrap.scrollLeft = ratio * (wrap.scrollWidth - wrap.clientWidth);
    }
  }

  // 暴露方法给父组件
  defineExpose({
    wrapRef,
    update,
    scrollTo(arg1: ScrollToOptions | number, arg2?: number) {
      const wrap = wrapRef.value;
      if (!wrap) return;
      if (typeof arg1 === 'number') {
        wrap.scrollTo(arg1, arg2 ?? 0);
      } else {
        wrap.scrollTo(arg1);
      }
    }
  });

  onMounted(() => {
    nextTick(update);
  });

  onBeforeUnmount(() => {
    cleanupDrag?.();
  });
</script>

<style scoped lang="scss">
  @use './style.scss';
</style>
