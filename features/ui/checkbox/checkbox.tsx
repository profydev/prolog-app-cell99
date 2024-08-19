import classNames from "classnames";
import styles from "./checkbox.module.scss";

type CheckBoxProps = React.InputHTMLAttributes<HTMLInputElement>;

export function CheckBox({
  children,
  className,
  style,
  checked,
  ...otherprops
}: CheckBoxProps) {
  return (
    <label className={classNames(styles.container, className)} style={style}>
      <input {...otherprops} type="checkbox" checked={checked} />
      <span className={styles.checkbox}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.check}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M10 3L4.5 8.5L2 6"
            stroke="currentColor"
            strokeWidth="1.6666"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </label>
  );
}
