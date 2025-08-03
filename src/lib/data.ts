
export const companyImage = [
    {
        src: "/images/companies/caterpillar.png",
        alt: "Caterpillar",
    },
    {
        src: "/images/companies/Komatsu.png",
        alt: "Komatsu",
    },
    {
        src: "/images/companies/lowes.png",
        alt: "Lowe's",
    },
    {
        src: "/images/companies/deere.png",
        alt: "John Deere",
    },
    {
        src:"/images/companies/homedepot.png",
        alt: "Home Depot",
    },
    {
        src: "/images/companies/trimble.png",
        alt: "Trimble",
    },
]

export const defaultAchievements = [
  { label: "Projects Delivered", value: "350+" },
  { label: "Total Project Value", value: "$2.5B+" },
  { label: "Repeat Clients", value: "89%" },
  { label: "Years of Experience", value: "25+" },
];



export interface AboutUsData {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}


export const aboutUsData: AboutUsData[] = [
    {
        title: "About Us",
        description: "We are a leading construction management software company, dedicated to transforming the industry with innovative solutions.",
        mainImage: {
            src: "/images/aboutUs.jpg",
            alt: "About Us Image",
        },
        secondaryImage: {
            src: "/images/aboutUs2.jpg",
            alt: "About Us2 Image",
        },
        breakout: {
           src: '/images/logo.png',
           alt: 'Company Logo',
           title:"Built by Construction Experts",
           description: "Our team has decades of experience in construction and technology, ensuring our solutions meet real-world needs.",
           buttonText: "Learn More",
           buttonUrl: "#about",
         
        },
        companiesTitle: "Trusted by Industry Leaders",
        companies: companyImage,
        achievementsTitle: "Proven Track Record",
        achievements: defaultAchievements,
    }
]


export const members = [
    {
        name: 'Alex Mitchell',
        role: 'Founder & CEO',
        avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
    },
    {
        name: 'Rachel Davis',
        role: 'Site Operations Lead',
        avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    },
    {
        name: 'James Wilson',
        role: 'Safety Coordinator',
        avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
    },
    {
        name: 'Lisa Anderson',
        role: 'Quality Assurance',
        avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    },
]


export const testimonials = [
    {
        name: 'John Smith',
        id: 'testimonial-1',
        text: 'ConsxTrack has completely transformed our project management. The scheduling and tracking features are top-notch.',
        avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    },
    {
        name: 'Jane Doe',
        id: 'testimonial-2',
        text: 'The user interface is incredibly intuitive, making it easy for our team to adopt ConsxTrack.',
        avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
    },
    {
        name: 'Michael Johnson',
        id: 'testimonial-3',
        text: 'ConsxTrack has streamlined our workflow and improved collaboration across teams.',
        avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    },
]




export interface ContactUsData {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
}


export const contactUsData = {
    title: "Contact Us",
    description: "Have questions or need support? We're here to help.",
    phone: "+1 (555) 123-4567",
    email: "support@consxtrack.com"
}