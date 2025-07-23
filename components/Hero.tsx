import React from 'react'
import { Spotlight } from './motion-primitives/spotlight'
import { MainCard } from "@/components/Card";

const Hero = () => {
  return (
    <div className='relative w-screen sm:h-full min-h-screen rounded-sm border border-primary'>
      <Spotlight
        className='bg-zinc-700 blur-2xl'
        size={64}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
      <div className="flex items-center justify-center h-full">
        <MainCard />
      </div>
    </div>
  )
}

export default Hero
