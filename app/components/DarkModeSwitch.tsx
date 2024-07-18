// app/components/DarkModeSwitch.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeSwitch: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 transition-transform duration-300 hover:scale-110"
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
            }}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
};

export default DarkModeSwitch;