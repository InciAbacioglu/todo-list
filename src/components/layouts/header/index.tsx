import { Sparkle } from "@phosphor-icons/react/dist/ssr/Sparkle";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Sparkle size={32} color="#ffffff" />
      <div className={styles.title}>To-Do List</div>
    </div>
  );
};

export default Header;
