"use client"
import React from "react"
import { MdOutlineNavigateNext } from "react-icons/md"
import { SlArrowLeft } from "react-icons/sl"

const Top = () => {
  const strings = [
    "Flat 10% Off on your first order, use code: FARAK10",
    "Free international shipping on orders over INR 30,000.",
  ]
  const [currentIndex, setCurrentIndex] = React.useState(1)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

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

  const selectedString = strings[currentIndex]
  return (
    <div className="h-[40px] w-full flex gap-16 items-center justify-center bg-[#4D3B35] text-white text-[11px] font-[300] uppercase">
      <div className="w-[600px] relative flex items-center justify-center">
        <button onClick={prev} className="absolute left-0">
          <SlArrowLeft className="text-[12px]" />
        </button>
        <span>{selectedString}</span>
        <button onClick={next} className="absolute right-0">
          <SlArrowLeft className="rotate-180 text-[12px]" />
        </button>
      </div>
    </div>
  )
}

export default Top
