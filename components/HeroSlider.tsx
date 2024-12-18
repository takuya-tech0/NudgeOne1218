'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/images/home/img_kv01-pc.jpg',
  '/images/home/img_kv02-pc.jpg',
  '/images/home/img_kv03-pc.jpg',
  '/images/home/img_kv04-pc.jpg',
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`ホテル京阪なんばグランデ ${index + 1}`}
          layout="fill"
          objectFit="cover"
          priority={index === 0}
          className={`transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
        {`0${currentSlide + 1} / 0${images.length}`}
      </div>
    </div>
  )
}

