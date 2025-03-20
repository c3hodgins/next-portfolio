import styles from "@/components/Navbar/Navbar.module.css";
import Link from "next/link";
export default function Nav({ links, sections }) {
  return (
    <>
      <div className={styles.nav}>
        <Link className={styles.title} href="/">
          <h2>Charles Hodgins - Software Engineer</h2>
        </Link>
        <div className={styles.sections}>
          {sections.map((section, idx) => (
            <a key={section} className={styles.section} href={links[idx]}>
              {sections[idx]}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
