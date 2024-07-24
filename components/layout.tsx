import { Roboto } from "next/font/google"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
 
const fontSans = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Layout({ children }) {
  return (
    <>
      <main
        className={cn(
"min-h-screen antialiased",
          // fontSans.variable
          fontInter.variable
        )}
      >
        {children}
      </main>
    </>
  )
}