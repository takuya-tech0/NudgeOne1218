import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="bg-white relative mt-12 sm:mt-24">
      {/* Decorative Background */}
      <div 
        className="absolute top-0 left-0 w-full sm:w-1/2 h-full bg-[#E6E9F2]/50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50c0 0 20-35 50-35s35 35 35 35-5 15-35 15-50-15-50-15zM50 50c0 0-20 35-50 35s-35-35-35-35 5-15 35-15 50 15 50 15z' fill='%23CBD5F2' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Mobile Layout */}
          <div className="relative py-12 block sm:hidden">
            {/* Top Image */}
            <div className="relative w-[180px] aspect-[4/3] ml-4 mb-8">
              <Image
                src="/cofee_women.jpg?height=220&width=293"
                alt="コーヒーを持つ女性"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>

            {/* Small Image Right */}
            <div className="relative w-[120px] aspect-square mr-4 ml-auto mb-12">
              <Image
                src="/raptop.jpg?height=100&width=100"
                alt="チェアに座る人物"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>

            {/* Center Content */}
            <div className="relative flex mb-12">
              {/* Vertical Text */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-start gap-1">
                <span className="writing-vertical-rl text-gray-300 text-4xl font-light tracking-widest">
                  THIS ONE
                </span>
                <span className="writing-vertical-rl text-gray-300 text-4xl font-light tracking-widest">
                  CHOOSE
                </span>
              </div>

              {/* About Title and Text */}
              <div className="flex-1 text-center pr-16">
                <h2 className="mb-8 inline-flex items-center gap-0">
                  <span className="text-7xl font-serif">A</span>
                  <span className="text-7xl font-light">bout</span>
                </h2>
                <p className="text-sm leading-loose tracking-wider">
                  多様化する時間。<br />
                  こだわりを持ち、自分らしく振る舞う。<br />
                  そんな時間が作れる場所。
                </p>
              </div>
            </div>  
          </div>

          {/* Desktop Layout */}
          <div className="relative py-20 hidden sm:block">
            {/* Top Layout Grid */}
            <div className="relative grid grid-cols-2 gap-x-20 mb-32">
              {/* Left Column */}
              <div className="relative">
                <div className="relative aspect-[4/3] w-[220px]">
                  <Image
                    src="/cofee_women.jpg?height=220&width=293"
                    alt="コーヒーを持つ女性"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-sm"
                  />
                </div>
                <div className="relative aspect-square w-[100px] mt-64 ml-20">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="チェアに座る人物"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-sm"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between items-end">
                <div className="relative aspect-[4/3] w-[240px]">
                  <Image
                    src="/placeholder.svg?height=240&width=320"
                    alt="ラップトップで作業する手元"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-sm"
                  />
                </div>
                <div className="flex items-start gap-1 mt-12">
                  <span className="writing-vertical-rl text-gray-300 text-6xl font-light tracking-widest">
                    THIS ONE
                  </span>
                  <span className="writing-vertical-rl text-gray-300 text-6xl font-light tracking-widest">
                    CHOOSE
                  </span>
                </div>
              </div>
            </div>

            {/* Centered About Section */}
            <div className="text-center w-full">
              <h2 className="mb-8 flex items-center justify-center gap-0">
                <span className="text-7xl font-serif">A</span>
                <span className="text-7xl font-light">bout</span>
              </h2>
              <p className="text-base leading-loose tracking-wider">
                多様化する時間。<br />
                こだわりを持ち、自分らしく振る舞う。<br />
                そんな時間が作れる場所。
              </p>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative aspect-[3/4] w-full -mt-12 sm:-mt-24">
            <Image
              src="/Nudgeone_2.webp?height=1200&width=900"
              alt="モダンなラウンジエリア"
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

