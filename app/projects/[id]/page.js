import styles from "./project.module.css";
import Link from "next/link";
import { supabase } from "@/utils/supabase";
import { FaArrowLeft } from "react-icons/fa";

export default async function ProjectPage({ params }) {
  const { id } = await params;

  let {
    data: [project],
  } = await supabase.from("Projects").select("*").eq("id", `${id}`);

  const images = supabase.storage.from("images");

  return (
    <div className={styles.page}>
      <Link
        className={styles.backArrow}
        href="/projects"
      >
        <FaArrowLeft />
      </Link>
      <div
        className={styles.projectWrapper}
      >
        {project != null && (
          <>
            {project.image_path && (
              <img
                className={styles.projectImage}
                src={images.getPublicUrl(project.image_path).data.publicUrl}
              ></img>
            )}
            <h1 className={styles.title}>{project.title}</h1>
            <h2>
              {project.dates.length > 1
                ? project.dates[0] + " - " + project.dates[1]
                : project.dates[0]}
            </h2>
            <br />

            {project.long_blurb &&
              project.long_blurb.map((paragraph, idx) => (
                <div key={`paragraph${idx}`}>
                  <p className={styles.paragraph}>{paragraph}</p>
                </div>
              ))}
            {project.link && (
              <div className={styles.projectLink}>
                <a href={project.link}>Source Code</a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
