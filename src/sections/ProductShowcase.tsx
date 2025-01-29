'use client'
import Image from 'next/image'
import productImage from '../assets/product-image.png'
import pyramidImage from '../assets/pyramid.png'
import tubeImage from '../assets/tube.png'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { use, useRef } from 'react'

export const ProductShowcase = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [450, -120])
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest)
  })
  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className=" section-heading">
          <div className="flex justify-center md:justify-start mb-5">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title text-center md:text-[54px] md:leading-[60px]">
            A move effective way to track progress
          </h2>
          <p className="section-component text-center">
            Effortless turn your idea into a fully functional, responsive,Sass
            website in just minues with this template
          </p>
        </div>
        <div className="relative mx-auto ">
          <Image src={productImage} alt="Product image" className="" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid image"
            width={230}
            height={230}
            className="hidden sm:block absolute -top-20 -right-20  md:w-80 md:h-80 lg:w-96 lg:h-96"
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            width={180}
            height={180}
            className="hidden sm:block absolute bottom-48 -left-20  md:w-64 md:h-64 "
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  )
}
