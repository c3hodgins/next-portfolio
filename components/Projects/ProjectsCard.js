import styles from "@/components/Projects/ProjectsCard.module.css";
import Link from "next/link";
import { supabase } from "@/utils/supabase";
export default async function ProjectTab() {

  const images = supabase.storage.from('images');
  let { data:projectInfo } = await supabase.from("Projects").select("*").range('1','3');
  
  return (
    <div className={styles.projectsContainer}>
    <h1  style = {{padding:'1rem'}}>Recent projects</h1>
      <div className={styles.projects}>
        {projectInfo.map((project, index) => (
          <div key={index} className={styles.project}>
            <img
              className={styles.projectImg}
              key={project.image_path}
              src={images.getPublicUrl(project.image_path).data.publicUrl}
            />
            {project.id && <Link
              className={styles.link}
              href={"/projects/" + project.id}
            >
              <h1 key={project.title} style={{ fontWeight: "bold" }}>
                {project.title}
              </h1>
            </Link>}
            <div style={{ display: "flex", flexDirection: "row" }}>
              {project.languages.map((language, idx) => (
                <p key={language}>
                  {project.languages.length - 1 == idx
                    ? language
                    : language + ", "}
                </p>
              ))}
            </div>
            <p key={project.short_blurb}>{project.short_blurb}</p>
            <div>
              {project.link && (
                <a className="linkButton" href={project.link}>
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <Link className = {styles.pageLink} href = '/projects'>See all</Link>
    </div>
  );
}