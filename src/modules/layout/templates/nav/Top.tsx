"use client"
import React from "react"
import { motion } from "framer-motion"
import { SlArrowLeft } from "react-icons/sl"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Top = () => {
  const strings = [
    {
      url: "Flat 10% Off on all baseball hats, use code: HUMAN10",
      color: "rgb(143,44,55)",
    },
    {
      url: "Free international shipping on orders over INR 2,000.",
      color: "rgb(83,84,53)",
    },
    {
      url: "Flat 50% Off on your first order, use code: FIRST50",
      color: "rgb(238,214,150)",
    },
    {
      url: "Free domestic shipping on all orders.",
      color: "rgb(17,17,17)",
    },
  ]
  const [currentIndex, setCurrentIndex] = React.useState(1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [strings.length])

  const next = () => {
    if (currentIndex === strings.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(strings.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const selectedString = strings[currentIndex].url

  return (
    <div
      style={{
        backgroundColor: `${strings[currentIndex].color}`,
        color:
          strings[currentIndex].color === "rgb(238,214,150)"
            ? "black"
            : "white",
      }}
      className={`h-[32px] transition-all duration-500 w-full flex gap-16 items-center justify-center text-[11px] font-[300] uppercase relative`}
    >
      <div className="w-[600px] relative flex items-center justify-center">
        <button onClick={prev} className="absolute px-4 left-0">
          <SlArrowLeft className="text-[12px]" />
        </button>
        <motion.span
          initial={{ marginTop: "70px" }}
          animate={{ marginTop: 0 }}
          exit={{ marginTop: "-70px" }}
          transition={{ duration: 0.5 }}
          key={selectedString}
        >
          {selectedString}
        </motion.span>
        <button onClick={next} className="absolute px-4 right-0">
          <SlArrowLeft className="rotate-180 text-[12px]" />
        </button>
      </div>
      <div className="absolute right-0 h-full hidden md:block px-6">
        <div className="flex gap-4 h-full items-center text-[11px]">
          <LocalizedClientLink
            href="/help"
            className="hover:underline cursor-pointer"
          >
            Help
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/store"
            className="hover:underline cursor-pointer"
          >
            Store
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Top
