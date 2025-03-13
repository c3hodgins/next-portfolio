import styles from "@/components/Navbar/Navbar.module.css";
import Link from "next/link";
export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <Link className = {styles.title} href="/" >
          <h2>Charles Hodgins - Software Engineer</h2>
        </Link>
        <div className={styles.sections}>
          <Link className = {styles.section} href="">About Me</Link>
          <Link className = {styles.section} href="/projects">Projects</Link>
          <Link className = {styles.section} href="">Contact</Link>
        </div>
      </div>
    </>
  );
}
