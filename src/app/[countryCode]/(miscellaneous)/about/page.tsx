import React from "react"

const page = () => {
  return (
    <section className="flex flex-col px-6 py-8 md:py-0 md:px-0 md:flex-row w-full h-max md:h-[calc(100vh-70px)] bg-[rgba(251,251,251)]">
      <div className="w-full md:w-[40%] px-6 flex items-center justify-center">
        <div
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dw0bwetr1/image/upload/v1734843513/srishti_01_atntbe.png)`,
          }}
          className="h-[50vh] md:h-[70vh] w-full md:w-[65%] bg-cover bg-bottom bg-no-repeat"
        ></div>
      </div>
      <div className="w-full md:w-[60%] h-full flex flex-col justify-center md:pr-[50px] pb-[40px] md:pb-[100px] font-[400] text-[14px]">
        <div className="w-full md:max-w-[94%]">
          <p className="mt-[40px] md:mt-[90px]">
            Our brand is a product of human innovation and creativity, built
            with passion, dedication, and a commitment to excellence. <br />
            <br />
            We believe that headwear is more than just an accessory—it&apos;s a
            statement, a shield, and a mark of identity for humans seeking
            individuality and self-expression. Each piece we create is infused
            with a story, a purpose, and a desire to inspire confidence in those
            who wear it.
          </p>
          <p className="mt-[20px]">
            The name BY HUMANS was inspired by a message sent into space. <br />{" "}
            In 2018, when SpaceX launched a Tesla Roadster, it carried a hidden
            inscription on its circuit board that read, &quot;Made on Earth by
            humans.&quot; This phrase captured the essence of human creativity,
            daring, and the drive to reach beyond. <br /> Just like that
            message, BY HUMANS also embodies the spirit of innovation and
            creativity, reminding us of what we can achieve together when we
            dare to dream and build. <br />
            <br />
            Our journey began with the simple yet powerful belief that every
            product should tell a story—one of craftsmanship, courage, and
            collaboration. Each step of our journey has been guided by the
            values of resilience, ambition, and a shared vision for a better
            tomorrow.
          </p>
          <h2 className="uppercase text-[1.2rem] text-black font-[400] mt-[20px] mb-[10px]">
            What We Stand For
          </h2>
          Our designs are rooted in authenticity and purpose. <br />
          Every cap, beanie, and hat is crafted with the idea of embracing human
          expression, individuality, and the joy of being unapologetically
          yourself. <br />
          <br />
          We blend comfort, style, and quality to create pieces that humans can
          count on—whether you&apos;re out exploring the world, creating art,
          building dreams, or simply embracing the beauty of everyday life.{" "}
          <br />
          At BY HUMANS, we celebrate diversity, inclusivity, and the boundless
          potential of the human spirit. <br />
          <br /> Our commitment to innovation ensures that our designs remain
          timeless and relevant, offering something special for everyone.
        </div>
      </div>
    </section>
  )
}

export default page
