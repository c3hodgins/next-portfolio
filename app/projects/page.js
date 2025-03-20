import Link from "next/link";
import styles from "./projects.module.css";
import { createClient } from "@supabase/supabase-js";

export default async function ProjectPage() {
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let { data:projects } = await supabase.from("Projects").select("*");
  return (
    <div className={styles.projects}>
      {projects &&
        projects.map((project, index) => (
          <div key = {index} className={styles.project}>
            <Link className = {styles.projectLink} href={`/projects/${project.id}`}>
              <h1 key={index}>{project.project_title}</h1>
            </Link>
            <br />
            <p >{(project.project_dates.length > 1)?(project.project_dates[0]+' - '+project.project_dates[1]):(project.project_dates[0])}</p>
            <p style = {{fontSize: '1.5rem'}}>{project.project_shortblurb}</p>
            <br />
          </div>
        ))}
    </div>
  );
}
