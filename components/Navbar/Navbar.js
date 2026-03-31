import Link from "next/link";

export default function Nav({ links, sections }) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Title / Logo */}
        <Link href="/" className="group transition-all">
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-white">
            Charles Hodgins 
            <span className="hidden sm:inline font-light text-slate-500 ml-2 group-hover:text-blue-400 transition-colors">
              — Software Engineer
            </span>
          </h2>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-8">
          {sections.map((section, idx) => (
            <Link 
              key={section} 
              href={links[idx]} 
              className="relative text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors group"
            >
              {section}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* Optional: GitHub Quick Link (Technical Touch) */}
          <a 
            href="https://github.com/c3hodgins" 
            target="_blank"
            className="hidden md:block px-4 py-1.5 text-xs font-bold border border-slate-700 rounded-full text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}