import ArrowRightSVG from '../assets/arrow-right.svg'
import Logo from '../assets/logosaas.png'
import Image from 'next/image'
import MenuIcon from '../assets/menu.svg'
export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black text-white">
        <p className="text-white/60 pr-2 hidden sm:block">
          Streamline your workflow and boost your productivity
        </p>
        <p>Get started for free</p>
        <ArrowRightSVG className="h-4 w-4 inline-flex justify-center items-center" />
      </div>
      <div className="py-5 ">
        <div className="container  flex flex-wrap justify-between items-center">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <MenuIcon width={20} height={20} className="md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Costumes</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button
              type="button"
              className="bg-black text-white py-2 px-4 tracking-tight rounded-lg font-medium items-center justify-center"
            >
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
