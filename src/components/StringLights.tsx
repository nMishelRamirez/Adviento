import { useMemo } from 'react';

interface Light {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  color: string;
}

const COLORS = ['#fbbf24', '#f87171', '#fcd34d', '#fca5a5', '#fde68a'];

export default function StringLights({ count = 28 }: { count?: number }) {
  const lights = useMemo<Light[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: (i / count) * 100,
      top: 4 + (i % 3) * 6,
      size: 8 + Math.random() * 6,
      delay: Math.random() * 3,
      color: COLORS[i % COLORS.length],
    }));
  }, [count]);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-2 h-px bg-christmas-gold-700/40" />
      {lights.map((l) => (
        <span
          key={l.id}
          className="absolute block rounded-full animate-twinkle"
          style={{
            left: `${l.left}%`,
            top: `${l.top}%`,
            width: `${l.size}px`,
            height: `${l.size}px`,
            backgroundColor: l.color,
            boxShadow: `0 0 8px ${l.color}, 0 0 14px ${l.color}`,
            animationDelay: `${l.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
