import { Github, Mail, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-black text-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h3 className="font-display font-black uppercase text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter">
              Let's
              <br />
              <span className="text-[#FDE047]">build.</span>
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.25em] mt-6 text-[#A7F3D0]">
              Open to internships, freelance & collaboration.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://github.com/Huzaif005"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-github"
              className="inline-flex items-center gap-3 border-2 border-[#FDFBF7] px-4 py-2 hover:bg-[#FDE047] hover:text-black hover:border-[#FDE047] transition-all"
            >
              <Github size={16} /> <span className="font-mono text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/md-huzaif-patel-046984357"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin"
              className="inline-flex items-center gap-3 border-2 border-[#FDFBF7] px-4 py-2 hover:bg-[#FDE047] hover:text-black hover:border-[#FDE047] transition-all"
            >
              <Linkedin size={16} /> <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:huzefpatel75@gmail.com"
              data-testid="footer-email"
              className="inline-flex items-center gap-3 border-2 border-[#FDFBF7] px-4 py-2 hover:bg-[#FDE047] hover:text-black hover:border-[#FDE047] transition-all"
            >
              <Mail size={16} /> <span className="font-mono text-sm">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t-2 border-[#FDFBF7]/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FDFBF7]/70">
            © {new Date().getFullYear()} Ujepa Patel · Crafted with care.
          </p>
          <a
            href="#home"
            data-testid="footer-back-top"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] hover:text-[#FDE047]"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
