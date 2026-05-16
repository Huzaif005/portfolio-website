import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

export default function ResumeBanner() {
  return (
    <section id="resume" data-testid="resume-section" className="border-b-4 border-black bg-[#FDE047]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] bg-black text-[#FDE047] px-3 py-1">
              04 — Resume
            </span>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl lg:text-7xl tracking-tight mt-5 leading-[0.95]">
              Want the
              <br />
              full story?
            </h2>
            <p className="mt-5 text-lg md:text-xl max-w-xl">
              Grab a PDF of my resume — projects, education, and the tools I use every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 flex md:justify-end"
          >
            <a
              href="/resume/resume.pdf"
              download
              data-testid="resume-download-btn"
              className="inline-flex items-center gap-3 bg-black text-[#FDE047] border-4 border-black px-7 py-5 font-display font-black uppercase text-lg nb-shadow"
            >
              <ArrowDownToLine size={22} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
