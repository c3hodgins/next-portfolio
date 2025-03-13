import styles from "@/components/Navbar/Navbar.module.css";
import Link from "next/link";
export default function Nav({ refs, handleSection, sections }) {
  return (
    <>
      <div className={styles.nav}>
        <Link className={styles.title} href="/">
          <h2>Charles Hodgins - Software Engineer</h2>
        </Link>
        <div className={styles.sections}>
          {sections.map((section, idx) => (
            <button
              key={section}
              className={styles.section}
              onClick={() => handleSection(refs[idx])}
            >
              {sections[idx]}
            </button>
          ))}
          ;
        </div>
      </div>
    </>
  );
}
