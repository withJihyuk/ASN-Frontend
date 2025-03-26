"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState("en")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for the progress bar
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Check if page is scrolled for navbar opacity
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ko" : "en")
  }

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div className="h-full bg-blue-4  00" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/10 backdrop-blur-lg shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              JihyukLab
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">
              Contact
            </Link>

            <div className="flex items-center ml-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={language === "en" ? "Switch to Korean" : "Switch to English"}
              >
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </nav>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
              <div className="flex flex-col p-4">
                <Link href="/" className="py-2 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="py-2 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link
                  href="/services"
                  className="py-2 hover:text-blue-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link href="/brands" className="py-2 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                  Brands
                </Link>
                <Link href="/contact" className="py-2 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>

                <div className="flex items-center mt-4">
                  <button onClick={toggleLanguage} className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>{language === "en" ? "Switch to Korean" : "Switch to English"}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}

