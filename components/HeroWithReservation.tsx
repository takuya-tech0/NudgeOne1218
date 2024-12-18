'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Header from './Header'
import Link from 'next/link'

export default function HeroWithReservation() {
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)

  const handleGuestsChange = () => {
    setGuests(prev => prev === 4 ? 1 : prev + 1)
  }

  const handleRoomsChange = () => {
    setRooms(prev => prev === 3 ? 1 : prev + 1)
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      
      {/* Top Section with Hotel Lobby Image */}
      <div className="relative h-[60vh] sm:h-[75vh] sm:mt-0">
        <Image
          src="/Nudgeone_1.webp?height=1080&width=1920"
          alt="ホテル京阪なんばグランデのロビー"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-90"
        />

        {/* Text Overlay Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 sm:pb-24">
          {/* Main Content */}
          <div className="text-center mb-4 sm:mb-12">
            <h2 className="text-white text-[12vw] sm:text-[16vw] leading-none tracking-wide whitespace-nowrap">
            Nudgeone
            <br/>for 1week stay
            </h2>
          </div>

          {/* Bottom Messages */}
          <div className="flex flex-col items-center gap-1 sm:gap-2">
            <p className="inline-block text-xs sm:text-base">
              <span className="bg-white/90 px-2 py-1 sm:px-3">リラックスできるOFFの時間も</span>
            </p>
            <p className="inline-block text-xs sm:text-base">
              <span className="bg-white/90 px-2 py-1 sm:px-3">活動時間のONの時間も、ここで過ごす。</span>
            </p>
            <p className="inline-block text-xs sm:text-base">
              <span className="bg-white/90 px-2 py-1 sm:px-3">自然体で過ごせる新しい自分だけの場所。</span>
            </p>
          </div>
        </div>
      </div>

      {/* Reservation Form Section */}
      <div className="relative bg-gradient-to-b from-[#e6e9e9] to-[#d8dfdf] py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-md mx-auto bg-[#F0F4F8] shadow-lg">
            <div className="flex flex-col sm:flex-row">
              <button className="flex-1 bg-[#7A91B4] text-white py-3 px-4 text-center hover:bg-[#6A81A4] transition-colors">
                ご宿泊予約
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 bg-white">
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-1">チェックイン</p>
                  <div className="border-b border-[#7A91B4] pb-1">
                    <p className="text-lg sm:text-xl">2024/12/18</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-1">人数/1室</p>
                    <div 
                      className="border-b border-[#7A91B4] pb-1 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={handleGuestsChange}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleGuestsChange()}
                    >
                      <span className="text-lg sm:text-xl">{guests}</span>
                      <span className="text-sm">人</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm mb-1">部屋数</p>
                    <div 
                      className="border-b border-[#7A91B4] pb-1 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={handleRoomsChange}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleRoomsChange()}
                    >
                      <span className="text-lg sm:text-xl">{rooms}</span>
                      <span className="text-sm">部屋</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              <Link 
                href="https://tech0-gen-8-step32-sembaapp-frontend-dchwc4cpbzbeczd6.westindia-01.azurewebsites.net/" 
                className="block w-full bg-[#7A91B4] text-white py-3 text-center hover:bg-[#6A81A4] transition-colors"
              >
                検索
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

