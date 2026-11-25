import { useEffect, useState } from 'react';
import {
  X,
  Heart,
  /*Gift,*/
  KeyRound,
  Gamepad2,
  Ticket,
  ImageIcon,
  Video,
  Mic,
  Mail,
  Sparkles,
  RotateCcw,
  Check,
} from 'lucide-react';
import { ACCENT_META, type DayContent } from '@/data/adventContent';

interface Props {
  day: DayContent | null;
  onClose: () => void;
  onUnlockFinal: () => void;
}

export default function ContentModal({ day, onClose, onUnlockFinal }: Props) {
  useEffect(() => {
    if (!day) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [day, onClose]);

  if (!day) return null;
  const accent = ACCENT_META[day.accent];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-christmas-gold-500/30 bg-gradient-to-b from-christmas-red-900/95 to-christmas-red-950/95 shadow-2xl animate-scaleIn no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <StringLightsRow />

        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-christmas-red-950/70 p-2 text-christmas-cream/70 transition hover:bg-christmas-red-800 hover:text-christmas-gold-300"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative px-6 pt-10 pb-8 sm:px-8">
          <div className="mb-2 flex items-center gap-2 text-christmas-gold-400">
            {iconFor(day.type)}
            <span className="text-xs uppercase tracking-[0.3em]">Día {day.day} · {typeLabel(day.type)}</span>
          </div>

          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-serif text-6xl text-gold-static">{day.day}</span>
            <div>
              <h3 className="font-serif text-2xl text-christmas-cream">{day.title}</h3>
              <p className="text-xs text-christmas-cream/50">{accent.emoji} {accent.label}</p>
            </div>
          </div>

          <div className="gold-divider mb-5" />

          <DayBody day={day} onUnlockFinal={onUnlockFinal} />

          <div className="mt-8 flex items-center justify-center gap-2 text-christmas-gold-400/70">
            <Heart className="h-4 w-4" fill="currentColor" />
            <span className="text-xs tracking-wide">Con amor, para ti</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DayBody({ day, onUnlockFinal }: { day: DayContent; onUnlockFinal: () => void }) {
  if (day.type === 'photo' || day.type === 'video') {
    return <PhotoVideoBody day={day} />;
  }
  if (day.type === 'letter') {
    return <LetterBody message={day.message} />;
  }
  if (day.type === 'audio') {
    return <AudioBody day={day} />;
  }
  if (day.type === 'coupon') {
    return <CouponBody day={day} />;
  }
  if (day.type === 'secret') {
    return <SecretBody secret={day.secret ?? ''} hint={day.message} />;
  }
  if (day.type === 'game') {
    return <GameBody day={day} />;
  }
  if (day.type === 'memory') {
    return (
      <div className="space-y-4 text-center">
        <p className="font-serif text-lg leading-relaxed text-christmas-cream/90">{day.message}</p>
        <button
          onClick={onUnlockFinal}
          className="inline-flex items-center gap-2 rounded-full border border-christmas-gold-500/60 bg-christmas-red-700 px-6 py-3 text-sm text-christmas-gold-200 transition hover:bg-christmas-red-600 hover:shadow-[0_0_24px_rgba(245,197,66,0.35)]"
        >
          <Sparkles className="h-4 w-4" />
          Ver el gran final
        </button>
      </div>
    );
  }
  return null;
}

/* ---------- Cuerpos por tipo ---------- */

function PhotoVideoBody({ day }: { day: DayContent }) {
  const isVideo = day.type === 'video';
  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-christmas-gold-500/30 bg-christmas-red-950/60">
        {isVideo && day.video ? (
          <video src={day.video} controls playsInline className="h-full w-full object-contain" aria-label={day.photoCaption || `Video del día ${day.day}`} />
        ) : !isVideo && day.photo ? (
          <img src={day.photo} alt={day.photoCaption || `Foto del día ${day.day}`} className="h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
            {isVideo ? <Video className="h-10 w-10 text-christmas-gold-400/70" /> : <ImageIcon className="h-10 w-10 text-christmas-gold-400/70" />}
            <p className="max-w-xs text-xs leading-relaxed text-christmas-cream/50">
              {day.photoCaption}
            </p>
            <p className="rounded-full bg-christmas-gold-500/10 px-3 py-1 text-[10px] uppercase tracking-widest text-christmas-gold-400/70">
              Espacio para {isVideo ? 'tu video' : 'tu foto'}
            </p>
          </div>
        )}
      </div>
      <p className="font-serif text-base leading-relaxed text-christmas-cream/85">{day.message}</p>
    </div>
  );
}

function AudioBody({ day }: { day: DayContent }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center gap-3 rounded-xl border border-christmas-gold-500/30 bg-christmas-red-950/50 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-christmas-red-800/70 ring-1 ring-christmas-gold-500/40">
          <Mic className="h-7 w-7 text-christmas-gold-400" />
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-christmas-cream/50">{day.photoCaption}</p>
        <p className="rounded-full bg-christmas-gold-500/10 px-3 py-1 text-[10px] uppercase tracking-widest text-christmas-gold-400/70">
          Espacio para tu audio
        </p>
      </div>
      <p className="font-serif text-base leading-relaxed text-christmas-cream/85">{day.message}</p>
    </div>
  );
}

