import Link from "next/link";
import Image from "next/image";
import { projectInfo } from "@/public/ProjectsInfo";

export default async function ProjectPage() {
  return (
    <section className="bg-slate-950 py-6 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Selected <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-2xl">
            A collection of my work in deep learning, embedded systems, and full-stack development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectInfo && projectInfo.reverse().map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              {/* Image Container */}
              {project.image_path && (
                <div className="relative h-56 w-full overflow-hidden border-b border-slate-800">
                  <img
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    src={"/" + project.image_path}
                    alt={project.title}
                  />
                  {/* Date Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 text-xs font-bold rounded-full">
                      {project.dates.length > 1
                        ? `${project.dates[0]} — ${project.dates[1]}`
                        : project.dates[0]}
                    </span>
                  </div>
                </div>
              )}

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <Link href={`/projects/${project.id}`}>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                </Link>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.short_blurb}
                </p>

                {/* Footer / Link */}
                <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link 
                    href={`/projects/${project.id}`}
                    className="text-sm font-bold text-blue-500 flex items-center gap-2 group/link"
                  >
                    View Project Details 
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}