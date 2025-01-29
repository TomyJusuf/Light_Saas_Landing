'use client'
import { div } from 'framer-motion/client'
import ArrowRight from '../assets/arrow-right.svg'
import cogImg from '../assets/cog.png'
import Image from 'next/image'
import cylinterImage from '../assets/cylinder.png'
import noodle from '../assets/noodle.png'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion'
import { useRef } from 'react'

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [450, -250])
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // console.log(latest)
  })
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip "
    >
      <div className="container">
        <div className="md:flex items-center md:justify-between ">
          <div className="md:w-[478px]">
            <div className="tag">Version 3.0 is here</div>
            <h1 className="section-title">Pathway to productivity</h1>
            <p className="section-component">
              Celebrate the joy of accomplishment with an app designed that
              track you progress, motivate you, and boost your productivity.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1 flex">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 " />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
            <motion.img
              src={cogImg.src}
              alt="Cog image"
              className=" md:absolute md:h-full md:w-auto md:max-w-none"
              animate={{ translateY: [-20, 20] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                repeatType: 'mirror',
                easy: 'easyInOut',
              }}
            />

            <motion.img
              src={cylinterImage.src}
              alt="Cylinder"
              width={220}
              height={220}
              className="hidden md:block -left-32 -top-16 md:absolute "
              style={{ translateY }}
            />
            <motion.img
              src={noodle.src}
              alt="Noodle"
              width={220}
              height={220}
              className="hidden md:hidden lg:block lg:-right-12 top-[550px] lg:absolute lg:rotate-[30deg] "
              style={{
                rotate: 40,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
