import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Noto_Sans_KR } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JihyukLab",
  description: "가장 진보한 네트워크 서비스를 제공합니다.",
  keywords: "IT services, digital transformation, infrastructure solutions, business support, technical support, 서버 호스팅, 호스팅, 마크서버, 마크 호스팅, 프록시, 터널링, 디도스 완화, 디도스",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${notoSansKR.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'