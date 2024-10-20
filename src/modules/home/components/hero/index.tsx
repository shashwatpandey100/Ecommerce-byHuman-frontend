"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const Hero: React.FC = () => {
  const images: string[] = [
    "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto,dpr_1.1/1696856045284-amandlaportrait2jpg_5293x4320.jpg",
    "https://www.chanel.com/puls-img/c_limit,w_3200/q_auto:good,dpr_auto,f_auto/1702311840485-lucydjpg.jpg",
    "https://www.chanel.com/puls-img/c_limit,w_2880/q_auto:good,dpr_auto,f_auto/1727862338409-homepagecorpoonedesktop2jpg_1620x2880.jpg",
    "https://puls-img.chanel.com/c_limit,w_1920/q_auto:good,f_auto,dpr_1.1/1696595585251-jennyportait2jpg_7057x5760.jpg",
    "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_2048/FSH-1722605053603-08alllookd.jpg",
  ]

  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const nextIndex = (prev + 1) % images.length;
        if (nextIndex === 0) {
          setCurrent(0);
        }
        return nextIndex;
      });
    }, 10000);
  
    return () => clearInterval(interval);
  }, [images.length]);

  const setCurrentImage = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrent(index)
    }
  }

  return (
    <div className="h-max w-full relative bg-ui-bg-subtle">
      <div className={`relative h-full overflow-hidden`}>
        <motion.div
          initial={{ filter: "brightness(0)" }}
          animate={{ filter: "brightness(1)" }}
          exit={{ filter: "brightness(0)" }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${images[current]})`,
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
          <h3 className="uppercase text-[1.8rem] font-[400] text-white tracking-[0.45rem]">HYMN OF MEMORIES</h3>
          <Link href="store" className="border border-white bg-white hover:bg-transparent text-[0.95rem] text-black/80 hover:text-white transition-all duration-200 px-6 py-2 uppercase">Explore</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
