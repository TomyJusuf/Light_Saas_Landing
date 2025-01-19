import Image from 'next/image'
import productImage from '../assets/product-image.png'
import pyramidImage from '../assets/pyramid.png'
import tubeImage from '../assets/tube.png'
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className=" max-w-[600px] mx-auto">
          <div className="flex justify-center md:justify-start mb-5">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="title-content text-center md:text-[54px] md:leading-[60px]">
            A move effective way to track progress
          </h2>
          <p className="padding-content text-center">
            Effortless turn your idea into a fully functional, responsive,Sass
            website in just minues with this template
          </p>
        </div>
        <div className="relative mx-auto ">
          <Image src={productImage} alt="Product image" className="" />
          <Image
            src={pyramidImage}
            alt="Pyramid image"
            width={230}
            height={230}
            className="hidden sm:block absolute -top-20 -right-20  md:w-80 md:h-80 lg:w-96 lg:h-96"
          />
          <Image
            src={tubeImage}
            alt="Tube image"
            width={180}
            height={180}
            className=" sm:block absolute bottom-16 -left-20  md:w-64 md:h-64 "
          />
        </div>
      </div>
    </section>
  )
}
