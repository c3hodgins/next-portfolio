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
            <div className={styles.educationInfo}>
              <h1>🎓 Education</h1>
              {educationInfo.map((education, idx) => (
                <div key={idx}>
                  <h2 key={education.Degree}>{education.Degree}</h2>
                  <h4 key={education.University}>
                    {education.University + ", " + education.Grad}
                    
                  </h4>
                  {education.Focus && (
                      <h4 key={education.Focus}>
                        {"Focus in  " + education.Focus}
                      </h4>
                    )}
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
            href="https://docs.google.com/document/d/1pftUnBcoq_FD3LJpyaXcibGvlFqkNmnq4CkL2nCDFqY/edit?usp=sharing"
          >
            <img
              className={styles.resume}
              src="Charles_Hodgins_Resume.jpg"
            ></img>
          </a>
          <a
            className="linkButton"
            href="https://docs.google.com/document/d/1pftUnBcoq_FD3LJpyaXcibGvlFqkNmnq4CkL2nCDFqY/export?format=pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}

const experienceInfo = [
  {
    Role: "Graduate Researcher",
    Team: "Binghamton University Digital Data Embedding Lab",
    Blurb:
      "Conduct research on Explainable AI methods to interpret deep learning models used to detect hidden information in digital images (steganalysis)",
  },
  {
    Role: "Graduate Machine Learning Teaching Assistant",
    Team: "Binghamton University Computer Science Department",
    Blurb:
      "Give lectures on machine learning, provide feedback and hold office hours for graduate level data science students",
  },
  {
    Role: "Firmware Engineer",
    Team: "Binghamton University Rover Team",
    Blurb:
      "Write firmware to interface with sensors and components for various subsystems on competition rover",
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
    Degree: "Masters of Science in Electrical and Computer Engineering",
    Focus: "Digital Signal Processing",
    University: "Binghamton University, State University of New York",
    Grad: "May 2026",
  },
];
