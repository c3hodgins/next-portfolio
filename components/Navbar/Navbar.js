import styles from "@/components/Navbar/Navbar.module.css";
export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <a className = {styles.title} href="/" >
          <h2>Charles Hodgins - Software Engineer</h2>
        </a>
        <div className={styles.sections}>
          <a className = {styles.section} href="">About Me</a>
          <a className = {styles.section} href="/projects">Projects</a>
          <a className = {styles.section} href="">Contact</a>
        </div>
      </div>
    </>
  );
}
