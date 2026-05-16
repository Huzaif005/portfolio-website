import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! I'll get back to you soon.");
      setForm(initial);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="border-b-4 border-black bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left col */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] bg-black text-[#FDE047] px-3 py-1">
              05 — Contact
            </span>
            <h2 className="font-display font-black uppercase text-4xl md:text-6xl tracking-tight mt-5 leading-[0.95]">
              Let's
              <br />
              <span className="bg-[#FBCFE8] border-4 border-black px-2 inline-block -rotate-1 mt-2">
                talk.
              </span>
            </h2>
            <p className="mt-5 text-lg text-[#27272A] max-w-md">
              Got a project, an internship, or just want to say hi? Drop a message and I'll reply.
            </p>

            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href="mailto:huzefpatel75@gmail.com"
                  data-testid="contact-email-link"
                  className="flex items-center gap-3 border-2 border-black bg-white px-4 py-3 nb-shadow-sm"
                >
                  <Mail size={18} />
                  <span className="font-mono text-sm">huzefpatel75@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Huzaif005"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-github-link"
                  className="flex items-center gap-3 border-2 border-black bg-white px-4 py-3 nb-shadow-sm"
                >
                  <Github size={18} />
                  <span className="font-mono text-sm">github.com/Huzaif005</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-huzaif-patel-046984357"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin-link"
                  className="flex items-center gap-3 border-2 border-black bg-white px-4 py-3 nb-shadow-sm"
                >
                  <Linkedin size={18} />
                  <span className="font-mono text-sm">linkedin.com/in/md-huzaif-patel</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Right col - form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="lg:col-span-7 bg-white border-4 border-black p-6 md:p-10 nb-shadow-static"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="font-mono text-xs uppercase tracking-[0.2em] block mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  type="text"
                  required
                  placeholder="Your name"
                  data-testid="contact-input-name"
                  className="w-full bg-white border-4 border-black p-3 md:p-4 text-base md:text-lg focus:outline-none focus:bg-[#FDE047]/30"
                />
              </div>
              <div>
                <label className="font-mono text-xs uppercase tracking-[0.2em] block mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  type="email"
                  required
                  placeholder="you@email.com"
                  data-testid="contact-input-email"
                  className="w-full bg-white border-4 border-black p-3 md:p-4 text-base md:text-lg focus:outline-none focus:bg-[#FDE047]/30"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="font-mono text-xs uppercase tracking-[0.2em] block mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                placeholder="Tell me what you're working on..."
                data-testid="contact-input-message"
                className="w-full bg-white border-4 border-black p-3 md:p-4 text-base md:text-lg focus:outline-none focus:bg-[#FDE047]/30 resize-none"
              />
            </div>

            <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#27272A]">
                I usually reply within 48h.
              </p>
              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit-btn"
                className="inline-flex items-center gap-2 bg-[#BAE6FD] hover:bg-black hover:text-[#FDE047] border-4 border-black px-7 py-4 font-display font-black uppercase nb-shadow disabled:opacity-60"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
