"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        <Link href="/" className="text-[#353336] hover:text-[#bf5925] transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-[#353336] hover:text-[#bf5925] transition-colors">
          About
        </Link>
        <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors">
          Blog
        </Link>
        <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors">
          Stories
        </Link>
        <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors">
          Store
        </Link>
        <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors">
          Community
        </Link>
        <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors">
          FAQ
        </Link>
        <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors">
          Contact
        </Link>
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
            <Link href="/" className="text-[#353336] hover:text-[#bf5925] transition-colors py-2">
              Home
            </Link>
            <Link href="/about" className="text-[#353336] hover:text-[#bf5925] transition-colors py-2">
              About
            </Link>
            <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors py-2">
              Blog
            </Link>
            <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors py-2">
              Stories
            </Link>
            <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors py-2">
              Store
            </Link>
            <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors py-2">
              Community
            </Link>
            <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors py-2">
              FAQ
            </Link>
            <Link href="#" className="text-[#353336] hover:text-[#bf5925] transition-colors py-2">
              Contact
            </Link>
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
