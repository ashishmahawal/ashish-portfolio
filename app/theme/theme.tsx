// app/theme/theme.tsx
'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface MyThemeProviderProps {
    children: ReactNode;
}

export function MyThemeProvider({ children }: MyThemeProviderProps) {
    return <ThemeProvider attribute="class">
        {children}
    </ThemeProvider>;
}