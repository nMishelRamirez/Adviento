import { FINAL_LETTER, type DayContent } from '@/data/adventContent';
import { Heart, Sparkles, X, ImageIcon, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import { useRef } from 'react';

interface Props {
  onClose: () => void;
  days: DayContent[];
}

const extraPhotos = [
  ...Array.from({ length: 39 }, (_, i) => `/Galeria-${i + 1}.jpg`),
  '/Galeria-40.png',
  '/Galeria-41.jpg',
  '/Galeria-42.png',
];
const finaleVideos = ['/video-galeria1.mp4', '/video-galeria2.mp4', '/video-dia-14.mp4'];

export default function GrandFinale({ onClose }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const videosCarouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0d0303] animate-fadeIn" onClick={onClose}>
      <div className="pointer-events-none fixed inset-x-0 top-0 h-24 bg-gradient-to-b from-christmas-red-950/80 to-transparent" />
      <button
        onClick={onClose}
        className="fixed right-4 top-4 z-50 rounded-full bg-christmas-red-900/70 p-2.5 text-christmas-cream/70 transition hover:bg-christmas-red-800 hover:text-christmas-gold-300"
        aria-label="Cerrar el gran final"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mx-auto max-w-3xl px-6 py-20 text-center" onClick={(e) => e.stopPropagation()}>
        <div className="animate-fadeInUp">
          <Sparkles className="mx-auto h-10 w-10 text-christmas-gold-400 animate-twinkle" />
          <h2 className="mt-4 font-script text-5xl text-gold-static sm:text-6xl">El gran final</h2>
          <p className="mt-3 text-sm tracking-wide text-christmas-cream/60">
            Una galería de recuerdos y una carta que cierra este adviento
          </p>
          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-christmas-gold-500 to-transparent" />
        </div>

        {/* Galería */}
        <section className="mt-12 text-left">
          <h3 className="mb-5 flex items-center gap-2 font-serif text-2xl text-christmas-gold-300"><ImageIcon className="h-5 w-5" /> Nuestra galeria</h3>
          <div className="mb-3 flex justify-end gap-2">
            <button type="button" onClick={() => carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })} className="rounded-full border border-christmas-gold-500/30 p-2 text-christmas-gold-300 hover:bg-christmas-gold-500/10" aria-label="Fotos anteriores"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" onClick={() => carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })} className="rounded-full border border-christmas-gold-500/30 p-2 text-christmas-gold-300 hover:bg-christmas-gold-500/10" aria-label="Fotos siguientes"><ChevronRight className="h-5 w-5" /></button>
          </div>
          <div ref={carouselRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin]">
            {extraPhotos.map((src, i) => <figure key={src} className="w-44 shrink-0 snap-start overflow-hidden rounded-xl border border-christmas-gold-700/30 bg-christmas-red-950/50 sm:w-56"><img src={src} alt={`Recuerdo ${i + 1}`} loading="lazy" className="aspect-[4/5] w-full object-cover" /><figcaption className="px-3 py-2 text-center text-xs text-christmas-cream/65">Recuerdo {i + 1}</figcaption></figure>)}
          </div>
          <p className="mt-4 text-center text-xs text-christmas-cream/40">Desliza las fotos para recorrer todos nuestros recuerdos.</p>
        </section>

        <section className="mt-12 text-left">
          <h3 className="mb-5 flex items-center gap-2 font-serif text-2xl text-christmas-gold-300"><Video className="h-5 w-5" /> Un video para recordar</h3>
          <div className="mb-3 flex justify-end gap-2">
            <button type="button" onClick={() => videosCarouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })} className="rounded-full border border-christmas-gold-500/30 p-2 text-christmas-gold-300 hover:bg-christmas-gold-500/10" aria-label="Videos anteriores"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" onClick={() => videosCarouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })} className="rounded-full border border-christmas-gold-500/30 p-2 text-christmas-gold-300 hover:bg-christmas-gold-500/10" aria-label="Videos siguientes"><ChevronRight className="h-5 w-5" /></button>
          </div>
          <div ref={videosCarouselRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin]">
            {finaleVideos.map((src, index) => (
              <figure key={src} className="w-64 shrink-0 snap-start overflow-hidden rounded-xl border border-christmas-gold-700/30 bg-christmas-red-950/50 sm:w-80">
                <video src={src} controls playsInline preload="metadata" className="aspect-video w-full bg-black object-contain" aria-label={`Video de recuerdos ${index + 1}`} />
                <figcaption className="px-3 py-2 text-center text-xs text-christmas-cream/65">Recuerdo en video {index + 1}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-christmas-cream/40">Desliza para ver los tres videos.</p>
        </section>
        {/* Carta final */}
        <section className="mt-14 text-left">
          <h3 className="mb-5 flex items-center gap-2 font-serif text-2xl text-christmas-gold-300">
            <Heart className="h-5 w-5" fill="currentColor" /> La carta que cierra
          </h3>
          <div className="relative rounded-2xl border border-christmas-gold-500/30 bg-christmas-cream/95 p-7 text-christmas-red-900 shadow-2xl sm:p-10">
            <div className="absolute -top-3 left-6 rounded-full bg-christmas-gold-500 px-2 py-0.5 text-[10px] uppercase tracking-widest text-christmas-red-900">
              Carta final
            </div>
            <div className="space-y-4 font-serif text-lg leading-relaxed">
              {FINAL_LETTER.split('\n\n').map((p, i) => (
                <p key={i} className={i === FINAL_LETTER.split('\n\n').length - 1 ? 'text-right font-script text-2xl text-christmas-red-700' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-14 flex flex-col items-center gap-3">
          <Heart className="h-6 w-6 animate-heartbeat text-christmas-gold-400" fill="currentColor" />
          <p className="font-script text-3xl text-gold-static">Feliz Navidad, mi vida</p>
          <p className="text-xs text-christmas-cream/40">Aquí no termina nada. Esto apenas empieza.</p>
        </div>
      </div>
    </div>
  );
}
