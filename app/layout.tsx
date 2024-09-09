// app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import dynamic from 'next/dynamic';

// Importação dinâmica dos componentes com ssr: false para evitar a renderização no lado do servidor
const ThemeToggle = dynamic(() => import('./components/ThemeToggle'), { ssr: false });
const Sidebar = dynamic(() => import('./components/Sidebar'), { ssr: false });

// Definição das fontes locais com variáveis CSS
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Metadados da aplicação
export const metadata: Metadata = {
  title: 'My Weather App',
  description: 'Weather forecasting application',
};

// Layout principal da aplicação
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
              <h1 className="text-xl font-bold">My Weather App</h1>
              <ThemeToggle />
            </header>
            <main className="p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}