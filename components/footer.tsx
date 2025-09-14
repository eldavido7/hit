import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter Section */}
      <div className="px-6 py-12">
        <div className="max-w-[1536px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-cormorant  mb-2">Join Our Newsletter to</h2>
              <h2 className="text-3xl lg:text-4xl font-cormorant ">Keep Up to Date With Us!</h2>
            </div>
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                    <path
                      d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pl-12 pr-4 py-6 bg-[#2a2a2a] border-[#404040] text-white placeholder-gray-400 rounded-full"
                />
              </div>
              <Button className="bg-[#bf5925] hover:bg-[#bf5925]/90 text-white rounded-full px-8 py-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 py-12 border-t border-[#404040]">
        <div className="max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/logowhite.png"
                  alt="HIT Logo"
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h4 className="text-2xl font-cormorant  mb-4">Her Immigrant Tales</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                HIT celebrates immigrant women worldwide by sharing their stories, building community, and inspiring
                change
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.173 4.72C13.938 14.36 12.14 15 10.269 15c-1.104 0-2.173-.275-3.124-.8.159.019.32.029.48.029 1.735 0 3.331-.593 4.603-1.588-.162-.003-.32-.01-.48-.029-1.44-.097-2.674-1.029-3.092-2.473.225.043.456.066.692.066.336 0 .663-.045.973-.13C8.87 9.863 7.647 8.515 7.647 6.844v-.05c.5.278 1.07.445 1.677.464-.996-.665-1.65-1.801-1.65-3.09 0-.679.183-1.317.502-1.864C9.98 4.358 12.48 5.5 15.264 5.5c-.114-.487-.173-1.001-.173-1.52 0-2.027 1.643-3.67 3.67-3.67 1.056 0 2.009.446 2.678 1.16.835-.164 1.62-.469 2.328-.888-.274.857-.855 1.575-1.613 2.028.741-.088 1.448-.284 2.11-.574-.49.734-1.11 1.377-1.824 1.893z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.316 6.246c0-1.343.188-2.669.564-3.956C16.19 1.309 14.165.5 12 .5S7.81 1.309 6.12 2.29c.376 1.287.564 2.613.564 3.956 0 4.687-1.688 8.437-3.759 8.437v3.125c2.071 0 3.759 3.75 3.759 8.437 0 1.343-.188 2.669-.564 3.956C7.81 22.691 9.835 23.5 12 23.5s4.19-.809 5.88-1.79c-.376-1.287-.564-2.613-.564-3.956 0-4.687 1.688-8.437 3.759-8.437v-3.125c-2.071 0-3.759-3.75-3.759-8.437z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <h5 className="text-gray-400 font-medium mb-4">Explore</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-gray-300 hover:text-white transition-colors">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-gray-400 font-medium mb-4">Learn</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-gray-300 hover:text-white transition-colors">
                    Store
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-gray-400 font-medium mb-4">Get Involved</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Collaborate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Join Our Newsletter
                  </Link>
                </li>
              </ul>

              <h5 className="text-gray-400 font-medium mb-4 mt-8">Contact Info</h5>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="mailto:hello@herimmigranttales.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    hello@herimmigranttales.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:hello@herimmigranttales.org"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    hello@herimmigranttales.org
                  </Link>
                </li>
                <li>
                  <Link href="tel:+14378817400" className="text-gray-300 hover:text-white transition-colors">
                    +1 (437) 881-7400
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-6 py-6 border-t border-[#404040]">
        <div className="max-w-[1536px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Her Immigrant Tales Org. All rights reserved</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
