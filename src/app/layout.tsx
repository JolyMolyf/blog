import "./globals.scss";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Joly.tech',
  description: 'Portfolio Vsevolod Doroshenko Joly.tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights/>
        </body>
    </html>
  )
}
