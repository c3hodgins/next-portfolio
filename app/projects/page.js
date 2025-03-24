import Link from "next/link";
import styles from "./projects.module.css";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/utils/supabase";

export default async function ProjectPage() {
  const images = supabase.storage.from("images");
  let { data: projects } = await supabase.from("Projects").select("*");
  return (
    <div className={styles.projects}>
      {projects &&
        projects.map((project, index) => (
          <div key={index} className={styles.project}>
            {project.image_path && <img className = {styles.projectImage} src={images.getPublicUrl(project.image_path).data.publicUrl}></img>}
            <Link
              className={styles.projectLink}
              href={`/projects/${project.id}`}
            >
              <h1 key={index}>{project.title}</h1>
            </Link>
            <br />
            <p>
              {project.dates.length > 1
                ? project.dates[0] + " - " + project.dates[1]
                : project.dates[0]}
            </p>
            <p style={{ fontSize: "1.5rem" }}>{project.short_blurb}</p>
            <br />
          </div>
        ))}
    </div>
  );
}
