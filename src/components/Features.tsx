'use client'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from './magicui/border-beam'
import { ImageKey, featureImages } from '@/lib/links'
import React from 'react'
 
  
  
  const [activeItem, setActiveItem] = useState<ImageKey>('item-1')


const Features = () => {
  return (
    <div>Features</div>
  )
}

export default Features