function LetterBody({ message }: { message: string }) {
  const paragraphs = message.split('\n\n');
  return (
    <div className="relative rounded-xl border border-christmas-gold-500/30 bg-christmas-cream/95 p-6 text-christmas-red-900 shadow-inner">
      <Mail className="absolute -top-3 left-5 h-6 w-6 rounded-full bg-christmas-gold-500 p-1 text-christmas-red-900" />
      <div className="space-y-3 font-serif text-lg leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i} className={i === paragraphs.length - 1 ? 'text-right font-script text-2xl text-christmas-red-700' : ''}>
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function CouponBody({ day }: { day: DayContent }) {
  const c = day.coupon;
  if (!c) return null;
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl border border-dashed border-christmas-gold-500/60 bg-gradient-to-br from-christmas-red-800 to-christmas-red-950 p-6 text-center">
        <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#1a0606]" />
        <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#1a0606]" />
        <div className="text-4xl">{c.emoji}</div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-christmas-gold-400">Cupón de amor</p>
        <h4 className="mt-2 font-serif text-2xl text-christmas-cream">{c.title}</h4>
        <p className="mt-2 text-sm text-christmas-cream/70">{c.description}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-christmas-gold-500/50 px-4 py-1.5 text-[10px] uppercase tracking-widest text-christmas-gold-300">
          <Ticket className="h-3 w-3" /> Válido por ese día
        </div>
      </div>
      <p className="font-serif text-base leading-relaxed text-christmas-cream/85">{day.message}</p>
    </div>
  );
}

function SecretBody({ secret, hint }: { secret: string; hint: string }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="space-y-4">
      <p className="text-sm text-christmas-cream/60">{hint}</p>
      <button
        onClick={() => setRevealed((v) => !v)}
        className="relative block w-full overflow-hidden rounded-xl border border-christmas-gold-500/40 bg-christmas-red-950/60 p-6 text-left transition"
      >
        <div className="mb-3 flex items-center gap-2 text-christmas-gold-400">
          <KeyRound className="h-4 w-4" />
          <span className="text-xs uppercase tracking-[0.3em]">Mensaje secreto</span>
        </div>
        <p
          className={`font-serif text-lg leading-relaxed transition-all duration-500 ${
            revealed ? 'text-christmas-cream' : 'select-none text-transparent blur-sm'
          }`}
        >
          {secret}
        </p>
        <div className="mt-3 text-xs text-christmas-gold-400/70">
          {revealed ? 'Toca para ocultar de nuevo' : 'Toca para revelar'}
        </div>
      </button>
    </div>
  );
}

function GameBody({ day }: { day: DayContent }) {
  const g = day.game;
  if (!g) return null;
  if (g.type === 'quiz') return <QuizGame day={day} />;
  return <PromptsGame day={day} />;
}

