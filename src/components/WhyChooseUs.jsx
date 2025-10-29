import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why businesses trust BuyMore Analytix</h2>
          <p className="mt-3 text-white/70">
            Built for speed, clarity, and scale — so anyone can make data-backed moves.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <ul className="list-disc space-y-3 pl-5 text-white/80">
              <li>Accelerate decision-making with actionable insights.</li>
              <li>Minimal setup, maximum impact — get started fast.</li>
              <li>Scalable for teams of any size — from startups to enterprises.</li>
              <li>Built for non-technical users: intuitive UI, clear metrics.</li>
            </ul>
          </div>

          <blockquote className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
            <p className="text-lg italic text-white/90">
              “With BuyMore Analytix, we cut our reporting time in half and spotted growth opportunities we hadn’t seen before.”
            </p>
            <footer className="mt-3 text-sm text-white/60">— Customer Name, Title</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
