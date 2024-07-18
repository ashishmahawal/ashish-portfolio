// app/layout.tsx
import { MyThemeProvider } from './theme/theme';
import './styles/globals.css';

export const metadata = {
  title: "Ashish Mahawal's Portfolio",
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MyThemeProvider>
          {children}
        </MyThemeProvider>
      </body>
    </html>
  );
}