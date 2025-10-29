import React from 'react';
import { motion } from 'framer-motion';

export default function FinalSection() {
  return (
    <section className="w-full bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Ready to unlock the power of your data?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-white/70"
        >
          Book a free demo, or log in to explore the dashboard now.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="#get-started"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/10 transition hover:opacity-90"
          >
            Get Started
          </a>
          <a
            href="#login"
            className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Login
          </a>
        </motion.div>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© 2025 BuyMore Analytix. All rights reserved.</p>
            <nav className="flex items-center gap-5 text-sm text-white/70">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
              <a href="#terms" className="hover:text-white">Terms of Service</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </section>
  );
}
