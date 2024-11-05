'use client'

import Navbar from "../components/navbar";
import ContactSection from "../sections/contactSection";
import FAQSection from "../sections/FAQSection";
import FooterSection from "../sections/footerSection";
import HeroSection from "../sections/heroSection";
import OfferProductSection from "../sections/offerProductSection";
import OurProductSection from "../sections/ourProductSection";

export default function PageWrapper() {

    return (
        <div>
            <Navbar />
            <HeroSection />
            <OfferProductSection />
            <OurProductSection />
            <FAQSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}