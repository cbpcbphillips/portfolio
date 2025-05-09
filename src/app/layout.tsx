import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import DarkModeToggle from '../components/DarkModeToggle'
import ThemeProvider from '../components/ThemeProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-lighter dark:bg-darker"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
