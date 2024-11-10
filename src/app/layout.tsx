import Menubar from "./components/common/menubar/Menubar";
import "./globals.scss";

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
        </body>
    </html>
  )
}
