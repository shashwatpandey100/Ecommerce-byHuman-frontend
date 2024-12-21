"use client"
import React from "react"
import { Image as MedusaImage } from "@medusajs/medusa"
import { FaArrowRight } from "react-icons/fa6"
import Image from "next/image"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [current, setCurrent] = React.useState(0)

  const next = () => {
    setCurrent((prevCurrent) =>
      prevCurrent >= images.length - 1 ? 0 : prevCurrent + 1
    )
  }

  const prev = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? images.length - 1 : prevCurrent - 1
    )
  }

  const go = (index: number) => { 
    setCurrent(index)
  }

  return (
    <div
      style={{
        backgroundImage: `url(${images[current]?.url})`,
      }}
      className="flex items-start h-[50vh] md:h-[calc(100vh-60px)] w-full bg-cover bg-bottom bg-no-repeat relative mb-[80px] md:mb-0"
    >
      <button
        onClick={next}
        className="bg-white rounded-full h-[32px] aspect-square flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2"
      >
        <FaArrowRight className="text-[0.8rem] text-black/80" />
      </button>
      <button
        onClick={prev}
        className="bg-white rounded-full h-[32px] aspect-square flex items-center justify-center absolute left-4 md:left-[calc(100px+0.5rem)] top-1/2 -translate-y-1/2"
      >
        <FaArrowRight className="text-[0.8rem] text-black/80 rotate-180" />
      </button>
      <div className="flex flex-row md:flex-col flex-1 gap-y-1 absolute bottom-[-90px] md:top-1/2 md:-translate-y-1/2 md:left-4 max-h-[600px] w-full md:w-max overflow-auto">
        {images.map((image, index) => {
          return (
            <div
              onClick={() => {
                go(index)
              }}
              key={image?.id}
              className={`relative h-[80px] ${current === index && 'border border-blue-500'} aspect-square cursor-pointer`}
              id={image?.id}
            >
              <Image
                src={image?.url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0 aspect-square h-[80px]"
                alt={`Product image ${index + 1}`}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
   
