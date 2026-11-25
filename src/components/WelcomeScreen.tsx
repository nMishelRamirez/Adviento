import { ArrowRight, Heart, LockKeyhole, Sparkles } from 'lucide-react';

interface Props {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: Props) {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 pb-12 pt-5 text-welcome-ink sm:px-10 lg:px-14">
      <header className="flex items-center justify-between border-b border-welcome-line pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-welcome-gold text-welcome-red">
            <Heart className="h-4 w-4" strokeWidth={1.4} />
          </span>
          <span className="font-serif text-xl italic text-welcome-red/85">Siempre nosotros.</span>
        </div>

        <p className="hidden text-[9px] font-semibold uppercase tracking-[0.35em] text-welcome-gold sm:block">
          Una Navidad · Nuestra historia
        </p>

        <div className="flex items-center gap-2 text-welcome-red/70">
          <span className="hidden text-[11px] sm:inline">...</span>
        </div>
      </header>

      <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-10">
        <div className="max-w-[540px] animate-fadeInUp">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-welcome-gold">
            <span className="h-px w-6 bg-welcome-gold" />
            Para ti, mi amor
          </div>

          <h1 className="max-w-[560px] font-serif text-[clamp(3.5rem,7vw,6.5rem)] font-normal leading-[0.82] tracking-[-0.05em] text-welcome-red">
            24 recuerdos
            <br />
            <em className="font-script text-[1.08em] font-normal tracking-[-0.02em]">una sola historia: la nuestra.</em>
          </h1>

          <p className="mt-9 max-w-[470px] font-serif text-[1.1rem] leading-[1.75] text-welcome-muted sm:text-[1.2rem]">
            Hace siete años coincidimos en el catecismo, te miré sin saber lo que sucedería despues. Desde entonces hemos sumado a la playa, a Baños y mil momentos sencillos, hemos escrito nuestra historia. Esta Navidad te regalo un recuerdo, una sonrisa y un poquito de mi corazón cada día. Cada casilla guarda un pedacito de nosotros. No es un regalo perfecto, pero es hecho con mucho amor.
          </p>

          <p className="mt-5 font-serif text-2xl italic text-welcome-red/85 sm:text-3xl">Con todo mi amor, Mishel</p>

          <div className="mt-8 flex flex-col items-start gap-4">
            <button
              onClick={onEnter}
              className="group inline-flex items-center gap-5 rounded-sm bg-welcome-red px-6 py-4 text-xs font-semibold text-white shadow-[0_12px_25px_rgba(116,31,49,0.18)] transition hover:-translate-y-0.5 hover:bg-welcome-red-dark hover:shadow-[0_16px_30px_rgba(116,31,49,0.25)]"
            >
              <span>Comenzar nuestra Navidad</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="flex items-center gap-2 text-[10px] text-welcome-muted/80">
              <LockKeyhole className="h-3 w-3" strokeWidth={1.5} />
              Una sorpresa cada día, del 1 al 24 de diciembre.
            </span>
          </div>
        </div>

        <EnvelopeIllustration />
      </section>
    </main>
  );
}

function EnvelopeIllustration() {
  return (
    <div className="relative flex min-h-[390px] items-center justify-center animate-fadeIn lg:min-h-[580px]">
      <div className="absolute left-[14%] top-[15%] h-1 w-1 rounded-full bg-welcome-gold/60 shadow-[90px_40px_0_0_rgba(185,143,88,0.45),170px_-10px_0_0_rgba(185,143,88,0.35),230px_120px_0_0_rgba(185,143,88,0.45),-35px_185px_0_0_rgba(185,143,88,0.25)]" />
      <div className="absolute bottom-[13%] left-[8%] h-28 w-1 -rotate-[22deg] rounded-full bg-welcome-pine/60" />
      <div className="absolute bottom-[12%] left-[9%] h-24 w-1 rotate-[28deg] rounded-full bg-welcome-pine/50" />
      <div className="absolute bottom-[14%] right-[8%] h-32 w-1 rotate-[26deg] rounded-full bg-welcome-pine/60" />
      <div className="absolute bottom-[13%] right-[9%] h-24 w-1 -rotate-[28deg] rounded-full bg-welcome-pine/50" />

      <div className="relative mt-8 h-[265px] w-[330px] rotate-[-6deg] sm:h-[320px] sm:w-[420px]">
        <div className="absolute left-[9%] top-[-9%] z-10 flex h-[49%] w-[78%] rotate-[-1deg] items-center justify-center border border-welcome-paper-dark bg-welcome-paper shadow-[0_16px_22px_rgba(88,58,35,0.12)]">
          <div className="absolute inset-0 border-[8px] border-transparent [background:linear-gradient(#fffaf1,#fffaf1)_padding-box,linear-gradient(90deg,transparent,rgba(185,143,88,.23),transparent)_border-box]" />
          <div className="relative text-center">
            <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-welcome-gold">Diciembre 2026</p>
            <p className="mt-3 font-script text-3xl leading-[0.9] text-welcome-red sm:text-4xl">Mi lugar favorito</p>
            <p className="font-script text-3xl leading-[0.9] text-welcome-red sm:text-4xl">siempre serás tú.</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 h-[67%] overflow-hidden border border-welcome-paper-dark bg-welcome-envelope shadow-[0_22px_35px_rgba(88,58,35,0.18)]">
          <div className="absolute inset-0 bg-[linear-gradient(32deg,transparent_49.5%,rgba(150,113,71,.25)_50%,transparent_50.5%),linear-gradient(148deg,transparent_49.5%,rgba(150,113,71,.2)_50%,transparent_50.5%)]" />
          <div className="absolute left-1/2 top-0 h-[72%] w-[78%] -translate-x-1/2 -translate-y-[38%] rotate-45 border border-welcome-paper-dark bg-welcome-envelope-light" />
          <div className="absolute bottom-[-37%] left-1/2 h-[76%] w-[80%] -translate-x-1/2 rotate-45 border border-welcome-paper-dark bg-welcome-envelope-light" />
        </div>

        <div className="absolute bottom-[24%] left-1/2 z-30 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-2 border-welcome-gold/80 bg-welcome-red shadow-[0_5px_12px_rgba(116,31,49,0.25)] sm:h-[68px] sm:w-[68px]">
          <Heart className="h-6 w-6 text-welcome-gold" strokeWidth={1.2} />
        </div>
      </div>

      <div className="absolute bottom-[5%] right-[7%] flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-welcome-gold sm:right-[10%]">
        <Sparkles className="h-3 w-3" /> Siete años · Infinitos recuerdos.
      </div>
    </div>
  );
}
