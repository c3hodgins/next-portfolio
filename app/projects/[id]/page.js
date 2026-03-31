import Link from "next/link";
import { projectInfo } from "@/public/ProjectsInfo";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projectInfo[id - 1];

  if (!project) return <div className="text-white p-20">Project not found.</div>;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-400 transition-colors mb-12 group"
        >
          <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {project.title}
          </h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full font-medium">
              {project.dates.length > 1
                ? `${project.dates[0]} — ${project.dates[1]}`
                : project.dates[0]}
            </span>
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <FaGithub /> Source Code
              </a>
            )}
          </div>
        </header>

        {/* Hero Image */}
        {project.image_path && (
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 mb-12 shadow-2xl">
            <img
              className="w-full h-auto object-cover"
              src={"/" + project.image_path}
              alt={project.title}
            />
          </div>
        )}

        {/* Project Content */}
        <article className="space-y-8">
          {project.long_blurb &&
            project.long_blurb.map((paragraph, idx) => (
              <p 
                key={`paragraph${idx}`} 
                className="text-lg leading-relaxed text-slate-400 first-letter:text-2xl first-letter:font-bold first-letter:text-white"
              >
                {paragraph}
              </p>
            ))}
        </article>

        {/* Call to Action Footer */}
        {project.link && (
          <div className="mt-16 p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <h3 className="text-white font-bold mb-2">Interested in the technical implementation?</h3>
            <p className="text-sm text-slate-500 mb-6">Explore the full documentation and repository on GitHub.</p>
            <a 
              href={project.link}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
            >
              <FaGithub /> View Repository
            </a>
          </div>
        )}
      </div>
    </main>
  );
}