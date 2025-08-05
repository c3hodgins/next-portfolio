import styles from "@/components/Resume/Resume.module.css";

export default function Resume() {
  return (
    <>
      <div className={styles.resumeSection}>
        <div className={styles.resumePage}>
          <div className={styles.experience}>
            <h1>👨‍💻 Experience</h1>
            {experienceInfo.map((experience, idx) => (
              <div key={idx}>
                <h2 key={experience.Role}>{experience.Role}</h2>
                <h4 key={experience.Team}>{experience.Team}</h4>
                <p key={experience.Blurb}>{experience.Blurb}</p>
              </div>
            ))}
          </div>
          <div className={styles.education}>
            <div className= {styles.educationInfo}>
              <h1>🎓 Education</h1>
              {educationInfo.map((education, idx) => (
                <div key={idx}>
                  <h2 key={education.Degree}>{education.Degree}</h2>
                  <h4 key={education.University}>
                    {education.University + ", " + education.Grad}
                  </h4>
                </div>
              ))}
            </div>
            <img
              style={{ margin: "2rem", height: "30%" }}
              src="bingu.jpg"
            ></img>
          </div>
        </div>
        <div className={styles.resumeContainer}>
          <a
            className={styles.resumeLink}
            href="Charles_Hodgins_Resume_August_2025.pdf"
          >
            <img
              className={styles.resume}
              src="Charles_Hodgins_Resume_Mar_2025.jpg"
            ></img>
          </a>
          <a
            className='linkButton'
            href="Charles_Hodgins_Resume_Mar_2025.pdf"
            download={"Charles_Hodgins_Resume_Mar_2025.pdf"}
          >
            Download Resume
          </a>
        </div>
      </div>
      {/* <div className="skills">
        <h1>🔧 Skills</h1>
      </div> */}
    </>
  );
}

const experienceInfo = [
  {
    Role: "Firmware Engineer",
    Team: "Binghamton University Rover Team",
    Blurb:
      "Interface with sensors and components to write firmware for various subsystems on competition rover",
  },
  {
    Role: "Undergraduate Course Assistant",
    Team: "Binghamton University Electrical and Computer Engineering Department",
    Blurb:
      "Provided extensive knowledge on introductory embedded computing systems, processor architecture and conducted code reviews to students",
  },
];

const educationInfo = [
  {
    Degree: "Bachelors of Science in Computer Engineering",
    University: "Binghamton University, State University of New York",
    Grad: "May 2025",
  },
  {
    Degree: "4+1 Masters of Science in Computer Engineering",
    University: "Binghamton University, State University of New York",
    Grad: "May 2026",
  },
];
