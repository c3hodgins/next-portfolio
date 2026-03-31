export default function Resume() {
  return (
    <section className=" py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Experience */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span>👨‍💻</span> Experience
            </h2>
            <div className="space-y-8 border-l-2 border-slate-700 ml-4 pl-8">
              {experienceInfo.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900" />
                  <h3 className="text-xl font-bold text-blue-400">
                    {exp.Role}
                  </h3>
                  <h4 className="text-slate-400 font-medium">{exp.Team}</h4>
                  <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                    {exp.Blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Column: Education **/}
        <div className="flex flex-col items-center justify-start space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span>🎓</span> Education
            </h2>
            <div className=" space-y-12">
              {educationInfo.reverse().map((education, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-lg font-bold text-white">
                    {education.Degree}
                  </h3>
                  <p className="text-green-400">{education.University}</p>
                  <p className="text-slate-400 text-sm"> {education.Grad}</p>
                  {education.Focus && (
                    <p className="text-slate-300 mt-1 text-sm italic">
                      Focus: {education.Focus}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://docs.google.com/document/d/1pftUnBcoq_FD3LJpyaXcibGvlFqkNmnq4CkL2nCDFqY/export?format=pdf"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-500/20"
          >
            Download PDF Resume
          </a>
        </div>
      </div>
    </section>
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
    Grad: "Expected May 2026",
  },
];
