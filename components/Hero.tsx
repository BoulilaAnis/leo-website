import React from 'react'
import { Spotlight } from './motion-primitives/spotlight'
import { MainCard } from "@/components/Card";

const Hero = () => {
    return (
        <div className='relative w-screen sm:h-full min-h-screen rounded-sm border border-primary'>
            <div className="flex items-center justify-center h-full">
                <MainCard />
            </div>
        </div>
    )
}

export default Hero
