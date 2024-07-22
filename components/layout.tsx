import { Roboto as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export default function Layout({ children }) {
  return (
    <>
      <main
        className={cn(
"min-h-screen antialiased",
          // font-sans
          // fontSans.variable
        )}
      >
        {children}
      </main>
    </>
  )
}