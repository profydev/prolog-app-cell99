import classNames from "classnames";
import styles from "./checkbox.module.scss";

type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

export function CheckBox({
  children,
  className,
  style,
  ...otherprops
}: CheckBoxProps) {
  return (
    <label className={classNames(styles.container, className)} style={style}>
      <input {...otherprops} type="checkbox" />
      <span className={styles.checkbox}>kjh</span>
      {children}
    </label>
  );
}
