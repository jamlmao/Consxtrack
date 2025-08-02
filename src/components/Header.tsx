'use client'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { navItems } from '@/lib/links'
import Image from 'next/image'

const Header = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])



  return (
    <header>
        <nav data-state={menuState && 'active'} 
            className="fixed z-20 w-full pt-2"
        >
            {/* navbar motion when scrolled  */}
            <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                <motion.div
                    key={1}
                    className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}
                >
                    {/* Mobile menu button */}
                    <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                        <Link 
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                width={80}
                                height={80}
                            />
                        </Link>

                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                            className = "relative z-20 -m-2.5 -mr-4 block  cursor pointer p-2.5 lg:hidden"
                        >
                            <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200"/>
                            <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200"/>
                        </button>

                        <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {navItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-[#222121] hover:text-[#630607] hover:scale-105 block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                        </div>            
                    </div>
                    <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">

                        <div className="lg:hidden">
                            <ul className="space-y-6 text-base">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-[#222121] hover:text-[#630607] block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                        ))}
                            </ul>
                        </div>

                        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                            <Button
                                asChild
                                size="sm"
                            >
                                <Link href="#">
                                        <span>Get Started</span>
                                </Link>
                            </Button>
                        </div>
                    </div>    


                </motion.div>
            </div>



        </nav>
    </header>
  )
}

export default Header