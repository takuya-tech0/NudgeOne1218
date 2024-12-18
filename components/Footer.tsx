import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#7A91B4] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base">&copy; 2024 1 WEEK STAY BY NUDGE&apos; ONE. All rights reserved.</p>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <li><Link href="#" className="text-sm md:text-base hover:text-white/80 transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="#" className="text-sm md:text-base hover:text-white/80 transition-colors">利用規約</Link></li>
              <li><Link href="#" className="text-sm md:text-base hover:text-white/80 transition-colors">お問い合わせ</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

