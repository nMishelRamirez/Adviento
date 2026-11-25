import { Lock, Gift, Check } from 'lucide-react';
import { ACCENT_META, type DayContent } from '@/data/adventContent';

interface Props {
  day: DayContent;
  unlocked: boolean;
  opened: boolean;
  onClick: () => void;
  index: number;
}

export default function AdventDoor({ day, unlocked, opened, onClick, index }: Props) {
  const accent = ACCENT_META[day.accent];
  const disabled = !unlocked;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ animationDelay: `${index * 0.04}s` }}
      className={`card-tilt group relative aspect-square overflow-hidden rounded-xl border text-left animate-scaleIn ${
        disabled
          ? 'cursor-not-allowed border-christmas-gold-700/30 bg-christmas-red-950/60'
          : opened
            ? 'border-christmas-gold-500/60 bg-christmas-red-800/70 animate-glow'
            : 'border-christmas-gold-500/40 bg-christmas-red-800/70 hover:border-christmas-gold-400'
      }`}
      aria-label={`Casilla ${day.day}: ${day.title}`}
    >
      {/* Decoración de acento */}
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-20 ${disabled ? '' : 'group-hover:opacity-35 transition-opacity'}`}
        style={{
          backgroundImage: `linear-gradient(135deg, ${cssGradient(accent.gradient)})`,
        }}
      />

      {/* Número grande */}
      <div className="relative flex h-full flex-col items-center justify-center p-2">
        <span
          className={`font-serif text-4xl font-semibold leading-none sm:text-5xl ${
            disabled ? 'text-christmas-gold-700/50' : 'text-gold-static'
          }`}
        >
          {day.day}
        </span>
        <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-christmas-cream/50">
          {accent.emoji} dic
        </span>

        {/* Estado */}
        <div className="absolute right-2 top-2">
          {disabled ? (
            <Lock className="h-4 w-4 text-christmas-gold-700/60" />
          ) : opened ? (
            <Check className="h-4 w-4 text-christmas-gold-400" />
          ) : (
            <Gift className="h-4 w-4 text-christmas-gold-400 animate-pulse" />
          )}
        </div>

        {/* Mini etiqueta tipo contenido */}
        <span className="absolute bottom-2 left-2 right-2 truncate text-center text-[9px] uppercase tracking-wider text-christmas-cream/40">
          {typeLabel(day.type)}
        </span>
      </div>

      {/* Brillo al pasar */}
      {!disabled && (
        <div className="pointer-events-none absolute -inset-x-2 -top-10 h-10 rotate-12 bg-christmas-gold-300/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}
    </button>
  );
}

function typeLabel(type: DayContent['type']): string {
  switch (type) {
    case 'photo':
      return 'foto';
    case 'letter':
      return 'carta';
    case 'video':
      return 'video';
    case 'audio':
      return 'audio';
    case 'coupon':
      return 'cupón';
    case 'game':
      return 'juego';
    case 'secret':
      return 'secreto';
    case 'memory':
      return 'gran final';
  }
}

function cssGradient(tailwind: string): string {
  // tailwind classes are decorative-only; we map a few accent gradients to real colors
  const map: Record<string, string> = {
    playa: '#f97316, #ef4444',
    catecismo: '#fbbf24, #b91c1c',
    selfie: '#f472b6, #dc2626',
    'agua-santa': '#38bdf8, #2563eb',
    navidad: '#dc2626, #5b0f0f',
    viaje: '#34d399, #1b4332',
  };
  return map[tailwind] ?? '#7f1d1d, #b91c1c';
}
