import Link from "next/link";
import styles from "./projects.module.css";
import { projectInfo } from "@/public/ProjectsInfo";

export default async function ProjectPage() {
  return (
    <div className={styles.projects}>
      {projectInfo &&
        projectInfo
          .map((project, index) => (
            <div key={index} className={styles.project}>
              <Link
                className={styles.projectLink}
                href={`/projects/${project.id}`}
              >
                <h1 className = {styles.projectTitle} key={index}>{project.title}</h1>
              </Link>              
              <br />
              <div className = {styles.projectBody}>
              {project.image_path && (
                <img
                  className={styles.projectImage}
                  src={"/"+project.image_path}
                ></img>
              )}
              <div className = {styles.textBody}>
                <p>
                  {project.dates.length > 1
                    ? project.dates[0] + " - " + project.dates[1]
                    : project.dates[0]}
                </p>
                <p >{project.short_blurb}</p>
              </div>
              </div>
            </div>
          ))}
    </div>
  );
}
