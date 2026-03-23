'use client';

import { useEffect, useState } from 'react';

const START_DATE = new Date('2020-05-01T00:00:00+05:30');
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

export default function AgeCounter() {
    const [years, setYears] = useState<number | null>(null);

    useEffect(() => {
        const updateYears = () => {
            const now = new Date();
            const yearsOfExperience = (now.getTime() - START_DATE.getTime()) / MS_PER_YEAR;
            setYears(yearsOfExperience);
        };

        updateYears();
        const interval = setInterval(updateYears, 60_000);
        return () => clearInterval(interval);
    }, []);

    if (years === null) return null;

    return (
        <p className="text-theme-badge-text text-sm font-mono">
            <span className="text-theme-muted">~ </span>
            {years.toFixed(2)}
            <span className="text-theme-muted ml-1">years building products</span>
        </p>
    );
}
