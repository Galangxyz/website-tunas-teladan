'use client';

import { useEffect, useState } from 'react';
import type { StatsCounts } from '@/types';

const TARGET_COUNTS: StatsCounts = {
  siswa: 1500,
  guru: 120,
  prestasi: 35,
  ruang: 40,
};

export function useStatsCounter(loading: boolean) {
  const [counts, setCounts] = useState<StatsCounts>({
    siswa: 0,
    guru: 0,
    prestasi: 0,
    ruang: 0,
  });

  useEffect(() => {
    if (loading) return;

    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        siswa: Math.min(Math.round((TARGET_COUNTS.siswa / steps) * step), TARGET_COUNTS.siswa),
        guru: Math.min(Math.round((TARGET_COUNTS.guru / steps) * step), TARGET_COUNTS.guru),
        prestasi: Math.min(
          Math.round((TARGET_COUNTS.prestasi / steps) * step),
          TARGET_COUNTS.prestasi
        ),
        ruang: Math.min(Math.round((TARGET_COUNTS.ruang / steps) * step), TARGET_COUNTS.ruang),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [loading]);

  return counts;
}
