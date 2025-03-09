import { ReactNode } from "react";

import styles from "./body.module.scss";

export interface BodyProps {
  className?: string;
  children: ReactNode;
}

const Body = (props: BodyProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Body;
