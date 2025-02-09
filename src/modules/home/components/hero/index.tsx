"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LiaTimesSolid } from "react-icons/lia"

const Hero: React.FC = () => {
  const images: string[] = [
    "https://assets.vogue.com/photos/5d110e7747f2c2f086fbfea9/master/w_2240,c_limit/_VIE5791.jpg",
  ]

  const [current, setCurrent] = React.useState(0)
  const [showNewsletter, setShowNewsletter] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [status, setStatus] = React.useState('')

  React.useEffect(() => {
    const timeout = setTimeout(() => setShowNewsletter(true), 500)
    return () => clearTimeout(timeout)
  }, [])

  const closePopup = () => setShowNewsletter(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const nextIndex = (prev + 1) % images.length
        if (nextIndex === 0) {
          setCurrent(0)
        }
        return nextIndex
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [images.length])

  const setCurrentImage = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrent(index)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const OMNISEND_API_KEY = process.env.NEXT_PUBLIC_OMNISEND_API_KEY
      const response = await fetch('https://api.omnisend.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': OMNISEND_API_KEY
        },
        body: JSON.stringify({
          email: email,
          status: 'subscribed',
          statusDate: new Date().toISOString(),
          source: 'website-popup',
          tags: ['newsletter', 'first-order-discount']
        })
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => {
          closePopup()
        }, 2000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error saving email:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {showNewsletter && (
         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
         <div className="bg-gray-100 p-8 relative rounded-lg w-full text-center max-w-md shadow-lg">
           <button
             onClick={closePopup}
             className="text-2xl absolute top-3 right-5 font-bold text-gray-800 hover:underline"
           >
             <LiaTimesSolid />
           </button>
           <h2 className="text-lg tracking-[0.03rem] mt-4 font-semibold mb-4">
             BE A PART OF THE BYHUMAN FAM
           </h2>
           <p className="text-gray-600 text-xs mb-6">
             AND GET 10% OFF ON YOUR FIRST ORDER
           </p>
           <form onSubmit={handleSubmit}>
             <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="ENTER YOUR EMAIL"
               className="w-full px-4 bg-gray-100 placeholder:font-medium tracking-[0.04rem] placeholder:text-gray-700 border-t-0 border-x-0 focus:outline-none py-4 border-[2px] border-gray-800 text-sm mb-4"
               required
             />
             <button
               type="submit"
               disabled={isSubmitting}
               className="w-full mt-3 bg-white py-3 rounded-full border border-gray-700 font-semibold tracking-[0.04rem] text-sm transition disabled:opacity-50"
             >
               {isSubmitting ? 'SUBMITTING...' : 'SUBSCRIBE NOW'}
             </button>
             {status === 'success' && (
               <p className="text-green-600 mt-2">Successfully subscribed!</p>
             )}
             {status === 'error' && (
               <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>
             )}
           </form>
         </div>
       </div>
      )}

      {images.length === 1 ? (
        <div className="flex flex-col md:flex-row h-max w-full">
          <div
            style={{
              background: `url(${images[0]})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-cover w-full h-[450px] md:h-[620px]"
          ></div>
          <div className="bg-[#fff8f0] flex items-center justify-center w-full h-max md:h-[620px]">
            <div className="px-8 py-16 md:p-16 w-full flex flex-col items-center justify-center">
              <p className="text-[#111] text-center md:text-start italic text-[2.5rem] font-[300] font-times">
                Mix, match, and save
              </p>
              <h3 className="mt-6 md:mt-0 font-times text-[3rem] md:text-[4.5rem] leading-[3.5rem] md:leading-[5rem] text-center">
                Up to INR 500 off
              </h3>
              <p className="text-[#111] font-mono mb-8 md:text-center mt-[1rem]">
                Spend over INR 2,000 and enjoy INR 500 off your purchase.
                <br />
                Happy shopping!
              </p>
              <Link
                href="/store"
                className="border border-black/70 text-[0.9rem] text-black/80 hover:bg-black hover:text-white transition-all duration-200 px-6 py-2 uppercase"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-max w-full relative bg-ui-bg-subtle">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${images[current]})`,
            }}
            className="h-[620px] w-full bg-cover bg-center bg-no-repeat"
          ></motion.div>
          <div className="absolute bottom-12 right-12 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-white" : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <h3 className="uppercase text-2xl font-medium text-white tracking-wide">
              HYMN OF MEMORIES
            </h3>
            <Link
              href="/store"
              className="mt-4 border border-white bg-white hover:bg-transparent text-black hover:text-white px-6 py-2 uppercase transition-all duration-200"
            >
              Explore
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero