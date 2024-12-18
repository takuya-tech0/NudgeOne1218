import HeroWithReservation from '@/components/HeroWithReservation'
import AboutSection from '@/components/AboutSection'
import GallerySection from '@/components/GallerySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroWithReservation />
      <AboutSection />
      <GallerySection />
      <div className="mt-24"></div>
      <Footer />
    </div>
  )
}