function QuizGame({ day }: { day: DayContent }) {
  const g = day.game!;
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const total = g.quiz?.length ?? 0;
  const correct = g.quiz?.filter((q, i) => answers[i] === q.answer).length ?? 0;

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-christmas-gold-400">
        <Gamepad2 className="h-4 w-4" />
        <span className="text-sm font-medium">{g.title}</span>
      </div>
      <p className="font-serif text-base leading-relaxed text-christmas-cream/85">{day.message}</p>

      {g.quiz?.map((q, i) => (
        <div key={i} className="rounded-lg border border-christmas-gold-700/30 bg-christmas-red-950/40 p-4">
          <p className="mb-3 font-serif text-base text-christmas-cream">
            {i + 1}. {q.q}
          </p>
          <div className="grid gap-2">
            {q.options.map((opt, j) => {
              const picked = answers[i] === j;
              const isCorrect = j === q.answer;
              const showState = submitted && picked;
              return (
                <button
                  key={j}
                  onClick={() => !submitted && setAnswers((p) => ({ ...p, [i]: j }))}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm transition ${
                    showState
                      ? isCorrect
                        ? 'border-emerald-400/60 bg-emerald-500/15 text-emerald-200'
                        : 'border-rose-400/60 bg-rose-500/15 text-rose-200'
                      : picked
                        ? 'border-christmas-gold-400 bg-christmas-gold-500/15 text-christmas-cream'
                        : 'border-christmas-gold-700/30 bg-christmas-red-900/40 text-christmas-cream/80 hover:border-christmas-gold-500/50'
                  }`}
                >
                  <span>{opt}</span>
                  {submitted && isCorrect && <Check className="h-4 w-4 text-emerald-300" />}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(answers).length < total}
          className="w-full rounded-full border border-christmas-gold-500/60 bg-christmas-red-700 py-3 text-sm text-christmas-gold-200 transition hover:bg-christmas-red-600 disabled:opacity-40"
        >
          Ver respuestas
        </button>
      ) : (
        <div className="rounded-lg border border-christmas-gold-500/40 bg-christmas-gold-500/10 p-4 text-center">
          <p className="font-serif text-xl text-christmas-gold-300">
            {correct} / {total} correctas
          </p>
          <p className="mt-1 text-sm text-christmas-cream/70">
            {correct === total
              ? '¡Me conoces de memoria! Como debe ser.'
              : '¡Casi! Pero lo importante es que me sigues eligiendo. 😊'}
          </p>
          <button
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-christmas-gold-400 hover:text-christmas-gold-300"
          >
            <RotateCcw className="h-3 w-3" /> Intentar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}

function PromptsGame({ day }: { day: DayContent }) {
  const g = day.game!;
  const [idx, setIdx] = useState(0);
  const prompt = g.prompts?.[idx];

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-christmas-gold-400">
        <Gamepad2 className="h-4 w-4" />
        <span className="text-sm font-medium">{g.title}</span>
      </div>
      <p className="font-serif text-base leading-relaxed text-christmas-cream/85">{day.message}</p>

      <div className="rounded-xl border border-christmas-gold-500/40 bg-christmas-red-950/50 p-6 text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-christmas-gold-400/70">
          {idx + 1} / {g.prompts?.length}
        </div>
        <p className="mt-3 min-h-[80px] font-serif text-xl leading-relaxed text-christmas-cream">
          {prompt}
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            onClick={() => setIdx((i) => (i - 1 + (g.prompts?.length ?? 0)) % (g.prompts?.length ?? 1))}
            className="rounded-full border border-christmas-gold-700/40 px-4 py-2 text-xs text-christmas-cream/70 hover:border-christmas-gold-400 hover:text-christmas-gold-200"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % (g.prompts?.length ?? 1))}
            className="rounded-full border border-christmas-gold-500/60 bg-christmas-red-700 px-4 py-2 text-xs text-christmas-gold-200 hover:bg-christmas-red-600"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function StringLightsRow() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-8 overflow-hidden">
      <div className="absolute inset-x-0 top-1 h-px bg-christmas-gold-700/40" />
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="absolute top-2 block h-1.5 w-1.5 rounded-full animate-twinkle"
          style={{
            left: `${(i / 18) * 100}%`,
            backgroundColor: ['#fbbf24', '#f87171', '#fcd34d'][i % 3],
            boxShadow: '0 0 6px #fbbf24',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function iconFor(type: DayContent['type']) {
  const cls = 'h-4 w-4';
  switch (type) {
    case 'photo':
      return <ImageIcon className={cls} />;
    case 'letter':
      return <Mail className={cls} />;
    case 'video':
      return <Video className={cls} />;
    case 'audio':
      return <Mic className={cls} />;
    case 'coupon':
      return <Ticket className={cls} />;
    case 'game':
      return <Gamepad2 className={cls} />;
    case 'secret':
      return <KeyRound className={cls} />;
    case 'memory':
      return <Sparkles className={cls} />;
  }
}

function typeLabel(type: DayContent['type']) {
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
