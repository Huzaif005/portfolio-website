import { motion } from "framer-motion";
import { GraduationCap, Target, Wrench } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.div {...reveal(0)} className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] bg-black text-[#FDE047] px-3 py-1">
            01 — About
          </span>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tight mt-5">
            Hi, I'm Ujepa.
            <br />
            <span className="text-[#27272A]">Nice to meet you.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            {...reveal(0.05)}
            className="bg-[#A7F3D0] border-4 border-black p-6 md:p-8 nb-shadow-static md:col-span-2"
            data-testid="about-intro-card"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em]">// intro</span>
            <p className="mt-3 text-lg md:text-xl leading-relaxed">
              I'm an aspiring developer who genuinely enjoys figuring out how things work
              and then making them work better. I build small, opinionated web projects
              that solve real problems — for farmers, for police records, for people
              who need a car, for crops that need a doctor.
            </p>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-[#27272A]">
              Outside of code, I'm always reading docs, breaking demos, and learning a
              new shortcut to ship faster.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="bg-[#FBCFE8] border-4 border-black p-6 md:p-8 nb-shadow-static"
            data-testid="about-education-card"
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={22} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Education</span>
            </div>
            <h3 className="font-display font-bold text-2xl mt-3">Computer Science</h3>
            <p className="mt-2 text-[#27272A]">
              Undergraduate · focused on web development, databases, and applied AI projects.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.15)}
            className="bg-[#FDE047] border-4 border-black p-6 md:p-8 nb-shadow-static"
            data-testid="about-goals-card"
          >
            <div className="flex items-center gap-2">
              <Target size={22} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Career Goals</span>
            </div>
            <h3 className="font-display font-bold text-2xl mt-3">Ship that matters.</h3>
            <p className="mt-2 text-[#27272A]">
              Become a full-stack developer working on products that touch real users —
              especially in agri-tech and civic-tech.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.2)}
            className="bg-[#BAE6FD] border-4 border-black p-6 md:p-8 nb-shadow-static md:col-span-2"
            data-testid="about-learning-card"
          >
            <div className="flex items-center gap-2">
              <Wrench size={22} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">Currently Learning</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Python",
                "FastAPI",
                "MongoDB",
                "TensorFlow",
                "Tailwind",
                "Git Workflows",
              ].map((t) => (
                <span
                  key={t}
                  data-testid={`learning-tag-${t.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white border-2 border-black px-3 py-1 font-mono text-xs uppercase tracking-[0.15em]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
