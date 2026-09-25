export interface ScrollbarProps {
  /** 容器高度 */
  height?: string | number;
  /** 容器最大高度 */
  maxHeight?: string | number;
  /** 容器宽度 */
  width?: string | number;
  /** 容器最大宽度 */
  maxWidth?: string | number;
  /** 是否始终显示滚动条 */
  always?: boolean;
  /** 是否使用原生滚动条（禁用自定义样式） */
  native?: boolean;
  /** 滚动条距离边缘的内边距 */
  thumbPadding?: number;
}

export interface ScrollbarEmits {
  (e: 'scroll', event: Event): void;
}
