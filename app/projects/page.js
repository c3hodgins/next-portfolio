import Link from "next/link";
import styles from "./projects.module.css";
import { createClient } from "@supabase/supabase-js";

export default async function ProjectPage() {
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let { data } = await supabase.from("Projects").select("*");
  console.log(data);
  return (
    <div className={styles.projects}>
      {data &&
        data.map((project, index) => (
          <div key = {index} className={styles.project}>
            <Link href={`/projects/${project.id}`}>
              <h1 key={index}>{project.project_title}</h1>
            </Link>
            <br />
            <h2>{project.project_shortblurb}</h2>
            <br />
            <br />
          </div>
        ))}
    </div>
  );
}
