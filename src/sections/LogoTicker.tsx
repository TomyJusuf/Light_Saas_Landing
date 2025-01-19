import acmeLogo from '../assets/logo-acme.png'
import quntumLogo from '../assets/logo-quantum.png'
import echologo from '../assets/logo-echo.png'
import celestialLogo from '../assets/logo-celestial.png'
import pulseLogo from '../assets/logo-pulse.png'
import apexLogo from '../assets/logo-apex.png'
import Image from 'next/image'

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 md:flex-none">
            <Image
              src={acmeLogo}
              alt="acmeLogo"
              className="logo-ticker-image"
            />
            <Image
              src={quntumLogo}
              alt="quntumLogo"
              className="logo-ticker-image"
            />
            <Image
              src={echologo}
              alt="echologo"
              className="logo-ticker-image"
            />
          </div>
          <Image
            src={celestialLogo}
            alt="celestialLogo"
            className="logo-ticker-image"
          />
          <Image
            src={pulseLogo}
            alt="pulseLogo"
            className="logo-ticker-image"
          />
          <Image src={apexLogo} alt="apexLogo" className="logo-ticker-image" />
        </div>
      </div>
    </div>
  )
}
