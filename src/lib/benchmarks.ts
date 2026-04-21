export const benchmarks = {
  Berlin: { totalPerSqm: 2.17, heatingPerSqm: 0.97 },
  München: { totalPerSqm: 2.30, heatingPerSqm: 1.05 },
  Hamburg: { totalPerSqm: 2.12, heatingPerSqm: 0.93 },
  Frankfurt: { totalPerSqm: 2.25, heatingPerSqm: 1.01 },
  Köln: { totalPerSqm: 2.15, heatingPerSqm: 0.96 },
  Stuttgart: { totalPerSqm: 2.20, heatingPerSqm: 0.99 },
  Düsseldorf: { totalPerSqm: 2.18, heatingPerSqm: 0.98 },
  Leipzig: { totalPerSqm: 1.95, heatingPerSqm: 0.88 },
  Dresden: { totalPerSqm: 1.98, heatingPerSqm: 0.89 },
  Nürnberg: { totalPerSqm: 2.10, heatingPerSqm: 0.94 },
  Bremen: { totalPerSqm: 2.05, heatingPerSqm: 0.92 },
  Hannover: { totalPerSqm: 2.08, heatingPerSqm: 0.93 },
  default: { totalPerSqm: 2.17, heatingPerSqm: 0.95 }
};

export type City = keyof typeof benchmarks;
