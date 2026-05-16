import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Farmer Friendly Website",
    tag: "Agri-Tech",
    desc: "A simple, mobile-first portal that connects farmers with weather, crop prices, and government schemes.",
    stack: ["HTML", "CSS", "JS", "SQL"],
    img: "https://static.prod-images.emergentagent.com/jobs/7f387892-8abf-4e59-973c-221c64b94377/images/224a1f32742511e1b816882c57b0cb855533af25dec798b3024d5cbb107fa656.png",
    color: "#A7F3D0",
  },
  {
    title: "Police Case Record System",
    tag: "Civic-Tech",
    desc: "An internal tool to digitize and search case records — fast filters, role-based access, and clean reports.",
    stack: ["JS", "SQL", "PHP"],
    img: "https://static.prod-images.emergentagent.com/jobs/7f387892-8abf-4e59-973c-221c64b94377/images/fbfd51af5c502d068650ecd36ca3ce364ef2fa06f0b3b90286b9ffb438ac512f.png",
    color: "#BAE6FD",
  },
  {
    title: "Car Rental Website",
    tag: "E-Commerce",
    desc: "A booking flow with date picker, vehicle catalog, and instant quote — designed to feel friendly, not pushy.",
    stack: ["HTML", "CSS", "JS"],
    img: "https://static.prod-images.emergentagent.com/jobs/7f387892-8abf-4e59-973c-221c64b94377/images/08baf9cb63ed9fe32f2031097ecd5e85f0a1a0af569bca53403bab792a3418e2.png",
    color: "#FDE047",
  },
  {
    title: "Crop Disease Identification",
    tag: "Applied AI",
    desc: "Upload a leaf photo, get a probable disease and treatment tips — built on a lightweight ML model.",
    stack: ["Python", "TF", "Web"],
    img: "https://static.prod-images.emergentagent.com/jobs/7f387892-8abf-4e59-973c-221c64b94377/images/e00c81ca2b263cd45cac70a83d2ea601f418de89e340416117064ef20e389c53.png",
    color: "#FBCFE8",
  },
];

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] bg-black text-[#FDE047] px-3 py-1">
              03 — Projects
            </span>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tight mt-5">
              Things I've built
            </h2>
          </div>
          <p className="md:max-w-md text-[#27272A] text-lg">
            Four hand-picked builds — each solving a small real-world problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              data-testid={`project-card-${i}`}
              className="bg-white border-4 border-black nb-shadow overflow-hidden flex flex-col"
            >
              <div
                className="aspect-[16/10] overflow-hidden border-b-4 border-black"
                style={{ backgroundColor: p.color }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] bg-black text-white px-2 py-1">
                    {p.tag}
                  </span>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-[0.15em] border-2 border-black px-2 py-0.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-display font-black uppercase text-2xl md:text-3xl mt-4 leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-[#27272A] text-base md:text-lg">{p.desc}</p>
                <div className="mt-5 pt-5 border-t-2 border-dashed border-black flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">
                    Case Study
                  </span>
                  <a
                    href="https://github.com/Huzaif005"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-link-${i}`}
                    className="inline-flex items-center gap-1 font-display font-bold uppercase text-sm hover:text-[#27272A]"
                  >
                    View <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
