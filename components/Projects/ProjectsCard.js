import styles from "@/components/Projects/ProjectsCard.module.css";
import { createClient } from "@supabase/supabase-js";
export default async function ProjectTab() {

  const supabaseKey = process.env.SUPABASE_KEY;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let { data } = await supabase.from("Projects").select("*").range('0','3');

  return (
    <div className={styles.projectsContainer}>
    <h1  style = {{padding:'1rem'}}>Recent projects</h1>
      <div className={styles.projects}>
        {projectInfo.map((project, index) => (
          <div key={index} className={styles.project}>
            <img
              className={styles.projectImg}
              key={project.Image}
              src={project.Image}
            />
            <a
              className={styles.projectPageLink}
              href={"/projects/" + project.id}
            >
              <h1 key={project.Title} style={{ fontWeight: "bold" }}>
                {project.Title}
              </h1>
            </a>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {project.Languages.map((language, idx) => (
                <p key={language}>
                  {project.Languages.length - 1 == idx
                    ? language
                    : language + ", "}
                </p>
              ))}
            </div>
            <p key={project.blurb}>{project.Blurb}</p>
            <div>
              {project.Link != "" && (
                <a className="linkButton" href={project.Link}>
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <a className = {styles.pageLink} href = '/projects'>See all</a>
    </div>
  );
}

const projectInfo = [
  {
    id: "1",
    Title: "F1Tenth Autonomous RC Car",
    Blurb:
      "Train and test an open source competition autonomous racecar in ROS2 using a camera, lidar and machine learning",
    Link: "https://github.com/Binghamton-University-Roboracer",
    Image: "autonomous-car.jpg",
    Languages: ["Python", "Bash", "C++"],
  },

  {
    id: "2",
    Title: "FPGA VHDL & Embedded C Metal Detector",
    Blurb:
      "Programmed a battery powered fpga system with a softcore processor to detect magnetic field strength using a coil and a 7-segment display",
    Image: "fpga.png",
    Link: "",
    Languages: ["VHDL", "Embedded C"],
  },
  {
    id: "3",
    Title: "Portfolio Website",
    Blurb:
      "The website youre on right now! Designed to introduce myself and show off some recent projects. Created with Next.js & deployed on Vercel",
    Link: "https://github.com/c3hodgins/next-portfolio",
    Image: "next-react.png",
    Languages: ["Javascript", "React.js"],
  },
];
