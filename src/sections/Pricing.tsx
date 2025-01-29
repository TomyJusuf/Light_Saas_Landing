'use client'
import { motion } from 'framer-motion'
import CheckIcon from '../assets/check.svg'
import { twMerge } from 'tailwind-merge'

interface Tier {
  title: string
  monthlyPrice: number
  buttonText: string
  popular: boolean
  inverse: boolean
  features: string[]
}
const pricingTiers: Tier[] = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '2GB storage',
      'Integrations',
      'Basic support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      'Up to 50 project members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced support',
      'Export support',
    ],
  },
  {
    title: 'Business',
    monthlyPrice: 19,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      'Up to 5 project members',
      'Unlimited tasks and projects',
      '200GB storage',
      'Integrations',
      'Dedicated account manager',
      'Custom fields',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features',
    ],
  },
]

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title text-center">Pricing</h2>
          <p className="section-component text-center">
            Free forever. No credit card required.Update for inlimited
            taks,better security, and exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((tier) => {
            const { title, monthlyPrice, buttonText, popular, inverse } = tier
            return (
              <div
                key={title}
                className={twMerge(
                  'card',
                  inverse === true && 'bg-black text-white border-black'
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      'text-lg font-bold text-black/50',
                      inverse === true && 'text-white/60'
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: '-100% ',
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: 'loop',
                          duration: 1,
                          ease: 'linear',
                        }}
                        className="bg-[linear-gradient(to_right,#dd7dd7,#e1cd86,#bbcb92,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#3bffff,#dd7ddf)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-2 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      'tracking-tighter font-bold text-black/50',
                      inverse === true && 'text-white/60'
                    )}
                  >
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    'btn btn-primary w-full mt-[30px]',
                    inverse === true && 'bg-white text-black'
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-2"
                    >
                      <CheckIcon className="h-4 w-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
