import { Globe } from 'lucide-react'

export default function Header() {
  return (
    <header className="z-50 bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xs sm:text-sm text-black">
          <span className="block tracking-wider">Nudge&apos;one for 1week stay</span>
        </h1>
        <button className="text-black flex items-center gap-1 text-xs sm:text-sm">
          <span>JP</span>
          <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>
    </header>
  )
}
