//Users/takuya/Documents/nudgeone_dep/my-app/components/GallerySection.tsx
'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// 型定義を追加
interface GalleryImage {
  src: string
  alt: string
}

interface SingleSlide {
  type: 'single'
  src: string
  alt: string
}

interface GridSlide {
  type: 'grid'
  images: GalleryImage[]
}

type GallerySlide = SingleSlide | GridSlide

// 配列に型を追加
const gallerySlides: GallerySlide[] = [
  {
    type: 'single',
    src: '/11__SU1HXzE0ODY.webp?height=709&width=780',
    alt: '画像：館内'
  },
  {
    type: 'grid',
    images: [
      { src: '/12__SU1HXzE0OTA.webp?height=335&width=507', alt: '画像：看板' },
      { src: '/NU.jpeg?height=335&width=507', alt: '画像：カフェ' },
      { src: '/14__SU1HXzE1MDA.webp?height=335&width=507', alt: '画像：カフェ' }
    ]
  },
  {
    type: 'single',
    src: '/11__SU1HXzE0ODY.webp?height=709&width=780',
    alt: '画像：館内'
  },
  {
    type: 'grid',
    images: [
      { src: '/11__SU1HXzE0ODY.webp?height=335&width=507', alt: '画像：カフェ' },
      { src: '/11__SU1HXzE0ODY.webp?height=335&width=507', alt: '画像：カフェ' },
      { src: '/11__SU1HXzE0ODY.webp?height=335&width=507', alt: '画像：入口' }
    ]
  }
]
export default function GallerySection() {
  return (
    <section id="lnk_gall" className="py-24 relative mt-24">
      {/* Decorative Background */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full bg-[#E6E9F2]/50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50c0 0 20-35 50-35s35 35 35 35-5 15-35 15-50-15-50-15zM50 50c0 0-20 35-50 35s-35-35-35-35 5-15 35-15 50 15 50 15z' fill='%23CBD5F2' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container mx-auto max-w-6xl relative">
        <div className="mb-12">
          <h2 className="text-6xl relative inline-block">
            <span className="sr-only">ギャラリー</span>
            <span aria-hidden="true" className="relative">
              <span className="text-[#7A91B4]">G</span>allery
            </span>
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {gallerySlides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                {slide.type === 'single' ? (
                  <div className="relative aspect-[11/10] w-full">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-sm"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2">
                      <div className="relative aspect-[3/2] w-full">
                        <Image
                          src={slide.images[0].src}
                          alt={slide.images[0].alt}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-sm"
                        />
                      </div>
                    </div>
                    {slide.images.slice(1).map((image, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-[3/2] w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-sm"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  )
}

