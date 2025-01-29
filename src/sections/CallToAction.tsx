'use client'
import ArrorRight from '../assets/arrow-right.svg'
import starImage from '../assets/star.png'
import springImage from '../assets/spring.png'
import Image from 'next/image'
import {
  motion,
  useTransform,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { use, useRef } from 'react'
export const CallToAction = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [250, -520])
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log(latest)
  })

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip pt-10 "
    >
      <div className="container ">
        <div className="section-heading relative">
          <h2 className="section-title text-center mt-5  px-1">
            Sing up for free today
          </h2>
          <p className="section-component text-center mt-5  px-4">
            Celebrate the joy of accomplishment with an app designed to track
            your pregress and motivate your efforts
          </p>{' '}
          <motion.img
            style={{ y: translateY }}
            src={starImage.src}
            alt="Star image"
            className="hidden md:block md:absolute -top-36 left-20 md:-left-36 md:-top-40 w-40 h-40 md:w-56 md:h-56 lg:-left-56 xl:w-80 xl:h-80 xl:-left-80 z-10"
            width={360}
            height={360}
          />{' '}
        </div>
        <div className="flex gap-2 mt-10 justify-center relative ">
          <button type="button" className="btn btn-primary ">
            Get for free
          </button>
          <button className="btn btn-text gap-1 flex">
            <span>Get started</span>
            <ArrorRight className="h-5 w-5 " />
          </button>
          <motion.img
            style={{ y: translateY }}
            src={springImage.src}
            alt="Spring image"
            className="hidden top-0 right-20  md:block md:absolute md:-right-1 md:-top-20 w-40 h-40 md:w-56 md:h-56  lg:right-20 z-10 xl:w-80 xl:h-80 xl:right-2"
            width={360}
            height={360}
          />
        </div>
      </div>
    </section>
  )
}
