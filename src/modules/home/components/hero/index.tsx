"use client"
import React from "react"
import { motion } from "framer-motion"

const Hero: React.FC = () => {
  const images: string[] = [
    "https://farak.co/cdn/shop/files/07-08-2024_FARAK00313_copy_1357701d-f2f8-499e-9388-4aff7c390b8b.jpg?v=1724322019&width=2200",
    "https://farak.co/cdn/shop/files/07-08-2024_FARAK00546.jpg?v=1724274874&width=2400",
    "https://farak.co/cdn/shop/files/24.png?v=1718272364&width=2800",
    "https://farak.co/cdn/shop/files/Fall_Winter_Drop_2_Banner_Desktop1234.png?v=1702988829&width=2800",
    "https://farak.co/cdn/shop/files/Karamkaar_Banner_3200x1800_947ca85b-3342-4c9e-beb1-b2a17467887d.png?v=1694550420&width=2800",
    "https://farak.co/cdn/shop/files/Viraam_Banner_3200x1800_6e890e39-88d3-4e81-a029-202a82dbe8d8.png?v=1694550418&width=2800",
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
    }, 5000);
  
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
            backgroundImage: `url(${images[current]})`,
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
      </div>
    </div>
  )
}

export default Hero
