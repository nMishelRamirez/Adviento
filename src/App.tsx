import { useEffect, useState } from 'react';
import Snowfall from '@/components/Snowfall';
import StringLights from '@/components/StringLights';
import WelcomeScreen from '@/components/WelcomeScreen';
import CalendarScreen from '@/components/CalendarScreen';
import MusicPlayer from '@/components/MusicPlayer';

type Stage = 'welcome' | 'calendar';

export default function App() {
  const [stage, setStage] = useState<Stage>('welcome');

  useEffect(() => {
    try {
      const seen = localStorage.getItem('advent2026:seenWelcome');
      if (seen === 'true') setStage('calendar');
    } catch {
      /* ignore */
    }
  }, []);

  const enter = () => {
    try {
      localStorage.setItem('advent2026:seenWelcome', 'true');
    } catch {
      /* ignore */
    }
    setStage('calendar');
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${stage === 'welcome' ? 'bg-welcome-paper' : 'bg-warm-radial'}`}>
      {stage === 'calendar' && <Snowfall count={42} />}
      {stage === 'calendar' && <StringLights count={26} />}

      <div className="relative z-20">
        {stage === 'welcome' ? <WelcomeScreen onEnter={enter} /> : <CalendarScreen />}
      </div>

      {/* Niebla dorada inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-christmas-gold-900/10 to-transparent" />

      <MusicPlayer isWelcome={stage === 'welcome'} />
    </div>
  );
}
