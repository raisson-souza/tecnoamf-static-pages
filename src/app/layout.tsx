/* eslint-disable @typescript-eslint/no-explicit-any */
import "./globals.css"
import GlobalProvider from "@/providers/GlobalProvider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Template Frontend",
  applicationName: "Project Template Frontend",
  description: "Developed by Raisson Souza",
  authors: [{ name: "raisson", url: "https://github.com/raisson-souza" }],
  creator: "Raisson Souza",
}

type RootLayoutProps = {
  children: Readonly<React.ReactNode>
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        <GlobalProvider>
          {children as any}
        </GlobalProvider>
      </body>
    </html>
  )
}
