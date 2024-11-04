'use client'

import ContactSection from "./section/contactSection";
import FAQSection from "./section/FAQSection";
import FooterSection from "./section/footerSection";
import HeroSection from "./section/heroSection";
import OfferProductSection from "./section/offerProductSection";
import OurProductSection from "./section/ourProductSection";

export default function PageWrapper() {
    return (
        <div>
            <HeroSection />
            <OfferProductSection />
            <OurProductSection />
            <FAQSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}