'use client';

import type { MouseEvent } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === 'light';

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        toggleTheme(x, y);
    };

    return (
        <button
            onClick={handleClick}
            className="relative w-12 h-6 rounded-full cursor-pointer transition-[background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40"
            style={{
                background: isLight ? '#ffffff' : '#000000',
                border: `1px solid ${isLight ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.35)'}`,
                boxShadow: isLight
                    ? 'inset 0 0 0 1px rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.12)'
                    : 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.45)',
            }}
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
            title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
        >
            <span
                className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform"
                style={{
                    transform: isLight ? 'translateX(0)' : 'translateX(24px)',
                    background: isLight ? '#000000' : '#ffffff',
                    boxShadow: isLight
                        ? '0 1px 3px rgba(0,0,0,0.35)'
                        : '0 1px 4px rgba(255,255,255,0.35)',
                }}
            />
        </button>
    );
}
