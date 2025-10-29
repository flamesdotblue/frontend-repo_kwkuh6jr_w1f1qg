import React from 'react';
import { Rocket, LineChart, Layout, Plug } from 'lucide-react';

const features = [
  {
    title: 'Instant Insight',
    desc: 'See your business performance in real time — no lag, no guessing.',
    Icon: LineChart,
  },
  {
    title: 'AI-Driven Predictions',
    desc: 'Forecast growth, detect patterns, and stay ahead with ML-powered analytics.',
    Icon: Rocket,
  },
  {
    title: 'Custom Dashboards',
    desc: 'Tailor your view: interactive charts, KPI widgets, and team-ready reports.',
    Icon: Layout,
  },
  {
    title: 'Seamless Integration',
    desc: 'Connect your data sources easily and get unified insight across platforms.',
    Icon: Plug,
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Features</h2>
          <p className="mt-3 text-white/70">
            Powerful tools designed to turn raw data into clear, confident decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
