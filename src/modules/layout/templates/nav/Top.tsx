"use client"
import React from "react"

const Top = () => {
  const strings = [
    "Flat 10% Off on all baseball hats, use code: HUMAN10",
    "Free international shipping on orders over INR 2,000.",
    "Flat 50% Off on your first order, use code: FIRST50",
    "Free domestic shipping on all orders.",
    "Flat 50% Off on your first order, use code: FIRST50",
    "Free domestic shipping on all orders.",    
    "Flat 50% Off on your first order, use code: FIRST50",
    "Free domestic shipping on all orders.",    
    "Flat 50% Off on your first order, use code: FIRST50",
    "Free domestic shipping on all orders.",    

  ]

  // Duplicate strings for seamless scrolling
  const loopedStrings = [...strings, ...strings]

  return (
    <div
      style={{
        backgroundColor: "#fff8f0", // Fixed background color
        color: "#000000", // Fixed text color
      }}
      className="h-[32px] w-full flex items-center overflow-hidden relative"
    >
      <div
        className="flex gap-[8rem] whitespace-nowrap animate-marquee hover:animate-marquee-paused"
        style={{
          willChange: "transform",
        }}
      >
        {loopedStrings.map((text, index) => (
          <span key={index} className="text-[11px] font-[300] uppercase">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Top
