'use client'

import Link from 'next/link'

export default function FixedNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-between items-stretch">
        <Link 
          href="https://tech0-gen-8-step32-sembaapp-frontend-dchwc4cpbzbeczd6.westindia-01.azurewebsites.net/" 
          className="flex items-center gap-3 bg-black/90 backdrop-blur-sm py-4 px-6 flex-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-white/80 tracking-wider">BOOKNOW</span>
            <span className="text-sm text-white tracking-wider">宿泊予約</span>
          </div>
        </Link>
        <Link 
          href="https://line.me/R/ti/p/@640dtdvt"
          className="flex items-center gap-3 bg-[#4A7C59] py-4 px-6 flex-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#A3C1AD]" />
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-[#D3E4CD] tracking-wider">LINE</span>
            <span className="text-sm text-[#D3E4CD] tracking-wider">友達登録</span>
          </div>
        </Link>
      </div>
    </div>
  )
}