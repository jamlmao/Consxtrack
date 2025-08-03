// static datas

export const navItems = [
    {name: 'Home', href: '/'},
    {name: 'Services', href: '#services'},
    {name: 'About', href: '#about'},
    {name: 'Contact', href: '#contact'},
    
]

export type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
export interface FeatureItem {
  id: ImageKey;
  title: string;
  description: string;
  icon: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: 'item-1',
    title: 'Project Timeline Management',
    description: 'ConsxTrack streamlines construction workflows with intelligent scheduling, milestone tracking, and real-time progress monitoring to keep your projects on time and within budget.',
    icon: 'Calendar'
  },
  {
    id: 'item-2', 
    title: 'Resource & Material Tracking',
    description: 'Comprehensive inventory management with automated material ordering, equipment scheduling, and workforce allocation to optimize resource utilization across all job sites.',
    icon: 'ChartBarIncreasingIcon'
  },
  {
    id: 'item-3',
    title: 'Quality & Safety Compliance', 
    description: 'Digital inspection checklists, safety protocol enforcement, and compliance documentation that ensures your projects meet industry standards and regulatory requirements.',
    icon: 'ShieldCheck'
  },
  {
    id: 'item-4',
    title: 'Financial Controls & Reporting',
    description: 'Advanced cost tracking, budget forecasting, and automated invoicing with detailed financial reports that provide complete visibility into project profitability.',
    icon: 'DollarSign'
  }
];


export const images = {
  'item-1': {
    image: '/images/planning.jpg',
    alt: 'Project timeline visualization',
  },
  'item-2': {
    image: '/images/resource.jpg', 
    alt: 'Resource tracking dashboard',
  },
  'item-3': {
    image: '/images/safety.jpg',
    alt: 'Safety compliance checklist',
  },
  'item-4': {
    image: '/images/finance.jpg',
    alt: 'Financial reporting dashboard',
  },
}








/* 
    hero section 
    feature section
    about us  x team section
    testimonials 
    CTA
    contact us
    footer 


*/