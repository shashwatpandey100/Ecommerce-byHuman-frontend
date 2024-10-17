"use client"
import React, { useRef } from "react"
import Slider from "react-slick"

const Hero: React.FC = () => {
  const images: string[] = [
    "https://farak.co/cdn/shop/files/07-08-2024_FARAK00313_copy_1357701d-f2f8-499e-9388-4aff7c390b8b.jpg?v=1724322019&width=2200",
    "https://farak.co/cdn/shop/files/07-08-2024_FARAK00546.jpg?v=1724274874&width=2400",
    "https://farak.co/cdn/shop/files/24.png?v=1718272364&width=2800",
    "https://farak.co/cdn/shop/files/Fall_Winter_Drop_2_Banner_Desktop1234.png?v=1702988829&width=2800",
    "https://farak.co/cdn/shop/files/Karamkaar_Banner_3200x1800_947ca85b-3342-4c9e-beb1-b2a17467887d.png?v=1694550420&width=2800",
    "https://farak.co/cdn/shop/files/Viraam_Banner_3200x1800_6e890e39-88d3-4e81-a029-202a82dbe8d8.png?v=1694550418&width=2800",
  ]
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: true,
    dotsClass: "slick-dots dot-indicator",
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "max-content",
          backgroundColor: "transparent",
          position: "absolute",
          left: "0",
          right: "0",
          margin: "auto",
          bottom: "20px",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          width: "7px",
          height: "7px",
        }}
      ></span>
    ),
  }


  return (
    <div className="h-max w-full relative bg-ui-bg-subtle">
      <div className={`relative h-full overflow-hidden`}>
        <Slider ref={sliderRef} {...settings}>
          {images &&
            images.map((image, index) => (
              <div
                key={index}
                className={`h-[600px] overflow-hidden`}
              >
                <div
                  className={`h-full overflow-hidden bg-cover bg-no-repeat bg-center`}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
