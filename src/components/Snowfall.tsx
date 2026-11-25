import { useMemo } from 'react';

const FLAKES = ['❄', '❅', '❆', '✦', '✧'];

interface Flake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
  drift: number;
}

export default function Snowfall({ count = 40 }: { count?: number }) {
  const flakes = useMemo<Flake[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 18,
      duration: 12 + Math.random() * 18,
      delay: -Math.random() * 25,
      symbol: FLAKES[Math.floor(Math.random() * FLAKES.length)],
      drift: (Math.random() - 0.5) * 60,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snowflake"
          style={{
            left: `${f.left}%`,
            fontSize: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            ['--drift' as string]: `${f.drift}px`,
            opacity: 0.7,
            color: '#fff',
            textShadow: '0 0 6px rgba(245,197,66,0.5)',
          }}
        >
          {f.symbol}
        </span>
      ))}
    </div>
  );
}
