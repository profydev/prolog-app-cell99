import classNames from "classnames";
import styles from "./checkbox.module.scss";

import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

export enum CheckBoxSize {
  Small = "sm",
  Medium = "md",
}

type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  indeterminate?: boolean;
  size?: CheckBoxSize;
};

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  function Checkbox(
    {
      children,
      className,
      style,
      size = CheckBoxSize.Medium,
      checked,
      indeterminate,
      ...otherprops
    },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => inputRef.current,
      [],
    );
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = indeterminate ?? false;
      }
    }, [indeterminate]);

    return (
      <label
        className={classNames(styles.container, styles[size], className)}
        style={style}
      >
        <input
          {...otherprops}
          type="checkbox"
          checked={checked}
          ref={inputRef}
        />
        <span
          className={classNames(
            styles.checkbox,
            indeterminate && styles.indeterminate,
          )}
        >
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

          <svg
            className={styles.indeterminateCheck}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 6H9.5"
              stroke="#7F56D9"
              strokeWidth="1.66666"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>{children}</span>
      </label>
    );
  },
);
