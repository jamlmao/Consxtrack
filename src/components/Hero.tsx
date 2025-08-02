'use client'


import React from 'react'
import Header from './Header'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { InfiniteSlider } from './ui/infinite-slider'
import { ProgressiveBlur } from './ui/progressive-blur'
import { GlowEffect } from './ui/glow-effect'
import { ChevronRight } from 'lucide-react'


const HeroSection = () => {
  return (
    <>
        <Header/>
        <main className="overflow-x-hidden">
              {/* Full background image */}
            <div className="absolute inset-0 -z-10 rounded-3xl lg:rounded-[3rem] border border-black/10 overflow-hidden">
                <Image
                    className="size-full object-cover opacity-60"
                    src="/images/bg2.jpg"
                    width={1920}
                    height={1080}
                    alt="Construction site background"
                    priority
                />
                 {/* Gradient overlay for better blending */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4F4]/5 via-[#F7F4F4]/80 to-[#F7F4F4]/20"></div>

                {/* Additional subtle gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Radial overlay to focus attention on content */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#F7F4F4]/30 to-[#F7F4F4]/70"></div>
            </div>


            <section>
                <div className="mx-auto w-full max-w-screen-lg py-24 md:pb-32 lg:pb-36 lg:pt-72">
                    <div className='relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12'>
                        <div className='mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left'>
                            <h1 className='mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-[var(--constrack-text-primary)] '>
                               Track Better and Smarter
                            </h1>
                            <p className="mt-8 max-w-2xl text-balance text-lg text-[#630607]">
                                Streamline your construction projects with intelligent workflow tracking, real-time collaboration, and powerful resource management. From blueprints to completion.
                            </p>

                            <div className='mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start'>
                            
                               <div className='relative'>
                                    <GlowEffect 
                                        className="rounded-full "
                                        colors={['#D0B5B6', '#8B0B0D', '#A10D0F']}
                                        mode='colorShift'
                                        blur='medium'
                                        duration={5}
                                        scale={1}
                                    />

                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base relative"
                                    >
                                        <Link href="#link">
                                            <span className="text-nowrap">Start Building</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                               </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    </>
  )
}

export default HeroSection
