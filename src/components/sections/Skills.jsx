import { motion } from "framer-motion";
import { Code2, Palette, FileCode, Database, GitBranch } from "lucide-react";

const skills = [
  { name: "HTML", icon: FileCode, bg: "#FBCFE8", level: "Confident" },
  { name: "CSS", icon: Palette, bg: "#A7F3D0", level: "Confident" },
  { name: "JavaScript", icon: Code2, bg: "#FDE047", level: "Learning" },
  { name: "SQL", icon: Database, bg: "#BAE6FD", level: "Comfortable" },
  { name: "GitHub", icon: GitBranch, bg: "#FBCFE8", level: "Daily" },
];

export default function Skills() {
  return (
    <section id="skills" data-testid="skills-section" className="border-b-4 border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] bg-black text-[#FDE047] px-3 py-1">
              02 — Skills
            </span>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tight mt-5">
              My toolbox
            </h2>
          </div>
          <p className="md:max-w-md text-[#27272A] text-lg">
            A small, sharp set of tools I use to design, build, and ship websites and apps.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-6">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={`skill-card-${s.name.toLowerCase()}`}
                className="group border-4 border-black p-5 md:p-6 nb-shadow flex flex-col items-start justify-between min-h-[180px]"
                style={{ backgroundColor: s.bg }}
              >
                <Icon size={40} strokeWidth={2.5} />
                <div className="mt-6">
                  <p className="font-display font-black text-2xl uppercase">{s.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] mt-1 text-[#27272A]">
                    {s.level}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
