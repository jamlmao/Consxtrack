'use client'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './ui/accordion'
import { Calendar, ChartBarIncreasingIcon,Database,DollarSign, Shield, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from './magicui/border-beam'
import { GridPattern } from './magicui/grid-pattern'
import { ImageKey, featuresData, images } from '@/lib/links'
import React from 'react'
import { cn } from '@/lib/utils'
import AboutUs from './About'
 
  
  const iconMap = {
    Calendar,
    ChartBarIncreasingIcon, 
    ShieldCheck,
    DollarSign
}
 


const FeatureSection = () => {

  const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

  return (
   <>
      <section className='px-[5%] py-16 md:py-24 lg:py-32 relative' id="services">
           <GridPattern
              width={20}
              height={20}
              x={1}
              y={1}
              className={cn(
              "[mask-image:linear-gradient(to_right_top,white,transparent,transparent)]",
              )}
            />
          <div className="bg-gradient-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>

          

          <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center my-12">
          
             <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
                Where construction meets innovation
             </h2>

             <p>
              ConsxTrack revolutionizes construction project monitoring with smart automation, real-time reporting, and seamless collaboration tools that keep your projects on schedule and within budget.
             </p>
          </div>

          <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0 relative z-10">
            <Accordion
              type="single"
              value={activeItem}
              onValueChange={(value)=> setActiveItem(value as ImageKey)}
              className='w-full'
            >
             {featuresData.map((feature) => {
              const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
              return(
               <AccordionItem
                 key={feature.id}
                 value={feature.id}
               >
                  <AccordionTrigger>
                    <div className="flex items-center gap-2 text-base">
                        <IconComponent className="size-4" />
                        {feature.title}   
                    </div>
                  </AccordionTrigger> 
                 <AccordionContent>
                   {feature.description}
                 </AccordionContent>
               </AccordionItem>
             )
            })}
            </Accordion>
            <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
              <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
              <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem}
                    initial={{ opacity: 0, y:6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                  >
                    <Image
                      src={images[activeItem].image}
                      className="size-full object-cover object-left-top dark:mix-blend-lighten"
                      alt={images[activeItem].alt}
                      width={400}
                      height={600}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-red-700 to-transparent dark:via-white/50"
              />
            </div>
          </div>
      </section>
      <AboutUs/>
   </>
  )
}

export default FeatureSection