import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 px-6 md:px-[10vw]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-600 font-semibold mb-3">
            Let&apos;s connect
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-700">
            Contact Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
            Open to new projects, freelance work, and collaborations. Share your idea and I&apos;ll get back to you quickly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-[0_40px_80px_-45px_rgba(15,23,42,0.18)] transition-transform hover:-translate-y-1">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-slate-900">Email</p>
                  <a
                    href="mailto:pradeep2003kumar2003@gmail.com"
                    className="text-gray-600 text-sm md:text-base hover:text-emerald-700 transition break-all"
                  >
                    pradeep2003kumar2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-slate-900">Phone</p>
                  <a href="tel:+918058658515" className="text-gray-600 text-sm md:text-base hover:text-emerald-700 transition">
                    +91 80586 58515
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-lg text-slate-900">Location</p>
                  <p className="text-gray-600 text-sm md:text-base">Gujarat, India</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-slate-200">
                <a
                  href="https://github.com/CoderPradeep307028"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-sm font-semibold text-slate-900 transition hover:bg-emerald-50"
                >
                  View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pradeep-kumar-742b60252"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center text-sm font-semibold text-slate-900 transition hover:bg-emerald-50"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-emerald-700 p-8 text-white shadow-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_30%)]" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200 font-semibold mb-3">
                  Ready to talk?
                </p>
                <h3 className="text-3xl font-bold leading-tight">
                  Let&apos;s build something meaningful together.
                </h3>
                <p className="mt-4 text-sm text-emerald-100/90 leading-7">
                  I&apos;m available for new projects, internships, or collaboration on web applications. Reach out and let&apos;s discuss your next idea.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:pradeep2003kumar2003@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  Send an email
                </a>
                <a
                  href="tel:+918058658515"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  Call me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
