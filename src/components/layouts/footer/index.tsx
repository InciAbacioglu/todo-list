import styles from "./footer.module.scss";
import Link from "next/link";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p> İnci Mercan Abacioğlu </p>
      <Link href="https://github.com/InciAbacioglu"> GitHub </Link>
    </div>
  );
};

export default Footer;
