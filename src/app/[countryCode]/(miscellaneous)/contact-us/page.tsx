import React from "react"

const page = () => {
  return (
    <section className="flex flex-col px-6 py-8 md:py-0 md:px-0 md:flex-row w-full h-max bg-[rgba(251,251,251)]">
      <div className="w-full h-full flex flex-col md:pr-[50px] pb-[40px] md:pb-[80px] font-[400] text-[16px]">
        <div className="w-full md:px-16">
          <h2 className="uppercase text-[27px] text-black font-[400] mt-[50px] mb-[20px]">
            Contact Us
          </h2>
          <p className="mt-[40px] md:mt-[50px]">
            Need Help? We're Here for You! <br />
            <br /> At ByHumans, we value your experience and are committed to
            providing exceptional support. If you have any questions, concerns,
            or need assistance, don’t hesitate to reach out to us. <br />
          </p>
          <p className="mt-[30px]">
            <a
              className="underline text-blue-600"
              href="mailTo:byhumans.in@gmail.com"
            >
              byhumans.in@gmail.com
            </a>
            <br />
            <a className="underline text-blue-600" href="tel:+917397827043">
              +91 73978 27043
            </a>
          </p>
          <h2 className="uppercase text-[1.3rem] text-black font-[400] mt-[50px] mb-[20px]">
            How We Can Help You
          </h2>
          <p className="my-[3px]">
            <span className="font-[500]">Product Support: </span> Need help
            understanding our products or services? We’ll guide you through
            every detail.
          </p>
          <p className="my-[3px]">
            <span className="font-[500]">Technical Assistance: </span> Facing
            technical issues? Our experts are ready to troubleshoot and resolve
            them.
          </p>
          <p className="my-[3px]">
            <span className="font-[500]">Order Queries: </span> Questions about
            your orders, tracking, or delivery? Let us help.
          </p>
          <p className="my-[3px]">
            <span className="font-[500]">Feedback & Suggestions: </span> Share
            your thoughts—your feedback helps us improve and serve you better.
          </p>
          <h2 className="uppercase text-[1.3rem] text-black font-[400] mt-[50px] mb-[20px]">
            Why Choose Us?
          </h2>
          <p className="my-[3px]">
            <span className="font-[500]">Quick Response Times: </span> We aim to
            address all queries within 24-48 hours.
          </p>
          <p className="my-[3px]">
            <span className="font-[500]">Personalized Support: </span> Each
            request is handled with care, ensuring the best possible solution
            for your needs.
          </p>
          <p className="my-[3px]">
            <span className="font-[500]">Dedicated Team: </span> Our
            knowledgeable and friendly team is here to make your experience
            seamless.
          </p>
          <h2 className="uppercase text-[1.3rem] text-black font-[400] mt-[50px] mb-[20px]">
            Working Hours
          </h2>
          <p className="my-[3px]">
            Our support team is available: <br />
            🕒 Monday to Saturday: 9:00 AM to 6:00 PM <br />
            📆 Sunday & Holidays: Responses may take slightly longer.
          </p>
          <p className="my-[3px]">
            <br />
            <br />
            We look forward to helping you! Thank you for choosing ByHumans.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
