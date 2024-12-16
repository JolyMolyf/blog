import "./globals.scss";
import { Reveal } from "./components/animation/Reveal";
import Menubar from "./components/common/menubar/Menubar";
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
        <Reveal direction="bottom">
            <Menubar/>
        </Reveal>
        {children}
        <SpeedInsights/>
        </body>
    </html>
  )
}
