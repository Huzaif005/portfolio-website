import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowDownToLine, Sparkles } from "lucide-react";

const PROFILE_IMG =
  "https://customer-assets.emergentagent.com/job_aspiring-dev-3/artifacts/x3xx4eqk_image.png";

export default function Hero() {
  return (
    <section id="home" data-testid="hero-section" className="relative border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border-2 border-black bg-[#A7F3D0] px-3 py-1.5 mb-6 nb-shadow-sm"
            >
              <Sparkles size={14} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              data-testid="hero-name"
              className="font-display font-black uppercase tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Ujepa
              <br />
              <span className="inline-block bg-[#FDE047] border-4 border-black px-3 py-1 mt-3 -rotate-1">
                Patel.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-sm md:text-base uppercase tracking-[0.25em] mt-6 text-[#27272A]"
            >
              ↳ Aspiring Developer · Builder of useful things
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl max-w-xl leading-relaxed text-[#27272A]"
            >
              I'm a curious developer crafting clean web experiences with HTML, CSS,
              JavaScript and a side of SQL. I love turning real-world problems into
              digital tools — from farms to police records.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                data-testid="hero-hire-btn"
                className="inline-flex items-center gap-2 bg-black text-[#FDE047] border-2 border-black px-6 py-3 font-display font-bold uppercase nb-shadow"
              >
                Hire Me →
              </a>
              <a
                href="/resume/resume.pdf"
                download
                data-testid="hero-download-resume"
                className="inline-flex items-center gap-2 bg-[#BAE6FD] border-2 border-black px-6 py-3 font-display font-bold uppercase nb-shadow"
              >
                <ArrowDownToLine size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right - polaroid profile */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, rotate: -6, y: 30 }}
              animate={{ opacity: 1, rotate: 3, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-sm"
            >
              <div className="bg-white border-4 border-black p-4 nb-shadow-lg">
                <div className="bg-[#FBCFE8] border-2 border-black aspect-[4/5] overflow-hidden">
                  <img
                    src={PROFILE_IMG}
                    alt="Ujepa Patel"
                    data-testid="hero-profile-img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between pt-4 px-1">
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">
                    ujepa.exe
                  </span>
                  <span className="font-mono text-xs">v1.0</span>
                </div>
              </div>

              {/* Sticky tags */}
              <div className="absolute -top-4 -left-6 bg-[#FDE047] border-2 border-black px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] -rotate-6 nb-shadow-sm">
                Hello!
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#A7F3D0] border-2 border-black px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] rotate-3 nb-shadow-sm">
                Code · Coffee · Repeat
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t-4 border-black bg-[#FDE047] py-5 overflow-hidden">
        <Marquee speed={60} gradient={false}>
          {[..."CREATIVE DEVELOPER ✦ PROBLEM SOLVER ✦ HTML · CSS · JS · SQL ✦ ASPIRING BUILDER ✦ ".repeat(2)].join("")}
        </Marquee>
      </div>
    </section>
  );
}
