import { useState } from 'react';
import { Calendar, Lock, Sparkles, Heart } from 'lucide-react';
import AdventDoor from './AdventDoor';
import ContentModal from './ContentModal';
import GrandFinale from './GrandFinale';
import { DAY_CONTENTS, type DayContent } from '@/data/adventContent';
import { useAdventState } from '@/hooks/useAdventState';

export default function CalendarScreen() {
  const { isAdventSeason, currentDay, opened, isUnlocked, openDay } =
    useAdventState();
  const [active, setActive] = useState<DayContent | null>(null);
  const [showFinal, setShowFinal] = useState(false);

  const openedCount = opened.size;
  const totalUnlocked = DAY_CONTENTS.filter((d) => isUnlocked(d.day)).length;

  const handleDoor = (day: DayContent) => {
    if (!isUnlocked(day.day)) return;
    openDay(day.day);
    setActive(day);
  };

  return (
    <div className="relative z-20 min-h-screen px-4 pb-20 pt-10 sm:px-6">
      {/* Encabezado */}
      <header className="mx-auto mb-10 max-w-4xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-christmas-gold-500/30 bg-christmas-red-900/50 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-christmas-gold-400">
          <Calendar className="h-3.5 w-3.5" /> Adviento 2026
        </div>
        <h1 className="font-script text-5xl text-gold-static sm:text-6xl">Nuestro Calendario</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-christmas-cream/60">
          Una casilla nueva cada día, del 1 al 24 de diciembre. Toca la de hoy para abrirla.
        </p>

        {/* Progreso */}
        <div className="mx-auto mt-6 max-w-md">
          <div className="flex items-center justify-between text-xs text-christmas-cream/60">
            <span>{openedCount} abiertas</span>
            <span>{totalUnlocked} desbloqueadas</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-christmas-red-950/60 ring-1 ring-christmas-gold-700/30">
            <div
              className="h-full rounded-full bg-gradient-to-r from-christmas-gold-500 to-christmas-red-500 transition-all duration-700"
              style={{ width: `${(openedCount / 24) * 100}%` }}
            />
          </div>
        </div>

        {/* Estado del día */}
        {isAdventSeason && (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-christmas-gold-500/15 px-3 py-1.5 text-christmas-gold-300">
              <Heart className="h-3 w-3" fill="currentColor" /> Hoy es {currentDay} de diciembre · casilla {currentDay} disponible
            </span>
          </div>
        )}
      </header>

      {/* Rejilla de 24 casillas */}
      <main className="mx-auto max-w-4xl">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-6">
          {DAY_CONTENTS.map((day, i) => (
            <AdventDoor
              key={day.day}
              day={day}
              index={i}
              unlocked={isUnlocked(day.day)}
              opened={opened.has(day.day)}
              onClick={() => handleDoor(day)}
            />
          ))}
        </div>

        {/* Leyenda */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-christmas-cream/40">
          <span className="inline-flex items-center gap-1.5"><Lock className="h-3 w-3" /> Bloqueada</span>
          <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3 w-3 text-christmas-gold-400" /> Disponible hoy</span>
          <span className="inline-flex items-center gap-1.5"><Heart className="h-3 w-3 text-christmas-gold-400" fill="currentColor" /> Ya abierta</span>
        </div>
      </main>

      <ContentModal
        day={active}
        onClose={() => setActive(null)}
        onUnlockFinal={() => {
          setActive(null);
          setShowFinal(true);
        }}
      />

      {showFinal && <GrandFinale days={DAY_CONTENTS} onClose={() => setShowFinal(false)} />}

    </div>
  );
}
