import React from 'react'
import { Spotlight } from './motion-primitives/spotlight'
import { MainCard } from "@/components/Card";

const Hero = () => {
  return (
     <div className='relative aspect-video w-[100vw] h-[100vh] rounded-sm border border-zinc-100  '>
      <Spotlight
        className='bg-zinc-700 blur-2xl'
        size={64}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
              <div className="flex items-center justify-center">
                  <MainCard />
              </div>
    </div>
  )
}

export default Hero
