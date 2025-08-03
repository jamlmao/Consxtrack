'use client';
import { Button } from "@/components/ui/button";
import { GridPattern } from './magicui/grid-pattern'
import { cn } from "@/lib/utils";
import { aboutUsData} from "@/lib/data"
import React from 'react'
import Image from "next/image";
import OurTeams from "./Teams";


const AboutUs = () => {
    const data = aboutUsData[0]
  return (
    <>
        <section className='px-[5%] py-16 md:py-24 lg:py-32 relative' id="about">
            <GridPattern
                width={20}
                height={20}
                x={1}
                y={1}
                className={cn(
                "[mask-image:linear-gradient(to_left_bottom,white,transparent,transparent)]",
                )}
            />

            <div className="container">
                 <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
                    <h1 className="text-5xl font-semibold">{data.title}</h1>
                    <p className="text-muted-foreground">{data.description}</p>
                </div>
                <div className="grid gap-7 lg:grid-cols-3 relative z-10">
                    <Image
                        src={data.mainImage?.src || ''}
                        alt={data.mainImage?.alt || ''}
                        width={950}
                        height={620}
                        className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
                    />

                    <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                        <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto relative z-10 ">
                            <Image
                                src={data.breakout?.src || ''}
                                alt={data.breakout?.alt || ''}
                                width={50}
                                height={50}
                                className="mr-auto h-12"
                            />
                            <div>
                                <p className="mb-2 text-lg font-semibold">
                                    {data.breakout?.title}
                                </p>
                                <p className="text-muted-foreground">
                                    {data.breakout?.description}
                                </p>
                            </div>
                            <Button variant="outline" className="mr-auto" asChild>
                                <a href={data.breakout?.buttonUrl} target="_blank">
                                    {data.breakout?.buttonText}
                                </a>
                            </Button>
                        </div>
                        <Image
                            src={data.secondaryImage?.src || ''}
                            alt={data.secondaryImage?.alt || ''}
                            className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="py-32">
                    <p className="text-center">{data.companiesTitle}</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-8">
                        {data.companies?.map((company, index) => (
                            <div className="flex items-center gap-3" key={company.src + index}>
                                <Image
                                    key={index}
                                    src={company.src}
                                    alt={company.alt}
                                    width={300}
                                    height={300}
                                    className="h-20 w-auto object-contain grayscale transition-all hover:grayscale-0 md:h-24 lg:h-28"
                                    
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h2 className="text-4xl font-semibold">
                            {data.achievementsTitle}
                        </h2>
                        <p className="text-muted-foreground">
                            {data.achievementsDescription}
                        </p>
                    </div>    
                    <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
                        {data.achievements?.map((achievement, index) => (
                            <div className="flex flex-col gap-2" key={achievement.label+index}>
                                <p>{achievement.label}</p>
                                <span className="text-4xl font-semibold md:text-5xl">
                                    {achievement.value}
                                </span>
                            </div>
                        ))}
                    </div>   
                    <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div> 
                </div>            
            </div>
        </section>
        <OurTeams />
    </>
  )
}

export default AboutUs

