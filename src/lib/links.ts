import { features } from "process"

export const navItems = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '#about'},
    {name: 'Contact', href: '#contact'},
    {name: 'Services', href: '#services'},
]

export type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'

export const featureImages = {
   'item-1': {
        src: "/images/planning.jpg",
        alt: "Timeline Management",
    },
    'item-2': {
        src: "/images/resource.jpg",
        alt: "Resource Allocation",
    },
    'item-3': {
        src: "/images/finance.jpg",
        alt: "Finance Management",
    },
    'item-4': {
        src: "/images/safety.jpg",
        alt: "Safety Management",
    },
}