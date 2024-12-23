import React from "react"

const page = () => {
  return (
    <section className="flex flex-col px-6 py-8 md:py-0 md:px-0 md:flex-row w-full h-max bg-[rgba(251,251,251)]">
      <div className="w-full h-full flex flex-col md:pr-[50px] pb-[40px] md:pb-[80px] font-[400] text-[16px]">
        <div className="w-full px-8 md:px-16">
          <h2 className="uppercase text-[27px] text-black font-[400] mt-[50px] mb-[20px]">
            Returns Policy
          </h2>
          <p className="mt-[40px] md:mt-[50px]">
            Mail us within 2 days of receiving the product so that we can verify
            and process for return or exchange. <br />
            <br /> The order will be picked from your place and then we will
            ship the new in case of exchange or refund will be processed after
            verification of the received products. <br /> Refund will be the
            processed to the same mode of payment, in case of cash on delivery
            we will ask the mode of payment to pay the refund. <br />
            <br /> Cod charge will not be refunded. <br /><br /> All the original tags
            and packaging should be there.
          </p>
          <h2 className="uppercase text-[1.3rem] text-black font-[400] mt-[50px]">
            Return Time
          </h2>
          <p className="mt-[20px]">
            Within 2 days from receiving the product <br /><br /> Contact us within 2
            days to return or exchange the product. <br /><br /> Mail us at {" "}
            <a href="mailTo:byhumans.in@gmail.com" className="text-blue-600 underline">byhumans.in@gmail.com</a> to process the return.
          </p>
          <p>
            We offer both return and exchange on our products. <br /><br /><br />
            <span className="italic">There might be some exceptions.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
