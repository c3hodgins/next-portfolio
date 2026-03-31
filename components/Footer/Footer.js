import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiOutlineLocationMarker } from "react-icons/hi"; // Added for a nice location icon

const contactInfo = [
  {
    Text: "LinkedIn",
    Link: "https://www.linkedin.com/in/charleshodgins",
    Icon: <FaLinkedin className="w-5 h-5" />,
    color: "hover:text-blue-400"
  },
  {
    Text: "GitHub",
    Link: "https://github.com/c3hodgins",
    Icon: <FaGithub className="w-5 h-5" />,
    color: "hover:text-slate-400"
  },
  {
    Text: "Email",
    Link: "mailto:c3hodgins@gmail.com", // Fixed to be a clickable mail link
    Icon: <SiGmail className="w-5 h-5" />,
    color: "hover:text-red-400"
  }
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Branding/Identity */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Charles Hodgins
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Electrical & Computer Engineering @ Binghamton University
          </p>
        </div>

        {/* Center/Right: Social Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.Link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-slate-400 transition-all duration-300 ${contact.color} group`}
            >
              <span className="transform group-hover:scale-110 transition-transform">
                {contact.Icon}
              </span>
              <span className="text-sm font-medium">{contact.Text}</span>
            </a>
          ))}
        </div>

        {/* Right Side: Location */}
        <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
          <HiOutlineLocationMarker className="text-blue-500" />
          <span>New York, NY</span>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Designed & Built by Charles Hodgins. 
          Built with Next.js & Tailwind.
        </p>
      </div>
    </footer>
  );
}