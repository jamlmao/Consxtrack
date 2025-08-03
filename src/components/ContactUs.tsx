import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import {contactUsData} from "@/lib/data";


const ContactUs = () => {
  return (
    <>
     <section className='px-[5%] py-16 md:py-20 lg:py-24 relative' id="contact">
        <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={2}
                repeatDelay={1}
                className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
                )}
        />

        <div className="container">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                <div className="text-center lg:text-left">
                    <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                        {contactUsData.title}
                    </h1>
                     <p className="text-muted-foreground">
                        {contactUsData.description}
                     </p>
                </div>
                <div className="mx-auto w-fit lg:mx-0">
                    <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                        Contact Details
                    </h3>
                     <ul className="ml-4 list-disc">
                        <li>
                            <span className="font-bold">Phone: </span>
                            {contactUsData.phone}
                        </li>
                        <li>
                        <span className="font-bold">Email: </span>
                            <a href={`mailto:${contactUsData.email}`} className="underline">
                                {contactUsData.email}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-lg border p-10 relative z-10 bg-muted">
                <div className="flex gap-4">
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="firstname">First Name</Label>
                        <Input type="text" id="firstname" placeholder="First Name" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="lastname">Last Name</Label>
                        <Input type="text" id="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input type="text" id="subject" placeholder="Subject" />
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea placeholder="Type your message here." id="message" />
                </div>
                <Button className="w-full">Send Message</Button>
            </div>
          </div>      
        </div>
     </section>
    </>
  )
}

export default ContactUs