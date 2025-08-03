import React from 'react'
import { members } from '@/lib/data'
import { GridPattern } from './magicui/grid-pattern'
import { cn } from '@/lib/utils'

const OurTeams = () => {
  return (
     <section className="px-[5%] py-16 md:py-24 lg:py-32 relative">
         <GridPattern
            width={20}
            height={20}
            x={1}
            y={1}
            className={cn(
                "[mask-image:linear-gradient(to_left_top,white,transparent,transparent)]",
            )}
         />
         <div className="container relative z-10 ">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Our team</h2>
                <div>
                    <h3 className="mb-6 text-lg font-medium">Developers</h3>
                    <div className="grid grid-cols-2 gap-8 border-t py-6 md:grid-cols-4 lg:gap-12 place-items-center">
                        {members.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 mx-auto">
                                    <img 
                                        className="aspect-square rounded-full object-cover" 
                                        src={member.avatar} 
                                        alt={member.name} 
                                        height="460" 
                                        width="460" 
                                        loading="lazy" 
                                    />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
           </div>             
     </section>
  )
}

export default OurTeams