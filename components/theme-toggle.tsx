'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);
  }, []);

  const toggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={toggle}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text transition hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
