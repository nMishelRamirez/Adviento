# Project memory

## Product intent & audience

- Digital Advent calendar gift for the user's boyfriend, romantic/Christmas-themed.
- Relationship: 7 years together, met in catechism class; shared memories include beach trips and Baños de Agua Santa (hot springs).
- 24 interactive boxes, one unlocks per day (Dec 1–24, 2026), based on the real date.
- Three special moments:
  1. **Welcome** — personal dedication screen before entering.
  2. **24 days** — calendar grid; each box unlocks by date; locked boxes show a lock icon.
  3. **Grand finale** — opening box 24 reveals a memory gallery and an emotional closing letter.
- Includes a "preview mode" toggle so the user can review all boxes before gifting.
- Floating music player (bottom-right) plays a romantic song; user supplies `public/song.mp3`.

## Brand personality & voice

- Warm, romantic, intimate, Christmas-spirited.
- Spanish-language UI and content throughout.
- Pre-written letters/messages included as editable placeholders so the user can personalize.

## Visual design & UX direction

- Aesthetic: Christmas romantic — deep red, bright gold, falling snow, blinking/flickering lights, elegant typography.
- Ambient components: snowfall animation, light effects.
- Box states: locked (lock icon) vs unlocked; numbered 1–24 in a grid layout.
- Content modal supports: photos with messages, photos together, early-relationship/catechism photos, beach trips, Baños de Agua Santa photos, selfies, romantic letters, videos, audios, secret messages (reveal on tap), games/challenges (quiz, truth or dare, guess-the-memory), and date coupons.
- Grand finale: memory gallery + closing letter layout.
- Music player: fixed bottom-right, unobtrusive floating control.

## Decisions, constraints & rationale

- Tech stack: Vite + React, JSX, Tailwind CSS, Lucide React icons, `@/` path alias (`@/` → `src/`).
- No extra UI/icon packages installed unless explicitly requested.
- Unlock logic driven by real date (Dec 2026); preview mode bypasses for review.
- User must supply their own media: photos, videos, audios in the appropriate slots, and `song.mp3` in `public/`.
- Build compiles without errors.

## Open questions & assumptions

- Exact unlock date logic uses device local time; assumes recipient opens it during Dec 2026.
- Media files are placeholders; user hasn't yet provided specific photos/videos/audio.
- The romantic song choice is left to the user.
- Pre-written letter/message texts are assumed to be editable by the user before final delivery.