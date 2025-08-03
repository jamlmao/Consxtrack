import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from '@/lib/utils'

export default function CallToAction() {
    return (
        <section className='px-[5%] py-16 md:py-20 lg:py-24 relative'>
             <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={2}
                repeatDelay={1}
                className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
             />
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Ready to Transform Your Construction Projects?
                    </h2>
                    <p className="mt-4">
                        Join hundreds of construction teams who trust ConsxTrack to deliver projects on time and within budget. Start your free trial today.
                    </p>

                    <form
                        action=""
                        className="mx-auto mt-10 max-w-sm lg:mt-12">
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input
                                placeholder="Your mail address"
                                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                                type="email"
                            />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button
                                    aria-label="submit"
                                    className="rounded-(--radius)">
                                    <span className="hidden md:block">Start Free Trial</span>
                                    <SendHorizonal
                                        className="relative mx-auto size-5 md:hidden"
                                        strokeWidth={2}
                                    />
                                </Button>
                            </div>
                        </div>
                    </form>
                    <p className="mt-4 text-sm text-muted-foreground">
                        14-day free trial • No credit card required • Setup in minutes
                    </p>
                </div>
            </div>
        </section>
    )
}