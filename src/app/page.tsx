import ContactUs from "@/components/ContactUs";
import CallToAction from "@/components/CTA";
import FeatureSection from "@/components/Features";
import Footer from "@/components/Footer";

import HeroSection from "@/components/Hero";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <CallToAction />
      <ContactUs />
      <Footer />
    </>
  );
}
