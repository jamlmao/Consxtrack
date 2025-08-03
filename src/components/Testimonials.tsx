'use client'
import React, {useEffect, useState} from 'react'
import { testimonials } from '@/lib/data'
import { GridPattern } from './magicui/grid-pattern'
import type { CarouselApi } from "@/components/ui/carousel";
import {Carousel,CarouselContent,CarouselItem,} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from './ui/card';
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);



  return (
  <section className="px-[5%] py-16 md:py-24 lg:py-32 relative">
        <GridPattern
          width={20}
          height={20}
          x={1}
          y={1}
          className="[mask-image:linear-gradient(to_right_bottom,white,transparent,transparent)]"
        />
       <div className="container relative z-10 ml-20">
            <Carousel 
                setApi={setApi} 
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 4000,
                        stopOnInteraction: false,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id} className="flex justify-center">
                            <Card className="border-0 shadow-xl bg-muted backdrop-blur-sm max-w-4xl w-full mx-4 md:mx-8">
                                <CardContent className="flex flex-col items-center justify-center text-center px-6 md:px-12 py-12">
                                    <p className="mb-8 max-w-4xl font-medium text-lg md:text-2xl lg:text-3xl leading-relaxed">
                                         &ldquo;{testimonial.text}&rdquo;
                                    </p>
                                    <Avatar className="mb-4 size-16 md:size-24">
                                        <AvatarImage src={testimonial.avatar} />
                                            <AvatarFallback>
                                                {testimonial.name}
                                            </AvatarFallback>
                                    </Avatar>
                                    <p className="mb-1 text-sm font-medium md:text-lg">
                                        {testimonial.name}
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="container flex justify-center py-16">
                {testimonials.map((testimonial, index) => (
                    <Button
                        key={testimonial.id}
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                            api?.scrollTo(index);
                        }}
                    >
                        <div
                            className={`size-2.5 rounded-full ${index === current ? "bg-primary" : "bg-input"}`}
                        />
                    </Button>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Testimonials