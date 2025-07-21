import type React from "react"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css"

const lexend = Lexend({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Minerva - Plataforma Educacional Inteligente",
  description:
    "Transforme sua metodologia de ensino com a Minerva. Crie provas personalizadas e gerencie notas com inteligência artificial.",
  icons: {
    icon: "/Minerva_brandmark_principal_azul_v1.svg",
  },
  openGraph: {
    title: "Minerva - Plataforma Educacional Inteligente",
    description:
      "Transforme sua metodologia de ensino com a Minerva. Crie provas personalizadas e gerencie notas com inteligência artificial.",
    url: "https://www.minerva.com",
    siteName: "Minerva",
    images: [
      {
        url: "/Minerva_brandmark_principal_azul_v1.svg",
        width: 1200,
        height: 630,
        alt: "Minerva - Plataforma Educacional Inteligente",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minerva - Plataforma Educacional Inteligente",
    description:
      "Transforme sua metodologia de ensino com a Minerva. Crie provas personalizadas e gerencie notas com inteligência artificial.",
    images: ["/Minerva_brandmark_principal_azul_v1.svg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
