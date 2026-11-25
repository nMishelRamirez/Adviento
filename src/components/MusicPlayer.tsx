import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { MUSIC_ENABLED_KEY } from '@/hooks/useAdventState';

interface Props {
  isWelcome?: boolean;
}

/**
 * Reproductor flotante de música romántica.
 * Reproduce la canción guardada en /public/audio.mp4.
 * Si el archivo no existe aún, el reproductor sigue visible pero muestra un avioncito
 * al hacer play, para que se sepa que hay que subir el archivo.
 */
export default function MusicPlayer({ isWelcome = false }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [available, setAvailable] = useState(true);
  const [playbackError, setPlaybackError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(MUSIC_ENABLED_KEY);
    if (stored === 'false') return;
    // No autostartamos: los navegadores bloquean audio sin interacción.
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
        localStorage.setItem(MUSIC_ENABLED_KEY, 'false');
      } else {
        await audio.play();
        setPlaying(true);
        localStorage.setItem(MUSIC_ENABLED_KEY, 'true');
      }
    } catch (error) {
      setAvailable(false);
      setPlaybackError(error instanceof DOMException && error.name === 'NotSupportedError'
        ? 'Formato de audio no compatible con este navegador'
        : 'No se pudo iniciar la reproducción');
    }
  };

  const handleAudioError = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    const code = event.currentTarget.error?.code;
    setAvailable(false);
    setPlaybackError(code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED || code === MediaError.MEDIA_ERR_DECODE
      ? 'Formato de audio no compatible con este navegador'
      : 'No se pudo cargar audio.mp4');
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <div className={`fixed right-4 z-40 flex items-center gap-2 rounded-full px-1 py-1.5 sm:right-10 sm:px-2 ${isWelcome ? 'top-5 border-0 bg-transparent text-welcome-red/70' : 'bottom-4 rounded-full border border-christmas-gold-500/40 bg-christmas-red-900/80 backdrop-blur-md'}`}>
      <audio
        ref={audioRef}
        loop
        preload="none"
        onError={handleAudioError}
        onCanPlay={() => { setAvailable(true); setPlaybackError(null); }}
      >
        <source src="/audio.mp4" type="audio/mp4" />
      </audio>
      <button
        onClick={toggle}
        className={`flex h-9 w-9 items-center justify-center rounded-full transition ${isWelcome ? 'bg-transparent text-welcome-red/70 hover:bg-welcome-red/10 hover:text-welcome-red' : 'bg-christmas-red-700 text-christmas-gold-300 hover:bg-christmas-red-600'}`}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
        title={available ? 'Nuestra canción' : playbackError ?? 'No se pudo cargar la canción'}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </button>
      <div className="hidden items-center gap-1.5 pr-1 sm:flex">
        <Music2 className="h-3.5 w-3.5 text-christmas-gold-400" />
        <span className={`text-[11px] tracking-wide ${isWelcome ? 'text-welcome-red/70' : 'text-christmas-cream/70'}`}>
          {available ? 'Nuestra canción' : playbackError ?? 'No se pudo cargar la canción'}
        </span>
      </div>
      <button
        onClick={toggleMute}
        className={`flex h-7 w-7 items-center justify-center rounded-full transition ${isWelcome ? 'text-welcome-red/60 hover:text-welcome-red' : 'text-christmas-cream/60 hover:text-christmas-gold-300'}`}
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
      >
        {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
}
