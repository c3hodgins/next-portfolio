import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Branding */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold tracking-wide uppercase">
            Available for Fall 2026 Roles
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Hi, I&apos;m <span className="text-blue-500">Charles.</span>
          </h1>

          <p className="text-xl text-slate-400 leading-relaxed">
            An aspiring <span className="text-white font-semibold">Software Engineer</span> studying Computer Engineering at 
            <span className="text-green-400 font-semibold"> Binghamton University</span>.
          </p>

          <p className="text-slate-500 leading-relaxed">
            I specialize in engineering solutions across 
            <span className="italic text-slate-300"> application development</span>, 
            <span className="italic text-slate-300"> deep learning</span>, and 
            <span className="italic text-slate-300"> embedded systems</span>.
          </p>

          <div className="flex gap-4 pt-4">
            <Link href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/10">
              View Projects
            </Link>
            <a href="mailto:c3hodgins@gmail.com" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Visual Profile Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Decorative background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-slate-900 border border-slate-700 p-2 rounded-2xl shadow-2xl">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-xl">
                <Image
                  src="/image.png" 
                  alt="Charles Hodgins"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 "
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-slate-500 text-sm font-mono">charles_hodgins.jpg</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
