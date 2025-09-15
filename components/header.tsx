"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/stories", label: "Stories" },
    { href: "/store", label: "Store" },
    { href: "/community", label: "Community" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="relative flex items-center justify-between px-12 py-4 z-60">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="HIT Logo"
            width={200}
            height={120}
            className="object-contain"
          />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors ${isActive(link.href)
              ? "text-[#bf5925] font-medium"
              : "text-[#353336] hover:text-[#bf5925]"
              }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Button
          variant="outline"
          className="border-[#bf5925] text-[#bf5925] hover:bg-[#bf5925] hover:text-white rounded-full px-6 bg-white"
        >
          Collaborate
        </Button>
        <Button className="bg-[#bf5925] hover:bg-[#bf5925]/90 text-white rounded-full px-6">Donate</Button>
      </div>

      <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className="w-6 h-6 text-[#353336]" /> : <Menu className="w-6 h-6 text-[#353336]" />}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#fff3ea] border-t border-[#bf5925]/20 md:hidden z-50 shadow-lg">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 transition-colors ${isActive(link.href)
                  ? "text-[#bf5925] font-medium"
                  : "text-[#353336] hover:text-[#bf5925]"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#bf5925]/20">
              <Button
                variant="outline"
                className="border-[#bf5925] text-[#bf5925] hover:bg-[#bf5925] hover:text-white rounded-full px-6 bg-white"
              >
                Collaborate
              </Button>
              <Button className="bg-[#bf5925] hover:bg-[#bf5925]/90 text-white rounded-full px-6">Donate</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}