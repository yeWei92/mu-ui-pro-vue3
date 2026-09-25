export interface CellProps {
  /** 左侧标题 */
  title?: string;
  /** 标题下方的描述信息 */
  label?: string;
  /** 右侧显示的值 */
  value?: string;
  /** 左侧图标 */
  icon?: string;
  /** 是否显示右侧箭头 */
  isLink?: boolean;
  /** 是否显示必填标记 */
  required?: boolean;
}

export interface CellEmits {
  /** 点击整行时触发 */
  (e: 'click', event: MouseEvent): void;
}
