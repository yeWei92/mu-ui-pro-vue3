export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonNativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /** 按钮类型 */
  type?: ButtonType;
  /** 按钮尺寸 */
  size?: ButtonSize;
  /** 原生 type 属性，默认为 button，避免在表单内意外提交 */
  nativeType?: ButtonNativeType;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否加载中 */
  loading?: boolean;
  /** 是否扁平样式 */
  plain?: boolean;
  /** 是否圆角 */
  round?: boolean;
  /** 是否圆形 */
  circle?: boolean;
  /** 图标名称，对应 Icon 组件的 name（如 search、check-circle） */
  icon?: string;
}

export interface ButtonEmits {
  /** 点击时触发（禁用/加载中时不触发） */
  (e: 'click', event: MouseEvent): void;
}
