import { div } from 'framer-motion/client'
import ArrowRight from '../assets/arrow-right.svg'
import cogImg from '../assets/cog.png'
import Image from 'next/image'
import cylinterImage from '../assets/cylinder.png'
import noodle from '../assets/noodle.png'
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
      <div className="container  ">
        <div className="md:flex items-center md:justify-between ">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border boder-[#222]/10 rounded-lg px-3 py-1 tracking-tight ">
              Version 3.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tighter mt-6">
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
            <Image
              src={cogImg}
              alt="Cog image"
              className=" md:absolute md:h-full md:w-auto md:max-w-none  "
            />
            <Image
              src={cylinterImage}
              alt="Cylinder"
              width={220}
              height={220}
              className="hidden md:block -left-32 -top-5 md:absolute "
            />
            <Image
              src={noodle}
              alt="Noodle"
              width={220}
              height={220}
              className="hidden md:block md:-right-12 top-[550px] md:absolute md:rotate-[30deg] "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
