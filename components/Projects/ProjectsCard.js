import Link from "next/link";
import { projectInfo } from "@/public/ProjectsInfo";

export default async function ProjectTab() {
  const displayedProjects = [...projectInfo].reverse().slice(0, -2);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold p-4">Recent projects</h1>
      
      {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <div key={index} className="flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            
            <img
              className="w-full h-48 object-cover"
              src={"/" + project.image_path}
              alt={project.title}
            />

            <div className="p-5 flex flex-col flex-grow">
              {project.id && (
                <Link href={"/projects/" + project.id} className=" text-black hover:text-blue-600 transition-colors">
                  <h2 className="text-xl font-bold mb-2">
                    {project.title}
                  </h2>
                </Link>
              )}

              {/* Languages List */}
              <div className="flex flex-wrap gap-1 text-sm text-slate-500 mb-3">
                {project.languages.map((language, idx) => (
                  <span key={idx}>
                    {language}{idx < project.languages.length - 1 ? "," : ""}
                  </span>
                ))}
              </div>

              <p className="text-slate-600 mb-4 flex-grow">
                {project.short_blurb}
              </p>

              {project.link && (
                <a 
                  href={project.link}
                  className="inline-block bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors self-start"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link 
          href='/projects' 
          className="text-blue-600 font-semibold hover:underline"
        >
          See all →
        </Link>
      </div>
    </div>
  );
}
