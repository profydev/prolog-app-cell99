import { Button } from "../button";
import styles from "./alert.module.scss";
import classNames from "classnames";

type AlertButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function AlertButton({ children, onClick }: AlertButtonProps) {
  return (
    <Button className={styles.button} type="button" onClick={onClick}>
      {children}
    </Button>
  );
}

type AlertMessageProps = {
  children: React.ReactNode;
};

export function AlertMessage({ children }: AlertMessageProps) {
  return <span className={styles.message}>{children}</span>;
}

type AlertIconProps = {
  src: string;
};

export function AlertIcon({ src }: AlertIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" />
  );
}

type AlertProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Alert({ children, className }: AlertProps) {
  return (
    <div role="alert" className={classNames(styles.alert, className)}>
      {children}
    </div>
  );
}

/* <div className={styles.container}>
      <div className={styles.side}>
       
        <img
          className={styles.icons}
          src="/icons/alert-circle.svg"
          alt="alert circle"
        ></img>
        <div>Error....</div>
      </div>

      <div className={styles.side}>
        <div>Try again</div>
        <img
          className={styles.icons}
          src="/icons/arrow-right.svg"
          alt="arrow right"
        ></img>
      </div>
    </div>
     */
