"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const Hero: React.FC = () => {
  const images: string[] = [
    "https://assets.vogue.com/photos/5d110e7747f2c2f086fbfea9/master/w_2240,c_limit/_VIE5791.jpg",
    // "https://res.cloudinary.com/dw0bwetr1/image/upload/v1729593535/hero1_xp8kja.jpg",
    // "https://res.cloudinary.com/dw0bwetr1/image/upload/v1729670185/hero3_yygdfd.jpg",
    // "https://res.cloudinary.com/dw0bwetr1/image/upload/v1729670185/hero2_qklexn.jpg"
  ]

  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const nextIndex = (prev + 1) % images.length
        if (nextIndex === 0) {
          setCurrent(0)
        }
        return nextIndex
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [images.length])

  const setCurrentImage = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrent(index)
    }
  }

  return images.length === 1 ? (
    <>
      <div className="flex flex-col md:flex-row h-max w-full">
        <div
          style={{
            background: `url(${images[0]})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-cover w-full h-[450px] md:h-[680px]"
        ></div>
        <div className="bg-[#fff8f0] flex items-center justify-center w-full h-[450px] md:h-[680px]">
          <div className="p-16 w-full flex flex-col items-center justify-center">
            <p className="text-[#111] italic text-[2.5rem] font-[300] font-times">
              Mix, match, and save
            </p>
            <h3 className="font-times text-[4.5rem] leading-[5rem] text-center">
              Up to INR 500 off
            </h3>
            <p className="text-[#111] font-mono mb-8 text-center mt-[1rem]">
              Spend over INR 2,000 and enjoy INR 500 off your purchase. <br />Happy shopping!
            </p>
            <Link
              href="store"
              className="border border-black/70 text-[0.9rem] text-black/80 hover:bg-black hover:text-white transition-all duration-200 px-6 py-2 uppercase"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="h-max w-full relative bg-ui-bg-subtle">
      <div className={`relative h-full overflow-hidden`}>
        <motion.div
          initial={{ filter: "brightness(0)" }}
          animate={{ filter: "brightness(1)" }}
          exit={{ filter: "brightness(0)" }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${images[current]})`,
          }}
          className="h-[620px] w-full bg-cover bg-center bg-no-repeat overflow-hidden"
          key={current}
        ></motion.div>
        <div className="h-max w-max rounded-full absolute bottom-12 right-12 flex gap-[4px]">
          {images.map((_, index) => (
            <span
              className={`h-[14px] aspect-square ${
                current === index ? "border" : "border-none"
              } border-white flex items-center justify-center`}
              key={index}
            >
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`aspect-square w-[7px] relative ${
                  current === index ? "bg-white" : "bg-white/70"
                }`}
              ></button>
            </span>
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center justify-center">
          <h3 className="uppercase text-[1.8rem] font-[400] text-white tracking-[0.45rem] text-center">
            HYMN OF MEMORIES
          </h3>
          <Link
            href="/store"
            className="border border-white bg-white hover:bg-transparent text-[0.95rem] text-black/80 hover:text-white transition-all duration-200 px-6 py-2 uppercase"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
