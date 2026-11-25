import { useCallback, useEffect, useState } from 'react';

export const ADV_YEAR = 2026;
export const ADV_MONTH = 11; // diciembre (0-index)
const STORAGE_PREFIX = 'advent2026:';
const OPENED_KEY = `${STORAGE_PREFIX}opened-v3`;

export function todayAdventInfo() {
  const now = new Date();
  const userToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dayOfMonth = userToday.getDate();
  const isAdventSeason =
    userToday.getFullYear() === ADV_YEAR && userToday.getMonth() === ADV_MONTH && dayOfMonth >= 1 && dayOfMonth <= 24;
  return { isAdventSeason, currentDay: isAdventSeason ? dayOfMonth : 0, today: userToday };
}

export function useAdventState() {
  const { isAdventSeason, currentDay } = todayAdventInfo();
  const [opened, setOpened] = useState<Set<number>>(() => {
    try {
      const raw = localStorage.getItem(OPENED_KEY);
      if (!raw) return new Set<number>();
      const arr = JSON.parse(raw) as number[];
      return new Set(arr);
    } catch {
      return new Set<number>();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(OPENED_KEY, JSON.stringify(Array.from(opened)));
    } catch {
      /* ignore */
    }
  }, [opened]);

  const isUnlocked = useCallback(
    (day: number) => isAdventSeason && day <= currentDay,
    [isAdventSeason, currentDay],
  );

  const openDay = useCallback((day: number) => {
    setOpened((prev) => {
      if (prev.has(day)) return prev;
      const next = new Set(prev);
      next.add(day);
      return next;
    });
  }, []);

  return {
    isAdventSeason,
    currentDay,
    opened,
    isUnlocked,
    openDay,
  };
}

export function clearAdventStorage() {
  try {
    localStorage.removeItem(OPENED_KEY);
    localStorage.removeItem(`${STORAGE_PREFIX}opened`);
  } catch {
    /* ignore */
  }
}

export const MUSIC_ENABLED_KEY = `${STORAGE_PREFIX}music`;
