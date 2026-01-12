import styles from "@/components/Projects/ProjectsCard.module.css";
import Link from "next/link";
import {projectInfo} from "@/public/ProjectsInfo"

export default async function ProjectTab() {

  return (
    <div className={styles.projectsContainer}>
      <h1 style={{ padding: '1rem' }}>Recent projects</h1>
      <div className={styles.projects}>
        {projectInfo.reverse().map((project, index) => 
        index < projectInfo.length - 2? (
          <div key={index} className={styles.project}>
            <img
              className={styles.projectImg}
              key={project.image_path}
              src={"/"+project.image_path}
            />
            {project.id && <Link
              className={styles.projectPageLink}
              href={"/projects/" + project.id}
            >
              <h1 key={project.title} style={{ fontWeight: "bold" }}>
                {project.title}
              </h1>
            </Link>}
            <div style={{ display: "flex", flexDirection: "row" }}>
              {project.languages.map((language, idx) => (
                <p key={idx}>
                  {project.languages.length - 1 == idx
                    ? language
                    : language + ","}
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
        ):
        null)}
      </div>
      <Link className={styles.pageLink} href='/projects'>See all</Link>
    </div>
  );
}