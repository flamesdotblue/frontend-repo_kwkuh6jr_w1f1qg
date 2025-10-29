import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/30 to-neutral-950" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36"
      >
        <motion.span variants={fadeUp} className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
          New • AI-powered analytics
        </motion.span>
        <motion.h1 variants={fadeUp} className="text-balance font-extrabold tracking-tight text-white [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl">
          Transform Your Data into Action
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          Real-time analytics, predictive insights, and data-driven decisions — all in one platform.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/10 transition hover:opacity-90"
          >
            Contact Us
          </a>
          <a
            href="#login"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Login to Dashboard
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
