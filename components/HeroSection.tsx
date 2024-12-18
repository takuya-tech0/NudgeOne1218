import Image from 'next/image'
import { Globe } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center">
        <h1 className="text-sm text-white font-noto-sans">
          HOTEL KEIHAN<br />
          ホテル京阪 なんば グランデ
        </h1>
        <button className="text-white flex items-center gap-1 text-sm">
          <Globe className="w-4 h-4" />
          JP
        </button>
      </div>

      {/* Background Image */}
      <Image
        src="/Nudgeone_1.webp?height=1080&width=1920"
        alt="ホテル京阪なんばグランデのロビー"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-90 sepia-[.15]"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 z-10">
        <p className="text-white text-lg mb-4 tracking-wider font-shippori">
          緑あふれる風景に溶け込む
        </p>
        <h2 className="text-white text-[12vw] leading-none tracking-wide font-prata whitespace-nowrap mb-8">
          MY FAVORITE
        </h2>
        <div className="flex flex-col items-center gap-2 font-noto-sans absolute bottom-16">
          <p className="inline-block">
            <span className="bg-white/90 px-3 py-1">リラックスできるOFFの時間も</span>
          </p>
          <p className="inline-block">
            <span className="bg-white/90 px-3 py-1">活動時間のONの時間も、ここで過ごす。</span>
          </p>
        </div>
      </div>

    </div>
  )
}

